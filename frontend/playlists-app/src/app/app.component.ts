import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appEvents } from './state/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(store:Store) {
    store.dispatch(appEvents.started())
  }
}
