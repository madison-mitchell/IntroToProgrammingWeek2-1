import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs";
import { SongCommands, SongsDocuments } from "../actions/songs.actions";
import { SongEntity } from "../reducers/song-list.reducer";
@Injectable()
export class SongsDataEffects {

  // when I get the command to load the songs, I will go to the api, get the songs, and return a songs document.

  saveTheSong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongCommands.add), // stop | SongsCommand.add
      mergeMap(({ payload }) => this.client.post<SongEntity>('api/songs', payload)
        .pipe(
          map((payload) => SongsDocuments.song({ payload }))
        )
      )
    )
  });
  loadTheSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongCommands.load),
      switchMap(() => this.client.get<{ data: SongEntity[] }>('api/songs')
        .pipe(
          map(response => response.data),
          map(payload => SongsDocuments.songs({ payload }))
        )
      )
    )
  });


  constructor(private actions$: Actions, private client: HttpClient) { }
}
