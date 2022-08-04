

import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';
// Create an interface that describes the state for TypeScript
export interface AppState {
  counter: fromCounter.CounterState,
  router: RouterReducerState
}


export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  router: routerReducer
};

// selector functions

// export const selectCounterBranch = (state:AppState) => state.counter;
export const selectCounterBranch = createFeatureSelector<fromCounter.CounterState>("counter");


export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  (b: fromCounter.CounterState) => b.current
)

export const selectCounterBy = createSelector(
  selectCounterBranch,
  b => b.by
)
