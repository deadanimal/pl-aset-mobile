import { take } from 'rxjs/operators';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  @Input() kewpa10a: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log("pass data to modal", this.kewpa10a);
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  navigateToPage(path) {
    this.router.navigate([path])
  }

  editKewpa10a() {
    this.dismissModal();
    this.navigateToPage('/core/kewpa10a-edit/' + this.kewpa10a.id);
  }

 
}
