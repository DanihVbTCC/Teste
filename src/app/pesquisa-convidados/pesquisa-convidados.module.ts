import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesquisaConvidadosPage } from './pesquisa-convidados.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaConvidadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PesquisaConvidadosPage]
})
export class PesquisaConvidadosPageModule {}
