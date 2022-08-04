import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsRoutingModule } from './songs-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { ListComponent } from './components/list/list.component';
import { NewComponent } from './components/new/new.component';
import { StoreModule } from '@ngrx/store';
import { reducers, SONGS_FEATURE_NAME } from './state';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { SongFeatureEffects } from './state/effects/songs-feature.effects';
import { SongsDataEffects } from './state/effects/songs-data.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { CanActivateNew } from './can-activate-new.guard';


@NgModule({
  declarations: [
    SongsComponent,
    OverviewComponent,
    ListComponent,
    NewComponent,
    ErrorDisplayComponent
  ],
  imports: [
    SongsRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(SONGS_FEATURE_NAME, reducers),
    EffectsModule.forFeature([SongFeatureEffects, SongsDataEffects])
  ],
  providers: [CanActivateNew]
})
export class SongsModule { }
