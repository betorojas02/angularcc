import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente';

import {FormGroup , FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {


  clientes: Cliente[] = [];
  factura: FormGroup;

  datoPlato = [];
  constructor(private cliente: ClientesService,
              private fb: FormBuilder) {


                this.factura = this.fb.group({
                  cliente : [''],

                });

              }








  ngOnInit(): void {
    this.listarClientes();
  }


   listarClientes () {

    this.cliente.getListComentarios().subscribe((data:any) => {

      this.clientes = data;

    });



  }



  metodoGuardatoPlato() {




      this.datoPlato

  }


}
