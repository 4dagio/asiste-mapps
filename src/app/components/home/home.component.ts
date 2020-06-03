import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../service/api.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  params: string;
  lat: any;
  long: any;
  service: string;
  estado: any;
  colaborador: string;
  paramsData: any;
  id: string;
  zoom: number;

  constructor(private rutaActiva: ActivatedRoute, public api: ApiService) { 

  }

  ngOnInit(): void {
    this.params = atob(this.rutaActiva.snapshot.params.params);
    let paramsFormat = this.params.split("|");
    this.lat = Number(paramsFormat[0]);
    this.long =  Number(paramsFormat[1]);
    this.service = paramsFormat[2];
    this.estado = paramsFormat[3];
    this.colaborador = `${paramsFormat[4]} ${paramsFormat[5]}`;
    this.id = paramsFormat[6];
    this.zoom = 15;

    if(this.estado === "En curso" || this.estado === "Ejecución") {
        setTimeout(() => {
          this.refreshlocation()
        }, 60000);
      }
  };

 refreshlocation() { 
  this.api.reloadLocation(this.id).subscribe((data: any)=>{
    this.lat = data.lat;
    this.long = data.long;
    this.estado = data.estado;
  });
 }
}


