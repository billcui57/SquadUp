import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Group } from '../models/group';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  

  getGroups(id: string):Group[]{
    return [
      new Group(50734, [new User("bill", "cui"), new User("Roxy", "Stanciu")],12312),
      new Group(50734, [new User("awd", "awd"), new User("Roxawdawdy", "Staawdawdnciu")],1231223),
      new Group(50734, [new User("awdwa", "cudwadwi"), new User("Roxyawdawd", "Sawdawdtanciu")],123212),
      new Group(50734, [new User("bilawdawal", "cuawdawdi"), new User("Roawdawdxy", "Sadawdtanciu")],12),
      new Group(50734, [new User("biadwall", "cuawdawdi"), new User("Roxawdawdy", "awawdawd")],53),
      new Group(50734, [new User("biwadawdwll", "cawdawdui"), new User("Roxawdawdy", "Sawdawtanciu")],35),
      new Group(50734, [new User("biwdwdll", "cuwadawdi"), new User("Roxawdawdy", "Stawdawdanciu")],22),
      new Group(50734, [new User("bidwll", "cuawdwadi"), new User("Roxyawdaw", "awdawdStanciu")],1522),
      new Group(50734, [new User("biadwawdll", "cwadwaadwui"), new User("Roawdawdxy", "Stancawdawdiu")],25),
      new Group(50734, [new User("biwadawdll", "cawdawui"), new User("Roxyawdawd", "Stanawdawdciu")],25),
      new Group(50734, [new User("biawaaall", "cuawdawdi"), new User("Roawdawdawdwadxy", "Sawdawdawtanciu")],252)
    ]
  }



  constructor() { }
}
