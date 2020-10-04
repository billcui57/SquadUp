import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private http : HttpClient) { }

  getAllGames():Observable<void>{
    return this.http.get<void>(`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=5`);
  }
}
