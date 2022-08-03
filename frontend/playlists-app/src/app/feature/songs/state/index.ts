import { ActionReducerMap } from "@ngrx/store";

export const SONGS_FEATURE_NAME = 'songsFeature';

import * as fromSongList from './reducers/song-list.reducer';

export interface SongsFeatureState {
  songList: fromSongList.SongListState
}


export const reducers: ActionReducerMap<SongsFeatureState> = {
  songList: fromSongList.reducer
}
