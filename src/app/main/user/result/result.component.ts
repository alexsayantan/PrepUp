import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  marksGot: number = 0;
  correctAnswers: number = 0;
  attempted: number = 0;

  constructor(private _location: LocationStrategy,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.marksGot = this._route.snapshot.params['marksGot'];
    this.correctAnswers = this._route.snapshot.params['correctAnswers'];
    this.attempted = this._route.snapshot.params['attempted'];

  }

  private preventBackButton() {
    history.pushState(null, null, location.href);
    this._location.onPopState(
      () => { history.pushState(null, null, location.href); },
    );
  }
}
