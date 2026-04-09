import type { Organization } from "./organization-mock-data";
import { type Sport } from "./sport-mock-data";
import { type User } from "./user-mock-data";

export interface Court {
    id: string,
    name: string,
    description: string,
    image: string,
    capacity: number,
    pricePerHour: number,
    isAvailable: boolean,
    sport: Sport,
    user: User,
    location: string
    organization: Organization;
}

// export const Courts: Court[] =
//     [
//         {
//             id: "1",
//             name: "Pista Central Fútbol",
//             description: "Pista de césped artificial de última generación.",
//             image: Sports[0].iconUrl,
//             capacity: 22,
//             pricePerHour: 50,
//             isAvailable: true,
//             sport: Sports[0],
//             user: users[0],
//             location: "Calle Mayor, 1"
//         },
//         {
//             id: "2",
//             name: "Pabellón Baloncesto A",
//             description: "Pista cubierta con suelo de parquet.",
//             image: Sports[1].iconUrl,
//             capacity: 10,
//             pricePerHour: 40,
//             isAvailable: true,
//             sport: Sports[1],
//             user: users[1],
//             location: "Av. de la Constitución, 15"
//         },
//         {
//             id: "3",
//             name: "Pista Tenis 1",
//             description: "Pista de tierra batida.",
//             image: Sports[5].iconUrl,
//             capacity: 4,
//             pricePerHour: 20,
//             isAvailable: false,
//             sport: Sports[5],
//             user: users[2],
//             location: "Polideportivo Municipal"
//         },
//         {
//             id: "4",
//             name: "Pista Pádel 1",
//             description: "Pista de cristal con iluminación LED.",
//             image: Sports[6].iconUrl,
//             capacity: 4,
//             pricePerHour: 25,
//             isAvailable: true,
//             sport: Sports[6],
//             user: users[3],
//             location: "Club de Pádel El Viso"
//         },
//         {
//             id: "5",
//             name: "Cancha Voleibol",
//             description: "Pista polideportiva ideal para voleibol.",
//             image: Sports[3].iconUrl,
//             capacity: 12,
//             pricePerHour: 30,
//             isAvailable: true,
//             sport: Sports[3],
//             user: users[4],
//             location: "Pabellón de Deportes"
//         },
//         {
//             id: "6",
//             name: "Pista Bádminton",
//             description: "Pista interior con red profesional.",
//             image: Sports[4].iconUrl,
//             capacity: 4,
//             pricePerHour: 15,
//             isAvailable: true,
//             sport: Sports[4],
//             user: users[0],
//             location: "Calle Deportiva, 4"
//         },
//         {
//             id: "7",
//             name: "Pabellón Balonmano",
//             description: "Cancha reglamentaria de balonmano.",
//             image: Sports[2].iconUrl,
//             capacity: 14,
//             pricePerHour: 45,
//             isAvailable: false,
//             sport: Sports[2],
//             user: users[1],
//             location: "Centro Deportivo Norte"
//         },
//         {
//             id: "8",
//             name: "Pista Fútbol Sala",
//             description: "Pista de cemento pulido.",
//             image: Sports[0].iconUrl,
//             capacity: 10,
//             pricePerHour: 35,
//             isAvailable: true,
//             sport: Sports[0],
//             user: users[2],
//             location: "Calle Alegre, 8"
//         },
//         {
//             id: "9",
//             name: "Campo Hockey",
//             description: "Campo de hierba artificial para hockey.",
//             image: Sports[7].iconUrl,
//             capacity: 22,
//             pricePerHour: 55,
//             isAvailable: true,
//             sport: Sports[7],
//             user: users[3],
//             location: "Ciudad Deportiva"
//         },
//         {
//             id: "10",
//             name: "Campo Rugby",
//             description: "Campo amplio con porterías de rugby.",
//             image: Sports[8].iconUrl,
//             capacity: 30,
//             pricePerHour: 60,
//             isAvailable: true,
//             sport: Sports[8],
//             user: users[4],
//             location: "Polígono Sport"
//         },
//         {
//             id: "11",
//             name: "Pista Tenis 2",
//             description: "Pista rápida de resina.",
//             image: Sports[5].iconUrl,
//             capacity: 4,
//             pricePerHour: 22,
//             isAvailable: true,
//             sport: Sports[5],
//             user: users[0],
//             location: "Polideportivo Municipal"
//         },
//         {
//             id: "12",
//             name: "Pista Pádel 2",
//             description: "Segunda pista de cristal disponible.",
//             image: Sports[6].iconUrl,
//             capacity: 4,
//             pricePerHour: 25,
//             isAvailable: true,
//             sport: Sports[6],
//             user: users[1],
//             location: "Club de Pádel El Viso"
//         }
//     ]