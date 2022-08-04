// map events to commands

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs";
import { appEvents } from "src/app/state/actions/app.actions";
import { SongRequestCommands, SongRequestDocuments } from "../actions/song-requests.actions";
import { SongCommands, SongEvents, SongsDocuments } from "../actions/songs.actions";


@Injectable()
export class SongFeatureEffects {

  createASongRequestForNewSong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongEvents.newsongcreated),
      map(({ payload }) => SongRequestCommands.create({ payload }))
    )
  })

  sendTheRequestForNewSong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongRequestDocuments.song),
      map((a) => SongCommands.add({ payload: a.payload, tempId: a.payload.id }))
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
      ofType(SongEvents.newsongcreated),
      tap(() => this.router.navigate(["/", "songs", "list"]))
    )
  }, { dispatch: false })


  constructor(private actions$: Actions, private router: Router) { }
}
