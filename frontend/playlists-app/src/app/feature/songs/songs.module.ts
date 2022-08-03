import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsRoutingModule } from './songs-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { StoreModule } from '@ngrx/store';
import { reducers, SONGS_FEATURE_NAME } from './state';



@NgModule({
  declarations: [
    SongsComponent,
    OverviewComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    SongsRoutingModule,
    CommonModule,
    StoreModule.forFeature(SONGS_FEATURE_NAME, reducers)
  ]
})
export class SongsModule { }
