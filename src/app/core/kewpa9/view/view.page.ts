import { take } from 'rxjs/operators';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  @Input() kewpa9: any[];

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log("pass data to modal", this.kewpa9);
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
 
}
