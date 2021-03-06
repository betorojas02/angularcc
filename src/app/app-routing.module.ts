import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from './components/factura/factura.component';
import { CamareroComponent } from './components/camarero/camarero.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  {
    path : '',
    component : FacturaComponent
  },
  {
    path : 'camarero',
    component : CamareroComponent
  },
  {
    path : 'cliente',
    component : ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
