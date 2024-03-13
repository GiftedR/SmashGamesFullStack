import { Game } from "./game";

export interface GameObject {
  $values: Game[]
}

export interface Studio {
  name: string,
  description: string,
  games: GameObject
}
