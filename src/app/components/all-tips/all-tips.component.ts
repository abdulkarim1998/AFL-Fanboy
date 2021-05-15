import { Team } from './../../class/team';
import { Tip } from './../../class/tip';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tips',
  templateUrl: './all-tips.component.html',
  styleUrls: ['./all-tips.component.css'],
})
export class AllTipsComponent implements OnInit {
  tips!: Tip[];
  teams!: Team[];
  selectedTeamID: string = '';

  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getTips().subscribe((tips) => {
      this.tips = tips;
    });

    this.dataFetch.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  selectChangeHandler(team: any) {
    this.selectedTeamID = team.name;
    this.dataFetch.getTips().subscribe((tips) => {
      this.tips = tips.filter(
        (tip) => tip.hteamid === team.id || tip.ateamid === team.id
      );

      // console.log(tips.filter((tip) => tip.hteamid === team.id));
    });
  }

  clearSelection() {
    this.selectedTeamID = '';
    this.dataFetch.getTips().subscribe((tips) => {
      this.tips = tips;
    });
  }
}
