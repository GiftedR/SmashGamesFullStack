import { GameFeature } from "./game-feature";

export interface featureObject {
  $values: GameFeature[]
}

export interface Game {
  title: string,
  description: string,
  shortdescription: string,
  imageurl: string,
  releasedate: Date,
  createddate: Date,
  updateddate: Date,
  features: featureObject
}
