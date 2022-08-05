import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap, of } from "rxjs";
import { SongCommands, SongEvents, SongsDocuments } from "../actions/songs.actions";
import { SongEntity } from "../reducers/song-list.reducer";
import { environment } from "src/environments/environment";
@Injectable()
export class SongsDataEffects {

  readonly baseUrl = environment.apiUrl;
  // when I get the command to load the songs, I will go to the api, get the songs, and return a songs document.

  saveTheSong$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongCommands.add), // stop | SongsCommand.add
      mergeMap(({ payload, tempId }) => this.client.post<SongEntity>(this.baseUrl + '/api/songs', payload)
        .pipe(
          map((payload) => SongsDocuments.song({ payload, tempId })),
          catchError((r) => {
            console.log('Got this error from the server', r);
            return of(SongEvents.songerror({ payload, message: 'That did not work', tempId }))
          })
        )
      )
    )
  });
  loadTheSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SongCommands.load),
      switchMap(() => this.client.get<{ data: SongEntity[] }>(this.baseUrl + '/api/songs')
        .pipe(
          map(response => response.data),
          map(payload => SongsDocuments.songs({ payload }))
        )
      )
    )
  });


  constructor(private actions$: Actions, private client: HttpClient) { }
}
