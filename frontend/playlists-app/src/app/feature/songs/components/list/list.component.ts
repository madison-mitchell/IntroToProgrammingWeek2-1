import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { SongsListModel } from '../../models';
import { selectRealSongList, selectSongListModel } from '../../state';
import { SongCommands } from '../../state/actions/songs.actions';
import { SongEntity } from '../../state/reducers/song-list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model$!: Observable<SongsListModel>;

  constructor(private store: Store) {
    store.dispatch(SongCommands.load())
  }

  ngOnInit(): void {
    this.model$ = this.store.select(selectSongListModel);
  }

}
