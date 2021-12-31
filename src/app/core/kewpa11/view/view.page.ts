import { take } from 'rxjs/operators';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Kewpa11Service } from 'src/app/shared/services/kewpa11/kewpa11.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  kewpa11:any = {
    'kewpa3a': {},
    'kewpa11': {}
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    private kewpa11Service: Kewpa11Service,

  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let kewpa11_id = this.route.snapshot.params['kewpa11_id'];
    this.getKewpa11(kewpa11_id);
  }


  getKewpa11(kewpa11_id) {
    this.kewpa11Service.getOne(kewpa11_id).subscribe(
      (res) => {
        this.kewpa11 = res;
        console.log(this.kewpa11);

      },
      (err) => {
        console.log(err);

      },
      () => {

      }
    );
  }

  editKewpa11() {
    this.navigateToPage('/core/kewpa11-edit/' + this.kewpa11.id);
  }

  navigateToPage(path) {
    this.router.navigate([path])
  }
  
 
}
