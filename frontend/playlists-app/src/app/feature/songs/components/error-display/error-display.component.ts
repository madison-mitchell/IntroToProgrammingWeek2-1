import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectErrorsModel } from '../../state';
import { ErrorCommands } from '../../state/actions/error.actions';
import { ErrorsState } from '../../state/reducers/errors.reducer';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {

  model$!: Observable<ErrorsState>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectErrorsModel);
  }

  clear() {
    this.store.dispatch(ErrorCommands.clear());
  }
}
