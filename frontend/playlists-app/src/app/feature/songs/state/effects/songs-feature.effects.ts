// map events to commands

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { appEvents } from "src/app/state/actions/app.actions";
import { SongCommands } from "../actions/songs.actions";


@Injectable()
export class SongFeatureEffects {

  // when the application starts, time to load the songs.
  loadSongsOnApplicationStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appEvents.started),
      map(() => SongCommands.load())
    )
  })
  constructor(private actions$: Actions) { }
}
