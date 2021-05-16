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
  pureGames!: Game[];
  teams!: Team[];
  selectedTeamID: string = '';
  selectedYear: number = 2021;

  x: number;
  counter: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getGames().subscribe((games) => {
      this.pureGames = games;
      this.games = this.pureGames.filter((game) => game.year === 2021);
    });

    this.dataFetch.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  selectChangeHandler(team: any) {
    this.selectedTeamID = team.name;

    // this.dataFetch.getGames().subscribe((games) => {
    // this.games = games.filter(
    //   (game) =>
    //     (game.hteamid === team.id || game.ateamid === team.id) &&
    //     game.year === this.selectedYear
    //   );
    // });

    this.games = this.pureGames.filter(
      (game) =>
        (game.hteamid === team.id || game.ateamid === team.id) &&
        game.year === this.selectedYear
    );
    this.x = this.games.length;
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
    this.x = this.games.length;
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
    this.x = this.games.length;
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
    this.x = this.games.length;
  }

  wonOnly() {
    this.games = this.pureGames.filter(
      (game) =>
        (game.hteam === this.selectedTeamID ||
          game.ateam === this.selectedTeamID) &&
        game.year === this.selectedYear &&
        game.winner === this.selectedTeamID
    );
    this.x = this.games.length;
  }

  numberOfRounds(index: number) {
    this.x = index;
  }

  showAllRounds() {
    this.x = this.games.length;
  }
}
