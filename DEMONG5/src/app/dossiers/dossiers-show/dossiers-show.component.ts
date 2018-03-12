import { Component, OnInit } from '@angular/core';
import { DossierService } from '../../core/services/dossier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dossiers-show',
  templateUrl: './dossiers-show.component.html',
  styleUrls: ['./dossiers-show.component.css']
})
export class DossiersShowComponent implements OnInit {

  public dossier;

  constructor(
    private dossierService: DossierService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.dossierService.getById(params.id).subscribe((dossier) => {
        this.dossier = dossier;
      });
    });
  }

}
