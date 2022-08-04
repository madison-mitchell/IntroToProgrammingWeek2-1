import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

export const SONGS_FEATURE_NAME = 'songsFeature';

import * as fromSongList from './reducers/song-list.reducer';
import * as fromErrors from './reducers/errors.reducer';
import * as fromSongRequests from './reducers/song-requests.reducer';
import { SongListItemModel, SongsListModel } from "../models";
export interface SongsFeatureState {
  songList: fromSongList.SongListState,
  errors: fromErrors.ErrorsState
  songRequests: fromSongRequests.SongsRequestsState
}


export const reducers: ActionReducerMap<SongsFeatureState> = {
  songList: fromSongList.reducer,
  errors: fromErrors.reducer,
  songRequests: fromSongRequests.reducer
}


// 1. Create a Feature Selector

const selectSongsFeature = createFeatureSelector<SongsFeatureState>(SONGS_FEATURE_NAME);

// 2. Create one for each "branch" of that feature.
const selectSongListBranch = createSelector(selectSongsFeature, f => f.songList);
const selectErrorsBranch = createSelector(selectSongsFeature, f => f.errors);
const selectSongRequestsBranch = createSelector(selectSongsFeature, f => f.songRequests)

// 3. Helpers (optional)

const { selectAll: selectAllSongEntityArray } = fromSongList.adapter.getSelectors(selectSongListBranch);

const { selectAll: selectAllSongRequestEntityArray } = fromSongList.adapter.getSelectors(selectSongRequestsBranch);
// 4. The selectors the components need.
// SongEntity[]

export const selectRealSongList = createSelector(
  selectAllSongEntityArray,
  songs => songs.map(s => ({ ...s, isTemporary: false } as SongListItemModel))
)

export const selectSongRequestList = createSelector(
  selectAllSongRequestEntityArray,
  songs => songs.map(s => ({ ...s, isTemporary: true } as SongListItemModel))
)


export const selectSongsLoaded = createSelector(
  selectSongListBranch,
  b => b.loaded
)

export const selectSongListModel = createSelector(
  selectRealSongList,
  selectSongRequestList,
  selectSongsLoaded,
  (songs, pendingSongs, loaded) => {
    const finalSongs = [...pendingSongs, ...songs];
    return {
      loaded,
      numberOfSongs: finalSongs.length,
      numberWithAlbums: finalSongs.filter(s => s.album).length,
      numberWithoutAlbums: finalSongs.filter(s => !s.album).length,
      songs: finalSongs
    } as SongsListModel
  }
)


export const selectErrorsModel = createSelector(
  selectErrorsBranch,
  b => b
)
