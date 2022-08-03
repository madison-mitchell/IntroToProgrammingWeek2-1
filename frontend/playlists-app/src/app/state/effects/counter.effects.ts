import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, map, tap } from "rxjs";
import { counterDocuments, counterEvents } from "../actions/counter.actions";
import { appEvents } from "../actions/app.actions";
import { selectCounterBranch } from '../'
import { CounterState } from "../reducers/counter.reducer";
@Injectable()
export class CounterEffects {

  // logThemAll$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   )
  // }, { dispatch: false})

  readCounterData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appEvents.started), // pretty obvious.
      map(() => localStorage.getItem("counter-data")), // go look in localstate and return that value. ("data" | null)
      filter((data) => data != null), // stop here if it is null. "Dispatch Maybe"
      map((data) => JSON.parse(data!)),
      map((payload: CounterState) => counterDocuments.counter({ payload })
      )
    )
  }
  );


  writeCounterData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(counterEvents.countbyset, counterEvents.decrement, counterEvents.increment, counterEvents.reset),
      concatLatestFrom(() => this.store.select(selectCounterBranch)),
      tap(([_, state]) => {
        const jsonState = JSON.stringify(state);
        localStorage.setItem("counter-data", jsonState)
      }),

    )
  }, { dispatch: false })


  constructor(private actions$: Actions, private store: Store) { }
}
