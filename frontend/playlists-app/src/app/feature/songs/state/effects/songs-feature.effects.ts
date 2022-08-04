// map events to commands

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { appEvents } from "src/app/state/actions/app.actions";
import { SongCommands, SongEvents, SongsDocuments } from "../actions/songs.actions";


@Injectable()
export class SongFeatureEffects {

  saveTheSongWhenCreated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongEvents.newsongcreated),
      map(({ payload }) => SongCommands.add({ payload }))
    )
  })
  // when the application starts, time to load the songs.
  loadSongsOnApplicationStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appEvents.started),
      map(() => SongCommands.load())
    )
  })

  goToListAfterAddingSong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongsDocuments.song),
      tap(() => this.router.navigate(["/", "songs", "list"]))
    )
  }, { dispatch: false })


  constructor(private actions$: Actions, private router: Router) { }
}
