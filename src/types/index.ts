export interface Player {
  id: string;
  username: string;
  country: string;
  countryFlag: string;
  avatar?: string;
  level: number;
  joinedAt: string;
}

export interface Post {
  id: string;
  content: string;
  author: Player;
  createdAt: string;
  likes: number;
  comments: number;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}
