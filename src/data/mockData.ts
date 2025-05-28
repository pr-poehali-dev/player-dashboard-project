import { Player, Post, Country } from "@/types";

export const countries: Country[] = [
  { code: "RU", name: "Россия", flag: "🇷🇺" },
  { code: "US", name: "США", flag: "🇺🇸" },
  { code: "DE", name: "Германия", flag: "🇩🇪" },
  { code: "FR", name: "Франция", flag: "🇫🇷" },
  { code: "GB", name: "Великобритания", flag: "🇬🇧" },
  { code: "JP", name: "Япония", flag: "🇯🇵" },
  { code: "BR", name: "Бразилия", flag: "🇧🇷" },
  { code: "CN", name: "Китай", flag: "🇨🇳" },
];

export const mockPlayers: Player[] = [
  {
    id: "1",
    username: "ShadowHunter",
    country: "Россия",
    countryFlag: "🇷🇺",
    level: 45,
    joinedAt: "2023-10-15",
  },
  {
    id: "2",
    username: "StormBreaker",
    country: "США",
    countryFlag: "🇺🇸",
    level: 38,
    joinedAt: "2023-11-02",
  },
  {
    id: "3",
    username: "NightRider",
    country: "Германия",
    countryFlag: "🇩🇪",
    level: 52,
    joinedAt: "2023-09-20",
  },
  {
    id: "4",
    username: "DragonSlayer",
    country: "Франция",
    countryFlag: "🇫🇷",
    level: 41,
    joinedAt: "2023-11-10",
  },
];

export const mockPosts: Post[] = [
  {
    id: "1",
    content:
      "Сегодня впервые прошёл сложнейший данж! Команда была просто огонь 🔥 Спасибо всем за поддержку!",
    author: mockPlayers[0],
    createdAt: "2023-11-15T14:30:00Z",
    likes: 24,
    comments: 8,
  },
  {
    id: "2",
    content:
      "Just reached level 38! This game keeps getting better and better. Anyone want to team up for some raids tonight?",
    author: mockPlayers[1],
    createdAt: "2023-11-15T13:15:00Z",
    likes: 31,
    comments: 12,
  },
  {
    id: "3",
    content:
      "Endlich habe ich das legendäre Schwert gefunden! Nach 200 Stunden Spielzeit war es das wert ⚔️",
    author: mockPlayers[2],
    createdAt: "2023-11-15T12:45:00Z",
    likes: 18,
    comments: 5,
  },
  {
    id: "4",
    content:
      "Nouvelle mise à jour incroyable! Les graphismes sont magnifiques et le gameplay est encore plus fluide 🎮",
    author: mockPlayers[3],
    createdAt: "2023-11-15T11:20:00Z",
    likes: 27,
    comments: 9,
  },
  {
    id: "5",
    content:
      "Организую турнир для российских игроков! Призовой фонд 50к золота. Кто готов сразиться?",
    author: mockPlayers[0],
    createdAt: "2023-11-15T10:00:00Z",
    likes: 42,
    comments: 16,
  },
];
