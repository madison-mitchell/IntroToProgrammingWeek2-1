import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounterBy } from 'src/app/state';
import { counterEvents } from 'src/app/state/actions/counter.actions';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css']
})
export class CountByComponent implements OnInit {

  by$!: Observable<number>;
  constructor(private store:Store) { }
  ngOnInit(): void {
    this.by$ = this.store.select(selectCounterBy);
  }


  setCountBy(by:number) {
    this.store.dispatch(counterEvents.countbyset({by}));
  }

}
