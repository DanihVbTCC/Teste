import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdicionarServicoEventoPage } from './adicionar-servico-evento.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarServicoEventoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdicionarServicoEventoPage]
})
export class AdicionarServicoEventoPageModule {}
