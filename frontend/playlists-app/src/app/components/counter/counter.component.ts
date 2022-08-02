import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterCurrent } from '../../state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit  {

  current$! : Observable<number>;

  // TODO: WHAT THE HECK.
  constructor(private store:Store<AppState>) {  }

  ngOnInit(): void {

    this.current$ = this.store.select(selectCounterCurrent);
  }


  increment() {

  }

  decrement() {

  }

}
