import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateNew } from "./can-activate-new.guard";
import { ListComponent } from "./components/list/list.component";
import { NewComponent } from "./components/new/new.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { SongsComponent } from "./songs.component";


const routes: Routes = [
  {
    path: 'songs',
    component: SongsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'new',
        component: NewComponent,
        canActivate: [CanActivateNew]
      },
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
