import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSongList } from '../../state';
import { SongEntity } from '../../state/reducers/song-list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  songs$!: Observable<SongEntity[]>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSongList);
  }

}
