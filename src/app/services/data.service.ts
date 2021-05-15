import { Game } from './../class/game';
import { Tip } from './../class/tip';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './../class/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) =>
        data.teams.map((item: any) => {
          return new Team(item.id, item.name, item.logo, item.abbrev);
        })
      )
    );
  }

  getGames(): Observable<Game[]> {
    return this.http
      .get('https://api.squiggle.com.au/?q=games;year=2021')
      .pipe(
        map((data: any) =>
          data.games.map(
            (item: any) =>
              new Game(
                item.is_grand_final,
                item.hbehinds,
                item.abehinds,
                item.hteam,
                item.round,
                item.hgoals,
                item.winnerteamid,
                item.ateamid,
                item.is_final,
                item.venue,
                item.date,
                item.year,
                item.complete,
                item.ascore,
                item.tz,
                item.updated,
                item.agoals,
                item.id,
                item.ateam,
                item.winner,
                item.hscore,
                item.hteamid,
                item.roundname,
                item.localtime
              )
          )
        )
      );
  }

  getTips(): Observable<Tip[]> {
    return this.http
      .get('https://api.squiggle.com.au/?q=tips;year=2021;round=20')
      .pipe(
        map((data: any) =>
          data.tips.map(
            (item: any) =>
              new Tip(
                item.tip,
                item.round,
                item.ateamid,
                item.venue,
                item.correct,
                item.date,
                item.margin,
                item.err,
                item.hteam,
                item.tipteamid,
                item.source,
                item.confidence,
                item.ateam,
                item.bits,
                item.hteamid,
                item.sourceid,
                item.year,
                item.updated,
                item.confidence,
                item.gameid,
                item.hmargin
              )
          )
        )
      );
  }
}
