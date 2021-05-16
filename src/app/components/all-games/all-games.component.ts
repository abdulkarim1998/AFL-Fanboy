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
  selectedTeamID: string = '';
  selectedYear: number = 2021;

  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getGames().subscribe((games) => {
      this.games = games.filter((game) => game.year === 2021);
    });

    this.dataFetch.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  selectChangeHandler(team: any) {
    this.selectedTeamID = team.name;
    this.dataFetch.getGames().subscribe((games) => {
      this.games = games.filter(
        (game) =>
          (game.hteamid === team.id || game.ateamid === team.id) &&
          game.year === this.selectedYear
      );
    });
  }

  changeYearHandler(year: any) {
    this.selectedYear = year;

    if (this.selectedTeamID) {
      this.dataFetch.getGames().subscribe((games) => {
        this.games = games.filter(
          (game) =>
            (game.hteam === this.selectedTeamID ||
              game.ateam === this.selectedTeamID) &&
            game.year === this.selectedYear
        );
      });
    } else {
      this.dataFetch.getGames().subscribe((games) => {
        this.games = games.filter((game) => game.year === this.selectedYear);
      });
    }
  }

  clearSelection() {
    this.selectedTeamID = '';
    if (this.selectedYear) {
      this.dataFetch.getGames().subscribe((games) => {
        this.games = games.filter((game) => game.year === this.selectedYear);
      });
    } else {
      this.dataFetch.getGames().subscribe((games) => {
        this.games = games;
      });
    }
  }

  clearYearSelection() {
    this.selectedYear = 0;
    if (this.selectedTeamID) {
      this.dataFetch.getGames().subscribe((games) => {
        this.games = games.filter(
          (game) =>
            game.hteam === this.selectedTeamID ||
            game.ateam === this.selectedTeamID
        );
      });
    } else {
      this.dataFetch.getGames().subscribe((games) => {
        this.games = games;
      });
    }
  }
}
