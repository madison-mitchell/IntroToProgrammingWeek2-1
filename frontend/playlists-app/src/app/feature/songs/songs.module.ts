import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongsRoutingModule } from './songs-routing.module';



@NgModule({
  declarations: [
    SongsComponent
  ],
  imports: [
    SongsRoutingModule,
    CommonModule
  ]
})
export class SongsModule { }
