import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossierService } from './services/dossier.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    DossierService,
  ],
  declarations: []
})
export class CoreModule { }
