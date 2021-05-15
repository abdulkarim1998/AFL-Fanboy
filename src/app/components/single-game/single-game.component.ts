import { DataService } from './../../services/data.service';
import { Game } from './../../class/game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css'],
})
export class SingleGameComponent implements OnInit {
  @Input() game: Game;

  ateamLogo: string;
  hteamLogo: string;
  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getTeams().subscribe((teams) => {
      const ateamID = this.game.ateamid;
      const hteamID = this.game.hteamid;

      this.ateamLogo = teams.filter((team) => team.id === ateamID)[0].logo;
      this.hteamLogo = teams.filter((team) => team.id === hteamID)[0].logo;
      //console.log(ateamID, hteamID);
    });
  }
}
