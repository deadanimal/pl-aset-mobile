import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kewpa9Service } from 'src/app/shared/services/kewpa9/kewpa9.service';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  kewpa9: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private kewpa9Service: Kewpa9Service,
  ) { }

  async ngOnInit() {
    this.getKewpa9();

  }

  ionViewWillEnter() {
    this.getKewpa9();
  }


  getKewpa9() {
    this.kewpa9Service.getAll().subscribe(
      (res) => {
        console.log(res);
        this.kewpa9 = res;

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  deleteKewpa9(kewpa9) {
    this.kewpa9Service.delete(kewpa9.id).subscribe(
      (res) =>  {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.getKewpa9();
      }
    );
  }

  editKewpa9(kewpa9) {
    this.router.navigate(['/core/kewpa9-edit/' + kewpa9.id]);
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async viewKewpa9(kewpa9) {
  const modal = await this.modalCtrl.create({
    component: ViewPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'kewpa9': kewpa9,
    }
  });
  return await modal.present();
}

}
