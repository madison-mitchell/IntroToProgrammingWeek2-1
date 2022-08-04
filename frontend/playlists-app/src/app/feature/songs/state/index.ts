import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

export const SONGS_FEATURE_NAME = 'songsFeature';

import * as fromSongList from './reducers/song-list.reducer';
import * as fromErrors from './reducers/errors.reducer';
import { SongsListModel } from "../models";
export interface SongsFeatureState {
  songList: fromSongList.SongListState,
  errors: fromErrors.ErrorsState
}


export const reducers: ActionReducerMap<SongsFeatureState> = {
  songList: fromSongList.reducer,
  errors: fromErrors.reducer
}


// 1. Create a Feature Selector

const selectSongsFeature = createFeatureSelector<SongsFeatureState>(SONGS_FEATURE_NAME);

// 2. Create one for each "branch" of that feature.
const selectSongListBranch = createSelector(selectSongsFeature, f => f.songList);
const selectErrorsBranch = createSelector(selectSongsFeature, f => f.errors);
// 3. Helpers (optional)

const { selectAll: selectAllSongEntityArray } = fromSongList.adapter.getSelectors(selectSongListBranch);
// 4. The selectors the components need.
// SongEntity[]

export const selectSongList = createSelector(
  selectAllSongEntityArray,
  songs => songs
)


export const selectSongsLoaded = createSelector(
  selectSongListBranch,
  b => b.loaded
)

export const selectSongListModel = createSelector(
  selectSongList,
  selectSongsLoaded,
  (songs, loaded) => {
    return {
      loaded,
      numberOfSongs: songs.length,
      numberWithAlbums: songs.filter(s => s.album).length,
      numberWithoutAlbums: songs.filter(s => !s.album).length,
      songs: songs
    } as SongsListModel
  }
)


export const selectErrorsModel = createSelector(
  selectErrorsBranch,
  b => b
)
