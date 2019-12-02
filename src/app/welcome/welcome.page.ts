import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { PostProvider } from 'src/providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  anggota: any;
  idUsuario: number;

  constructor(
    private router: Router,
    private storage: Storage,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  formHome(){
    return new Promise(resolve => {
      this.storage.get('session_storage').then(async (res)=>{
        this.anggota = res;
        this.idUsuario = this.anggota.idUsuario;

      let body = {
        idUsuario: this.idUsuario,
        aksi: 'updateFirst'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        let alertpesan = data.msg;
        console.log(data);
        if(data.success){

        this.storage.set('session_storage', data.result);
        this.router.navigate(['/home']);
      }
        else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });
     
      });
    });
   
  }
}
