import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossiersRoutingModule } from './dossiers-routing.module';
import { DossiersListComponent } from './dossiers-list/dossiers-list.component';
import { DossiersShowComponent } from './dossiers-show/dossiers-show.component';

@NgModule({
  imports: [
    CommonModule,
    DossiersRoutingModule
  ],
  declarations: [DossiersListComponent, DossiersShowComponent]
})
export class DossiersModule { }
