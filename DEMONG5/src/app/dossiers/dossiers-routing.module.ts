import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossiersListComponent } from './dossiers-list/dossiers-list.component';
import { DossiersShowComponent } from './dossiers-show/dossiers-show.component';

const routes: Routes = [{
  path: 'dossiers',
  component: DossiersListComponent,
}, {
  path: 'dossiers/:id',
  component: DossiersShowComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossiersRoutingModule { }
