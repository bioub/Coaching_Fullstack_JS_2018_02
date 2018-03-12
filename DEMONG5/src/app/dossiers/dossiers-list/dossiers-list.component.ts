import { Component, OnInit } from '@angular/core';
import { DossierService } from '../../core/services/dossier.service';

@Component({
  selector: 'app-dossiers-list',
  templateUrl: './dossiers-list.component.html',
  styleUrls: ['./dossiers-list.component.css']
})
export class DossiersListComponent implements OnInit {

  public dossiers;

  constructor(private dossierService: DossierService) { }

  ngOnInit() {
    this.dossierService.getAll().subscribe((dossiers) => {
      this.dossiers = dossiers;
    });
  }

}
