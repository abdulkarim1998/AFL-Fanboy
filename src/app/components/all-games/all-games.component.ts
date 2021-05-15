import { Game } from './../../class/game';
import { Team } from './../../class/team';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css'],
})
export class AllGamesComponent implements OnInit {
  games!: Game[];
  teams!: Team[];
  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getGames().subscribe((games) => {
      this.games = games;
    });

    this.dataFetch.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
