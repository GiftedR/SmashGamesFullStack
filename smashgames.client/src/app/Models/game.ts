import { GameFeature } from "./game-feature";

export interface featureObject {
  $values: GameFeature[]
}

export interface Game {
  gameID:number,
  title: string,
  description: string,
  shortDescription: string,
  imageUrl: string,
  releaseDate: Date,
  createdDate: Date,
  updatedDate: Date,
  features: featureObject
}
