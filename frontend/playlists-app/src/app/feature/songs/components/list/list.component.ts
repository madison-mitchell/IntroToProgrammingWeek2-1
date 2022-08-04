import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { SongsListModel } from '../../models';
import { selectSongList, selectSongListModel } from '../../state';
import { SongEntity } from '../../state/reducers/song-list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  model$!: Observable<SongsListModel>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectSongListModel);
  }

}
