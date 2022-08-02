import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterEvents } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css']
})
export class CountByComponent {

  constructor(private store:Store) { }


  setCountBy(by:number) {
    this.store.dispatch(counterEvents.countbyset({by}));
  }

}
