import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterEvents } from 'src/app/state/actions/counter.actions';
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
    this.store.dispatch(counterEvents.increment());
  }

  decrement() {
    this.store.dispatch(counterEvents.decrement());
  }

  reset() {
    this.store.dispatch(counterEvents.reset());
  }

}
