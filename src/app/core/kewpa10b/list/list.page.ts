import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kewpa10bService } from 'src/app/shared/services/kewpa10b/kewpa10b.service';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  kewpa10b: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private kewpa10bService: Kewpa10bService,
  ) { }

  async ngOnInit() {
    await this.getKewpa10b();
  }

  ionViewWillEnter() {
    this.getKewpa10b();
  }

  

  getKewpa10b() {
    this.kewpa10bService.getAll().subscribe(
      (res) => {
        console.log(res);
        this.kewpa10b = res;

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  deleteKewpa10b(kewpa10b) {
    this.kewpa10bService.delete(kewpa10b.id).subscribe(
      (res) =>  {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.getKewpa10b();
      }
    );
  }

  editKewpa10b(kewpa10b) {
    this.router.navigate(['/core/kewpa10b-edit/' + kewpa10b.id]);
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async viewKewpa10b(kewpa10b) {
  const modal = await this.modalCtrl.create({
    component: ViewPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'kewpa10b': kewpa10b,
    }
  });
  return await modal.present();
}

}
