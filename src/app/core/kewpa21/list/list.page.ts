import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kewpa21Service } from 'src/app/shared/services/kewpa21/kewpa21.service';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  kewpa21: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private kewpa21Service: Kewpa21Service,
  ) { }

  async ngOnInit() {
    await this.getKewpa21();
  }

  ionViewWillEnter() {
    this.getKewpa21();
  }

  getKewpa21() {
    this.kewpa21Service.getAll().subscribe(
      (res) => {
        console.log(res);
        this.kewpa21 = res;

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  deleteKewpa21(kewpa21) {
    this.kewpa21Service.delete(kewpa21.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.getKewpa21();
      }
    );
  }

  editKewpa21(kewpa21) {
    this.router.navigate(['/core/kewpa21-edit/' + kewpa21.id]);
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  scanKewpa21() {
    let no_siri_pendaftaran = 'PL /KPES /PA /HI /21 /00001';
    let body = {
      "no_siri_pendaftaran" : no_siri_pendaftaran
    };

    this.kewpa21Service.getOneByNoSiri(body).subscribe(
      (res) => {
        console.log("scanned info", res);
        this.navigateToPage('/core/kewpa21-view/'+ res.id)

      },
      (err) => {
        console.log("scan error", err);
      }
    );

  }

  viewKewpa21(kewpa21) {
    this.navigateToPage('/core/kewpa21-view/'+ kewpa21.id)
  }

}
