import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as cuid from 'cuid';
import { map } from "rxjs";
import { SongRequestCommands, SongRequestDocuments } from "../actions/song-requests.actions";
import { SongEntity } from "../reducers/song-list.reducer";

@Injectable()
export class SongRequestsEffects {

  createTemporaryRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongRequestCommands.create),
      map(({ payload }) => ({ ...payload, id: cuid() } as SongEntity)),
      map((payload) => SongRequestDocuments.song({ payload }))
    )
  })

  constructor(private actions$: Actions) { }
}
