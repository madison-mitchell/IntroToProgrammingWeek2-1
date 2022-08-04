import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { selectSongList } from '../../state';
import { SongEntity } from '../../state/reducers/song-list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  songs$!: Observable<SongEntity[]>;
  numberOfSongs = 0;
  constructor(private store: Store) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSongList);

    // if you are doing this, you are probably doing it wrong.
    const sub = this.songs$
      .pipe(
        tap(songs => this.numberOfSongs = songs.length)
      )
      .subscribe()
    this.subscriptions.push(sub);
  }

}
