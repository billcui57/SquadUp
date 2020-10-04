import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game';
import { Group } from '../models/group';
import { GameService } from '../services/game.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private groupService:GroupService, private gameService:GameService) { }

  game:Game;
  groups:Group[];
  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params["gameId"];
      this.gameService.getGameById(id).subscribe(
        (data)=>{
          this.game = new Game(id, data["name"], data["background_image"]);
        }
    )
    this.groups = this.groupService.getGroups(id);
    
  }

}
