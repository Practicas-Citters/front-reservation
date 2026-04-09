import { useState, useMemo, useContext, useEffect } from 'react';
import { Link } from 'react-router';

import { checkAvailability } from '../services/api';

import { UserContext } from '../context/user.context';

import { useSports, useCourts, useSchedule, useBookingsByCourt } from '../hooks/useBooking';
import type { Court } from '../mock-data/court-mock-data';

import { CustomHeader } from '../shared/CustomHeader';
import { CustomTitle } from '../shared/CustomTitle';
import { CustomSubtitle } from '../shared/CustomSubtitle';
import CustomFooter from '../shared/CustomFooter';

import '../styles/Reservas.css';

export const Reservas = () => {
  const { isAuthenticated,
    createNewBooking,
    user,
    favoriteCourts,
    addFavoriteCourt,
    removeFavoriteCourt } = useContext(UserContext);

  const { data: Sports = [], isLoading: isLoadingSports } = useSports();
  const { data: Courts = [], isLoading: isLoadingCourts } = useCourts();

  const [location, setLocation] = useState('');

  const [selectedSportId, setSelectedSportId] = useState<string | 'all'>('all');
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [reservationDate, setReservationDate] = useState('');
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

  const toggleFavorite = (e: React.MouseEvent, courtId: string) => {
    e.stopPropagation();
    if (isAuthenticated) {
      if (!favoriteCourts.includes(courtId)) {
        addFavoriteCourt(courtId);
      } else {
        removeFavoriteCourt(courtId);
      }
    }
  };


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const location = params.get('location');
    if (location) setLocation(location);

    const sportId = params.get('sportId');
    if (sportId) setSelectedSportId(sportId);

    const courtId = params.get('courtId');
    if (courtId && Courts.length > 0) {
      const court = Courts.find(c => c.id === courtId);
      if (court) setSelectedCourt(court);
    }
  }, [Courts, isAuthenticated]);

  useEffect(() => {
    setStartTime(null);
    setEndTime(null);
  }, [reservationDate, selectedCourt?.id]);

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!selectedCourt || !reservationDate || !startTime || !endTime) {
        setIsAvailable(null);
        return;
      }

      setIsCheckingAvailability(true);
      try {
        const result = await checkAvailability(
          selectedCourt.id,
          reservationDate,
          startTime,
          endTime
        );
        const available = typeof result === 'boolean' ? result : (result as any).isAvailable;
        setIsAvailable(available);
      } catch (error) {
        console.error("Error checking availability:", error);
        setIsAvailable(false);
      } finally {
        setIsCheckingAvailability(false);
      }
    };

    fetchAvailability();
  }, [startTime, endTime, reservationDate]);

  const filteredCourts = useMemo(() => {
    let filtered = Courts;

    if (selectedSportId !== 'all') {
      filtered = filtered.filter(court => court.sport.id === selectedSportId);
    }

    if (location !== '') {
      filtered = filtered.filter(court => court.location.toLowerCase().includes(location.toLowerCase()));
    }

    return filtered;
  }, [selectedSportId, Courts, location]);

  const formattedDate = useMemo(() => {
    if (!reservationDate) return '';
    return reservationDate.split('-').reverse().join('-');
  }, [reservationDate]);

  const { data: schedule, isLoading: isLoadingSchedule } = useSchedule(selectedCourt?.id, formattedDate);
  const { data: courtBookings = [] } = useBookingsByCourt(selectedCourt?.id);

  const isSlotDisabled = (time: string) => {
    return courtBookings.some(booking => {
      // Use reservationDate (yyyy-mm-dd) for comparison
      if (booking.date !== reservationDate) return false;

      const [startH, startM] = booking.startTime.split(':').map(Number);
      const [endH, endM] = booking.endTime.split(':').map(Number);
      const [currH, currM] = time.split(':').map(Number);
      
      const startMin = startH * 60 + startM;
      const endMin = endH * 60 + endM;
      const currMin = currH * 60 + currM;

      return currMin >= startMin && currMin < endMin;
    });
  };

  const duration = useMemo(() => {
    if (!startTime || !endTime) return 0;
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    const startInMinutes = startH * 60 + startM;
    const endInMinutes = endH * 60 + endM;
    return Math.max(0, (endInMinutes - startInMinutes) / 60);
  }, [startTime, endTime]);

  const totalCost = useMemo(() => {
    if (!selectedCourt || duration <= 0) return 0;
    return selectedCourt.pricePerHour * duration;
  }, [selectedCourt, duration]);

  const timeSlots = useMemo(() => {
    const scheduleData = Array.isArray(schedule) ? schedule[0] : schedule;
    if (!scheduleData || !scheduleData.startTime || !scheduleData.endTime) return [];
    
    const slots = [];
    const [startH, startM] = scheduleData.startTime.split(':').map(Number);
    const [endH, endM] = scheduleData.endTime.split(':').map(Number);

    let currentH = startH;
    let currentM = startM;

    while (currentH < endH || (currentH === endH && currentM <= endM)) {
      const timeStr = `${currentH.toString().padStart(2, '0')}:${currentM.toString().padStart(2, '0')}`;
      slots.push(timeStr);

      currentM += 30;
      if (currentM >= 60) {
        currentH += 1;
        currentM = 0;
      }
    }
    return slots;
  }, [schedule]);

  const handleSelectCourt = (court: Court) => {
    setSelectedCourt(court);
    setReservationDate('');
    setStartTime(null);
    setEndTime(null);
  };

  const handleTimeClick = (time: string) => {
    if (!startTime || (startTime && endTime)) {
      setStartTime(time);
      setEndTime(null);
    } else {
      const [startH, startM] = startTime.split(':').map(Number);
      const [clickH, clickM] = time.split(':').map(Number);
      const startInMin = startH * 60 + startM;
      const clickInMin = clickH * 60 + clickM;

      if (clickInMin < startInMin) {
        setStartTime(time);
        setEndTime(null);
      } else if (clickInMin > startInMin) {
        setEndTime(time);
      } else {
        setStartTime(time);
        setEndTime(null);
      }
    }
  };

  const isTimeInRange = (time: string) => {
    if (!startTime || !endTime) return time === startTime;
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    const [currH, currM] = time.split(':').map(Number);
    const startMin = startH * 60 + startM;
    const endMin = endH * 60 + endM;
    const currMin = currH * 60 + currM;
    return currMin >= startMin && currMin <= endMin;
  };


  const isFormValid = useMemo(() => {
    if (reservationDate === '' || startTime === null || endTime === null || selectedCourt === null) return false;
    
    const startIndex = timeSlots.indexOf(startTime);
    const endIndex = timeSlots.indexOf(endTime);
    
    if (startIndex === -1 || endIndex === -1) return false;
    
    for (let i = startIndex; i <= endIndex; i++) {
      if (isSlotDisabled(timeSlots[i])) return false;
    }
    
    return true;
  }, [reservationDate, startTime, endTime, selectedCourt, timeSlots, isSlotDisabled]);

  if (isLoadingSports || isLoadingCourts) {
    return <div className="loading-container">Cargando...</div>;
  }

  return (
    <div className="reservas-page">
      <CustomHeader />

      <div className="reservas-layout_container">
        <main className="reservas-main-content">
          <div className="reservas-header-text">
            <CustomTitle text="Reserva tu cancha" className="reservas-title" />
            <CustomSubtitle text="Busca, selecciona y reserva de forma rápida" className="reservas-subtitle" />
          </div>

          <div className="sport-selector-container">
            <div
              className="sport-selection-item"
              onClick={() => setSelectedSportId('all')}
            >
              <div className={`sport-circle-button ${selectedSportId === 'all' ? 'active' : ''}`}>
                <img src="/icons/all-sports-icon.png" alt="All sports" />
              </div>
              <span className="sport-name-label">Todos</span>
            </div>

            {Sports.map((sport) => (
              <div
                key={sport.id}
                className="sport-selection-item"
                onClick={() => setSelectedSportId(sport.id)}
              >
                <div className={`sport-circle-button ${selectedSportId === sport.id ? 'active' : ''}`}>
                  <img src={sport.iconUrl} alt={sport.name} />
                </div>
                <span className="sport-name-label">{sport.name}</span>
              </div>
            ))}
            <div className="search-bar-container">
              <span>⚲</span>
              <div className="search-bar">
                <input type="text"
                  placeholder="Introduce tu ubicación aquí..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value.trimStart())} />
              </div>
            </div>
          </div>

          <div className="reservas-flex-list">
            {filteredCourts.length > 0 ? (
              filteredCourts.map((court) => (
                <div
                  key={court.id}
                  className={`reserva-card ${selectedCourt?.id === court.id ? 'active' : ''}`}
                  onClick={() => handleSelectCourt(court)}
                >
                  <img src={court.image} alt={court.name} className="reserva-image" />
                  <div className="reserva-info">
                    <div className="reserva-header-row">
                      <h3 className="reserva-name">{court.name}</h3>
                      <button
                        className={`favorite-button ${favoriteCourts.includes(court.id) ? 'active' : ''}`}
                        onClick={(e) => toggleFavorite(e, court.id)}
                        title={favoriteCourts.includes(court.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                      >
                        {favoriteCourts.includes(court.id) ? '★' : '☆'}
                      </button>
                    </div>
                    <p className="reserva-description">{court.description}</p>
                    <div className="reserva-location-details">
                      <Link to={`/organization/${court.organization.id}`}>
                        <p className="reserva-organization">{court.organization.name}</p>
                      </Link>
                      <p className="reserva-location">, {court.location}</p>
                    </div>
                    <div className="reserva-details">
                      <span className="reserva-price">{court.pricePerHour}€/h</span>
                      <span className="reserva-capacity">👤 {court.capacity}</span>
                    </div>
                    <button className="reserva-selection-button">
                      {selectedCourt?.id === court.id ? 'Seleccionada' : 'Seleccionar'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results-message">
                <h3>Lo sentimos. No se han encontrado pistas en esta ubicación.</h3>
              </div>
            )}
          </div>
        </main>

        <aside className="sidebar-sticky">
          <h2 className="sidebar-title">Detalles de la Reserva</h2>

          <div className="sidebar-content">
            {selectedCourt ? (
              <>
                <div className="selected-court-summary">
                  <img src={selectedCourt.image} alt={selectedCourt.name} className="sidebar-image" />
                  <span className="sidebar-sport-tag">{selectedCourt.sport.name}</span>
                  <h3>{selectedCourt.name}</h3>
                </div>

                <div className="reservation-form-section">
                  <h4>Configura tu reserva</h4>
                  <div className="form-grid">
                    <div className="input-group">
                      <label>Fecha de la reserva</label>
                      <input
                        type="date"
                        className="sidebar-input"
                        value={reservationDate}
                        onChange={(e) => setReservationDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="input-group">
                      <label>Elige una hora de inicio y final</label>
                      <div className="horario-grid">
                        {isLoadingSchedule ? (
                          <p className="no-schedule-msg">Cargando horario...</p>
                        ) : timeSlots.length > 0 ? (
                          timeSlots.map(time => (
                            <button
                              key={time}
                              className={`horario-slot ${isTimeInRange(time) ? 'active' : ''}`}
                              onClick={() => handleTimeClick(time)}
                              disabled={isSlotDisabled(time)}
                            >
                              {time}
                            </button>
                          ))
                        ) : (
                          <p className="no-schedule-msg">{reservationDate ? 'No hay horarios disponibles' : 'Selecciona una fecha'}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {isAvailable === false && (
                  <p className="availability-error-msg">⚠️ Este horario ya está reservado. Por favor, selecciona otro.</p>
                )}

                <div className="sidebar-divider"></div>

                <div className="sidebar-info-row">
                  <span>Precio por hora:</span>
                  <strong>{selectedCourt.pricePerHour}€</strong>
                </div>

                <div className="sidebar-info-row">
                  <span>Ubicación:</span>
                  <strong>{selectedCourt.location}</strong>
                </div>

                <div className="sidebar-divider"></div>

                <div className="sidebar-total">
                  <span>Precio Total: </span>
                  {
                    (startTime && endTime) ? (
                      <span className="total-amount">{totalCost}€</span>
                    ) : (
                      <span className="total-amount">0€</span>
                    )
                  }
                </div>

                {isAuthenticated && user ?
                  (
                    <button
                      className="pay-button"
                      disabled={!isFormValid || isAvailable === false || isCheckingAvailability}
                      onClick={() => createNewBooking(user.email, {
                        courtId: selectedCourt.id,
                        date: reservationDate,
                        startTime: startTime!,
                        endTime: endTime!,
                        numPeople: selectedCourt.capacity,
                        totalPrice: totalCost
                      })}
                    >
                      {isCheckingAvailability ? 'Comprobando...' : (isAvailable === false ? 'Horario no disponible' : 'Proceder al Pago')}
                    </button>
                  )
                  :
                  (
                    <Link to="/login">
                      <button className="pay-button">
                        Inicia sesión para reservar
                      </button>
                    </Link>
                  )}
              </>
            ) : (
              <div className="sidebar-empty">
                <p>Por favor, selecciona una cancha para continuar.</p>
                <div className="empty-icon">🏟️</div>
              </div>
            )}
          </div>
        </aside>
      </div>
      <CustomFooter />
    </div>
  );
};