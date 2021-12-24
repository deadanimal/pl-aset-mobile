import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kewpa8Service } from 'src/app/shared/services/kewpa8/kewpa8.service';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  kewpa8: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private kewpa8Service: Kewpa8Service,
  ) { }

  async ngOnInit() {
    this.getKewpa8();

  }

  ionViewWillEnter() {
    this.getKewpa8();
  }



  getKewpa8() {
    this.kewpa8Service.getAll().subscribe(
      (res) => {
        console.log(res);
        this.kewpa8 = res;

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  deleteKewpa8(kewpa8) {
    this.kewpa8Service.delete(kewpa8.id).subscribe(
      (res) =>  {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.getKewpa8();
      }
    );
  }

  editKewpa8(kewpa8) {
    this.router.navigate(['/core/kewpa8-edit/' + kewpa8.id]);
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async viewKewpa8(kewpa8) {
  const modal = await this.modalCtrl.create({
    component: ViewPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'kewpa8': kewpa8,
    }
  });
  return await modal.present();
}

}
