import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap, of } from "rxjs";
import { SongCommands, SongEvents, SongsDocuments } from "../actions/songs.actions";
import { SongEntity } from "../reducers/song-list.reducer";
@Injectable()
export class SongsDataEffects {


  // when I get the command to load the songs, I will go to the api, get the songs, and return a songs document.

  saveTheSong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongCommands.add), // stop | SongsCommand.add
      mergeMap(({ payload }) => this.client.post<SongEntity>('api/songs', payload)
        .pipe(
          map((payload) => SongsDocuments.song({ payload })),
          catchError((r) => {
            console.log('Got this error from the server', r);
            return of(SongEvents.songerror({ payload, message: 'That did not work' }))
          })
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
