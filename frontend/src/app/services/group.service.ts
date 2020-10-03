import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  

  getGroups():Group[]{
    return [
      new Group(new Game("Among"))
    ]
  }



  constructor() { }
}
