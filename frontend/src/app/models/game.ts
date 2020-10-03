export class Game {
  constructor(name:string,description:string,displayImage?: HTMLImageElement) {
    this.name=name;
    this.description=description;
    this.displayImage=displayImage;
  }

  name:string;
  description:string;
  displayImage?: HTMLImageElement;

}
