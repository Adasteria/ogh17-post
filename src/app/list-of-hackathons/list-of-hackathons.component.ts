import { Component, OnInit, HostBinding } from '@angular/core';
import { FirstService } from '../first.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-list-of-hackathons',
  templateUrl: './list-of-hackathons.component.html',
  styleUrls: ['./list-of-hackathons.component.css'],
})
export class ListOfHackathonsComponent implements OnInit {

  private datas: any;
  private route: ActivatedRoute;


  constructor(private firstService: FirstService, private router: Router) {}

  ngOnInit () {
    this.firstService.getHackathons()
    .subscribe(
      data => this.datas = data,
      error => alert(error),
      () => console.log(this.datas));
  }

  onSelect(hackathon) {
    this.router.navigate(['hackathons', hackathon.id]);
  }


}
