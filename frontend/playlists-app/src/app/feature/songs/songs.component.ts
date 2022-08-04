import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSongsLoaded } from './state';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  loaded$!: Observable<boolean>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loaded$ = this.store.select(selectSongsLoaded)
  }

}
