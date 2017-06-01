import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirstService } from '../first.service';
import 'rxjs/add/operator/switchMap';

declare var google: any;

@Component({
  selector: 'app-fiche-hackathon',
  templateUrl: './fiche-hackathon.component.html',
  styleUrls: ['./fiche-hackathon.component.css']
})
export class FicheHackathonComponent implements OnInit {

  private datas: any;
  private id: number;


  constructor(
    private route: ActivatedRoute,
    private firstService: FirstService,
    private router: Router
    ){}

  ngOnInit() {
    let routeInfo = this.route.snapshot.params['id'];
    this.id = routeInfo;
    this.request(routeInfo);
}

request(item) {
    console.log(item)
    this.firstService.getHackathons()
    .subscribe(
      data => this.datas = data,
      error => alert(error),
      () => console.log(this.datas));
  }


}
