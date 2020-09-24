import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clientes: ClientesService) { }


  datos = [];
  ngOnInit(): void {

    this.listDatos();
  }


  listDatos () {

    this.clientes.getlistClientesFacturasMayores().subscribe((data:any) => {


      this.datos = data;

    });
  }

}
