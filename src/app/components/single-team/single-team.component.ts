import { Team } from './../../class/team';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css'],
})
export class SingleTeamComponent implements OnInit {
  @Input() team: Team;

  constructor() {}

  ngOnInit(): void {}
}
