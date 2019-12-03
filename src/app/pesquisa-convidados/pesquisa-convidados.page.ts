import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-pesquisa-convidados',
  templateUrl: './pesquisa-convidados.page.html',
  styleUrls: ['./pesquisa-convidados.page.scss'],
})
export class PesquisaConvidadosPage implements OnInit {

  pesquisar: string="";
  anggota: any;
  idEvento: number;
  convidados: any = [];

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public toastCtrl: ToastController,
    private postPvdr: PostProvider,
    private storage: Storage,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.idEvento = data.id;
      this.pesquisar = data.pesquisar;
    });
  }

  async ionViewWillEnter(){
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 2500,
      message: 'Carregando...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    this.actRoute.params.subscribe((data: any) =>{
      this.idEvento = data.id;
      this.pesquisar = data.pesquisar;
    });
    this.convidados = [];
  	this.loadConvidado();
  }

  async loadConvidado(){
  	return new Promise(resolve => {
        let body = {
          idEvento:this.idEvento,
          pesquisa: this.pesquisar, 
          aksi: 'pesquisarconvidado'
        };
  
        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
          if(data.success){
          for(let convidado of data.result){
            this.convidados.push(convidado);
          }
         
          resolve(true);
        }
        else{
          const toast = await this.toastCtrl.create({
            message: data.msg,
            duration: 2000
          });
          toast.present();
          
        }
        });
     
      });
  	
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  async pesquisa(){
    if(this.pesquisar==""){
      const toast = await this.toastCtrl.create({
        message: 'Barra de pesquisa vazia',
        duration: 3000
      });
      toast.present();

    }else{
    return new Promise(resolve => {
      this.storage.get('session_storage2').then((res)=>{
        this.anggota = res;
        this.idEvento = this.anggota.idEvento;
        console.log(res);
    this.router.navigate(['/pesquisa-convidados/'+ this.pesquisar +'/'+ this.idEvento]);
      });
    });
  }
}

formAlterarConvidados(id){
  this.router.navigate(['/alterar-convidados/'+ id]);
}

async Situacao(id,situacao){
  if(situacao=="false"){
    let body = {
      id: id,
      situacao: 'true',
      aksi : 'situacaoConvidados',
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
      let alertpesan = data.msg;
      console.log(data);
      if(data.success){
        this.convidados = [];
        this.loadConvidado();
    }
      else{
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 3000
        });
        toast.present();
      }
    });
  }

  else{
    let body = {
      id: id,
      situacao: 'false',
      aksi : 'situacaoConvidados',
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
      let alertpesan = data.msg;
      console.log(data);
      if(data.success){
        this.convidados = [];
        this.loadConvidado();
    }
      else{
        const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 3000
        });
        toast.present();
      }
    });

  }
  const loading = await this.loadingController.create({
    spinner: 'crescent',
    duration: 1250,
    message: 'Carregando...',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();

}

}
