export interface Sport {
    id: string,
    name: string,
    iconUrl: string,
    minPlayers: number,
    maxPlayers: number
}

export const Sports: Sport[] = [
    {
        id: "1",
        name: "Fútbol Sala",
        iconUrl: "https://img.icons8.com/color/96/football2.png",
        minPlayers: 10,
        maxPlayers: 14
    },
    {
        id: "2",
        name: "Baloncesto",
        iconUrl: "https://img.icons8.com/color/96/basketball.png",
        minPlayers: 10,
        maxPlayers: 12
    },
    {
        id: "3",
        name: "Balonmano",
        iconUrl: "https://img.icons8.com/color/96/handball.png",
        minPlayers: 14,
        maxPlayers: 16
    },
    {
        id: "4",
        name: "Voleibol",
        iconUrl: "https://img.icons8.com/color/96/volleyball.png",
        minPlayers: 12,
        maxPlayers: 14
    },
    {
        id: "5",
        name: "Bádminton",
        iconUrl: "https://img.icons8.com/color/96/badminton.png",
        minPlayers: 2,
        maxPlayers: 4
    },
    {
        id: "6",
        name: "Tenis",
        iconUrl: "https://img.icons8.com/color/96/tennis.png",
        minPlayers: 2,
        maxPlayers: 4
    }
];