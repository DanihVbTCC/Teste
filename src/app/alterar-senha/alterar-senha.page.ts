import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  anggota: any;
  idUsuario: number;
  confpassword: string;
  newpassword: string;
  password: string;

  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }
  ngOnInit() {
    
       this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.idUsuario = this.anggota.idUsuario;
      console.log(res);
    });
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.idUsuario = this.anggota.idUsuario;
      console.log(res);
    });
  }

  async Salvar(){
  	if(this.newpassword == this.confpassword){
      this.storage.get('session_storage').then((res)=>{
        this.anggota = res;
        this.idUsuario = this.anggota.idUsuario;
        console.log(res);

        let body = {
          password: this.password,
          newpassword: this.newpassword,
          idUsuario: this.idUsuario,
          aksi: 'updateSenha'
        };
  
        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
          let alertpesan = data.msg;
          console.log(data);
          if(data.success){
            const toast = await this.toastCtrl.create({
              message: 'Alterado com Sucesso',
              duration: 3000
            });
            this.router.navigate(['/perfil-cliente/']);
            toast.present();
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
    }else{
      const toast = await this.toastCtrl.create({
        message: 'Senhas Inválidas',
        duration: 3000
      });
      toast.present();
    }
  }

}