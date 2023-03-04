export interface Player {
  id: string;
  name: string;
  stoneColor: string;
  gender: Gender;
}

export type Gender = 'male' | 'female';

export interface StoredWinner {
  name: string;
  times: number;
}
