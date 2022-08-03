import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './state';
import { CountByComponent } from './components/count-by/count-by.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './state/effects/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    CounterComponent,
    CountByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
