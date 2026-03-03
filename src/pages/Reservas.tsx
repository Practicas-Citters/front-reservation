import { useState, useMemo, useContext, useEffect } from 'react';
import { Link } from 'react-router';

import { UserContext } from '../context/user.context';

import { Sports } from '../mock-data/sport-mock-data';
import { Courts, type Court } from '../mock-data/court-mock-data';

import { CustomHeader } from '../shared/CustomHeader';
import { CustomTitle } from '../shared/CustomTitle';
import { CustomSubtitle } from '../shared/CustomSubtitle';

import '../styles/Reservas.css';
import CustomFooter from '../shared/CustomFooter';

export const Reservas = () => {
  const { isAuthenticated } = useContext(UserContext);

  const [selectedSportId, setSelectedSportId] = useState<string | 'all'>('all');
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [duration, setDuration] = useState(1);

  const getSportIdFromParams = () => {
    const params = new URLSearchParams(window.location.search);
    const sportId = params.get('sportId');
    return sportId ? sportId : 'all';
  }

  const getSelectedCourtFromParams = () => {
    const params = new URLSearchParams(window.location.search);
    const courtId = params.get('courtId');
    if (courtId) {
      const court = Courts.find(c => c.id === courtId);
      return court || null;
    }
    return null;
  }

  useEffect(() => {
      setSelectedSportId(getSportIdFromParams());
      setSelectedCourt(getSelectedCourtFromParams());
  }, [selectedSportId, selectedCourt]);

  const filteredCourts = useMemo(() => {
    if (selectedSportId === 'all') return Courts;
    return Courts.filter(court => court.sport.id === selectedSportId);
  }, [selectedSportId]);

  const totalCost = useMemo(() => {
    if (!selectedCourt) return 0;
    return selectedCourt.pricePerHour * duration;
  }, [selectedCourt, duration]);

  const handleSelectCourt = (court: Court) => {
    setSelectedCourt(court);
    setDuration(1);
    setReservationDate('');
    setReservationTime('');
  };

  const isFormValid = reservationDate !== '' && reservationTime !== '' && selectedCourt !== null;

  return (
    <div className="reservas-page">
      <CustomHeader />

      <div className="reservas-layout_container">
        <main className="reservas-main-content">
          <div className="reservas-header-text">
            <CustomTitle text="Reserva tu cancha" className="reservas-title" />
            <CustomSubtitle text="Busca, selecciona y reserva de forma rápida" className="reservas-subtitle" />
          </div>

          {/* Selector de deportes */}
          <div className="sport-selector-container">
            <div
              className="sport-selection-item"
              onClick={() => setSelectedSportId('all')}
            >
              <div className={`sport-circle-button ${selectedSportId === 'all' ? 'active' : ''}`}>
                <span className="all-sports-icon">🌍</span>
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
          </div>

          <div className="reservas-flex-list">
            {filteredCourts.map((court) => (
              <div
                key={court.id}
                className={`reserva-card ${selectedCourt?.id === court.id ? 'active' : ''}`}
                onClick={() => handleSelectCourt(court)}
              >
                <img src={court.image} alt={court.name} className="reserva-image" />
                <div className="reserva-info">
                  <h3 className="reserva-name">{court.name}</h3>
                  <p className="reserva-description">{court.description}</p>
                  <div className="reserva-details">
                    <span className="reserva-price">{court.pricePerHour}€/h</span>
                    <span className="reserva-capacity">👤 {court.capacity}</span>
                  </div>
                  <button className="reserva-selection-button">
                    {selectedCourt?.id === court.id ? 'Seleccionada' : 'Seleccionar'}
                  </button>
                </div>
              </div>
            ))}
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
                      <label>Fecha de juego</label>
                      <input
                        type="date"
                        className="sidebar-input"
                        value={reservationDate}
                        onChange={(e) => setReservationDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="input-group">
                      <label>Hora de inicio</label>
                      <select
                        className="sidebar-input"
                        value={reservationTime}
                        onChange={(e) => setReservationTime(e.target.value)}
                      >
                        <option value="">Selecciona la hora:</option>
                        {Array.from({ length: 15 }, (_, i) => i + 8).map(hour => (
                          <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                        ))}
                      </select>
                    </div>

                    <div className="input-group">
                      <label>Duración:</label>
                      <select
                        className="sidebar-input"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                      >
                        {[1, 1.5, 2, 2.5, 3].map(h => (
                          <option key={h} value={h}>{h} {h === 1 ? 'hora' : 'horas'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="sidebar-divider"></div>

                <div className="sidebar-info-row">
                  <span>Precio por hora:</span>
                  <strong>{selectedCourt.pricePerHour}€</strong>
                </div>

                <div className="sidebar-info-row">
                  <span>Ubicación:</span>
                  <strong>Pista {selectedCourt.id}</strong>
                </div>

                <div className="sidebar-divider"></div>

                <div className="sidebar-total">
                  <span>Precio Total: </span>
                  <span className="total-amount">{totalCost}€</span>
                </div>
                {isAuthenticated ?
                  (
                    <button className="pay-button" disabled={!isFormValid}>
                      Proceder al Pago
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
      <CustomFooter/>
    </div>
  );
};