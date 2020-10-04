export class Game {
  constructor(gameId: string, name:string, imagesrc:string) {
    this.gameId = gameId;
    this.name=name;
    this.imagesrc=imagesrc;
  }

  gameId:string;
  name:string;
  imagesrc:string;
}


