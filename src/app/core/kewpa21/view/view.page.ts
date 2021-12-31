import { take } from 'rxjs/operators';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Kewpa21Service } from 'src/app/shared/services/kewpa21/kewpa21.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  kewpa21:any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    private kewpa21Service: Kewpa21Service,

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let kewpa21_id = this.route.snapshot.params['kewpa21_id'];
    this.getKewpa21(kewpa21_id);
  }


  getKewpa21(kewpa21_id) {
    this.kewpa21Service.getOne(kewpa21_id).subscribe(
      (res) => {
        this.kewpa21 = res;
        console.log(this.kewpa21);

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  editKewpa21() {
    this.navigateToPage('/core/kewpa21-edit/' + this.kewpa21.id);
  }

  navigateToPage(path) {
    this.router.navigate([path])
  }
  
 
}
