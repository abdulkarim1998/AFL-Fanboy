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

  constructor(private dataFetch: DataService) {}

  ngOnInit(): void {
    this.dataFetch.getTips().subscribe((tips) => {
      console.log(tips);
      this.tips = tips;
    });
  }
}
