import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Carregamento1Page } from './carregamento1.page';

const routes: Routes = [
  {
    path: '',
    component: Carregamento1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Carregamento1Page]
})
export class Carregamento1PageModule {}
