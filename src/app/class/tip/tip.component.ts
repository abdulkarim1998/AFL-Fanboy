import { DataService } from './../../services/data.service';
import { Tip } from './../tip';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css'],
})
export class TipComponent implements OnInit {
  @Input() tip: Tip;

  ateamLogo: string;
  hteamLogo: string;

  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getTeams().subscribe((teams) => {
      const ateamID = this.tip.ateamid;
      const hteamID = this.tip.hteamid;

      this.ateamLogo = teams.filter((team) => team.id === ateamID)[0].logo;
      this.hteamLogo = teams.filter((team) => team.id === hteamID)[0].logo;
      //console.log(ateamID, hteamID);
    });
  }
}
