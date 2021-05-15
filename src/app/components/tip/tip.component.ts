import { Tips } from './../../class/tips';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css'],
})
export class TipComponent implements OnInit {
  @Input() tip: Tips;
  constructor() {}

  ngOnInit(): void {}
}
