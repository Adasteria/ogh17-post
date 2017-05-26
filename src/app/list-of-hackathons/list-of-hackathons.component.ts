import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-list-of-hackathons',
  templateUrl: './list-of-hackathons.component.html',
  styleUrls: ['./list-of-hackathons.component.css'],
})
export class ListOfHackathonsComponent implements OnInit {

  datas: any;

  constructor(private firstService: FirstService) {}

  ngOnInit () {
    this.firstService.getMonument()
    .subscribe(
      data => this.datas = data,
      error => alert(error),
      () => console.log(this.datas)
    );
  }
}
