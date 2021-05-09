import { Component, OnInit } from '@angular/core';
import { Team } from '../../class/team';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css'],
})
export class AllTeamsComponent implements OnInit {
  teams!: Team[];

  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    // this.teams = [
    //   {
    //     id: 1,
    //     name: 'ghoul',
    //     logo:
    //       'https://logos-download.com/wp-content/uploads/2017/05/Western_Bulldogs_logo_logotype-597x700-420x492.png',
    //     abbrev: 'fwef',
    //   },
    //   {
    //     id: 2,
    //     name: 'gheul',
    //     logo:
    //       'https://logos-download.com/wp-content/uploads/2017/05/Western_Bulldogs_logo_logotype-597x700-420x492.png',
    //     abbrev: 'fweqwef',
    //   },
    //   {
    //     id: 2,
    //     name: 'gheul',
    //     logo:
    //       'https://logos-download.com/wp-content/uploads/2017/05/Western_Bulldogs_logo_logotype-597x700-420x492.png',
    //     abbrev: 'fweqwef',
    //   },
    // ];

    this.dataFetch.getTips().subscribe((tips) => {
      console.log(tips);
    });

    this.dataFetch.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
