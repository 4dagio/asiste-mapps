import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  service: {lat: number, long: number, service: string}

  constructor(private rutaActiva: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.service = {
      lat: Number(this.rutaActiva.snapshot.params.lat),
      long: Number(this.rutaActiva.snapshot.params.long),
      service: this.rutaActiva.snapshot.params.service
    }
    console.log(this.service);
  }

}
