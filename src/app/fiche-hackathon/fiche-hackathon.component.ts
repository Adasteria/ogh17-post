import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirstService } from '../first.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-fiche-hackathon',
  templateUrl: './fiche-hackathon.component.html',
  styleUrls: ['./fiche-hackathon.component.css']
})
export class FicheHackathonComponent implements OnInit {

  private datas: any;

  constructor(
    private route: ActivatedRoute,
    private firstService: FirstService,
    private router: Router
    ){}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id)
    this.request(parseInt(id));
}

request(id) {
    let number = id;
    console.log(number)
    this.firstService.getHackathons()
    .subscribe(
      data => this.datas = data,
      error => alert(error),
      () => console.log(this.datas[number]));
}

}
