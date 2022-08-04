import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { SongsDocuments } from '../actions/songs.actions';
export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;

}

export interface SongListState extends EntityState<SongEntity> {
  loaded: boolean
}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState({
  loaded: false
});

export const reducer = createReducer(
  initialState,
  on(SongsDocuments.song, (s, { payload }): SongListState => adapter.addOne(payload, s)),
  on(SongsDocuments.songs, (s, { payload }): SongListState => adapter.setAll(payload, { ...s, loaded: true }))
);

