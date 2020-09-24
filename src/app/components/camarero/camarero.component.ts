import { Component, OnInit } from '@angular/core';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-camarero',
  templateUrl: './camarero.component.html',
  styleUrls: ['./camarero.component.css']
})
export class CamareroComponent implements OnInit {


mes ;
meses = [
  {
    id: 1,
    mes : 'Enero'
  },
  {
    id: 2,
    mes : 'Febrero'
  },
  {
    id: 3,
    mes : 'Marzo'
  },
  {
    id: 4,
    mes : 'Abril'
  },
  {
    id: 5,
    mes : 'Mayo'
  },
  {
    id: 6,
    mes : 'junio'
  },
  {
    id: 7,
    mes : 'julio'
  },
  {
    id: 8,
    mes : 'Agosto'
  },
  {
    id: 9,
    mes : 'septiembre'
  },
  {
    id: 10,
    mes : 'Octubre'
  },

  {
    id: 11,
    mes : 'Noviembre'
  },
  {
    id: 12,
    mes : 'Dciembre'
  },
];



datos = [];

  constructor(private camareroService: CamareroService ) { }

  ngOnInit(): void {
  }


  onChange($event) {


    this.camareroService.listarCamererosMes($event.id).subscribe((data:any ) => {



      this.datos = data;


    });

  }

}
