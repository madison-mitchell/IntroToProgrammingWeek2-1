import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

export const SONGS_FEATURE_NAME = 'songsFeature';

import * as fromSongList from './reducers/song-list.reducer';

export interface SongsFeatureState {
  songList: fromSongList.SongListState
}


export const reducers: ActionReducerMap<SongsFeatureState> = {
  songList: fromSongList.reducer
}


// 1. Create a Feature Selector

const selectSongsFeature = createFeatureSelector<SongsFeatureState>(SONGS_FEATURE_NAME);

// 2. Create one for each "branch" of that feature.
const selectSongListBranch = createSelector(selectSongsFeature, f => f.songList);
// 3. Helpers (optional)
const { selectAll: selectAllSongEntityArray } = fromSongList.adapter.getSelectors(selectSongListBranch);
// 4. The selectors the components need.
// SongEntity[]

export const selectSongList = createSelector(
  selectAllSongEntityArray,
  songs => songs
)
