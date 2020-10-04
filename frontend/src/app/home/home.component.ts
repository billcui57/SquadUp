import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gameService:GameService) { }
  games:Game[] = [];

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe((data)=> {
      let listOfGames: any[] = data["results"];

      listOfGames.forEach(
        (game) => {
          let newGame = new Game (game["id"], game["name"], game["background_image"])
          this.games.push(newGame)
          
        }
      )
    },
    err => {

    })

    
  }

}
