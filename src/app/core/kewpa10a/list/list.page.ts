import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kewpa10aService } from 'src/app/shared/services/kewpa10a/kewpa10a.service';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  kewpa10a: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private kewpa10aService: Kewpa10aService,
  ) { }

  async ngOnInit() {
    await this.getKewpa10a();
  }

  ionViewWillEnter() {
    this.getKewpa10a();
  }

  

  getKewpa10a() {
    this.kewpa10aService.getAll().subscribe(
      (res) => {
        console.log(res);
        this.kewpa10a = res;

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  deleteKewpa10a(kewpa10a) {
    this.kewpa10aService.delete(kewpa10a.id).subscribe(
      (res) =>  {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.getKewpa10a();
      }
    );
  }

  editKewpa10a(kewpa10a) {
    this.router.navigate(['/core/kewpa10a-edit/' + kewpa10a.id]);
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async viewKewpa10a(kewpa10a) {
  const modal = await this.modalCtrl.create({
    component: ViewPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'kewpa10a': kewpa10a,
    }
  });
  return await modal.present();
}

}
