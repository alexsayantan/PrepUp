import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  marksGot: number = 0;
  correctAnswers: number = 0;
  attempted: number = 0;

  constructor(private _location: LocationStrategy) { }

  ngOnInit(): void {
    this.preventBackButton();
  }

  private preventBackButton() {
    history.pushState(null, null, location.href);
    this._location.onPopState(
      () => { history.pushState(null, null, location.href); },
    );
  }
}
