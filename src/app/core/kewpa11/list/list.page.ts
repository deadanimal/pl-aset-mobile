import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kewpa11Service } from 'src/app/shared/services/kewpa11/kewpa11.service';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  kewpa11: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private kewpa11Service: Kewpa11Service,
  ) { }

  async ngOnInit() {
    await this.getKewpa11();
  }

  ionViewWillEnter() {
    this.getKewpa11();
  }

  getKewpa11() {
    this.kewpa11Service.getAll().subscribe(
      (res) => {
        console.log(res);
        this.kewpa11 = res;

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  deleteKewpa11(kewpa11) {
    this.kewpa11Service.delete(kewpa11.id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.getKewpa11();
      }
    );
  }

  editKewpa11(kewpa11) {
    this.router.navigate(['/core/kewpa11-edit/' + kewpa11.id]);
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  scanKewpa11() {
    let no_siri_pendaftaran = 'PL /KPES /PA /HI /21 /00002';
    let body = {
      "no_siri_pendaftaran" : no_siri_pendaftaran
    };

    this.kewpa11Service.getOneByNoSiri(body).subscribe(
      (res) => {
        console.log("scanned info", res);
        this.navigateToPage('/core/kewpa11-view/'+ res.id)

      },
      (err) => {
        console.log("scan error", err);
      }
    );

  }

  viewKewpa11(kewpa11) {
    this.navigateToPage('/core/kewpa11-view/'+ kewpa11.id)
  }

}
