import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carregamento1',
  templateUrl: './carregamento1.page.html',
  styleUrls: ['./carregamento1.page.scss'],
})
export class Carregamento1Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    for (let i = 0; i <= 5; i++) {
      if(i=4){
        this.router.navigate(['/login']);
      }
    }
  }

}
