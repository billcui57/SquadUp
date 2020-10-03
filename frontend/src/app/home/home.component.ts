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
    this.games = this.gameService.getGames();

  }

}
