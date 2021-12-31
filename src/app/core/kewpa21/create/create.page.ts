import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kewpa21Service } from 'src/app/shared/services/kewpa21/kewpa21.service';

import {
  LoadingController,
  ModalController,
  Platform,
  ToastController,
  AlertController
} from '@ionic/angular';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
   kewpa21:any = {};
   kewpa21Form: FormGroup;
   kewpa21FormValues: any;
   info_kewpa21Form: FormGroup;
   count : any = 0;
   productLength : any = 0;


   updateMode: boolean = false;
   selected_id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private kewpa21Service: Kewpa21Service,
    private plt: Platform,
    public alertController: AlertController,
  ) {

    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/core/kewpa21-list'])
    });

  }

  async ngOnInit() {
    let params = this.route.snapshot.params['kewpa21_id'];

    if (params !== undefined) {
      this.updateMode = true;
      this.getFormValues(params);
      this.initkewpa21Form();
      this.selected_id = params;
    }

    else {
      this.initkewpa21Form();

    }

  }
  
  initkewpa21Form() {
    this.kewpa21Form = this.formBuilder.group({
      kaedah_pelupusan: new FormControl(null, [Validators.required]),
      justifikasi: new FormControl(null, [Validators.required]),
      scan_status: new FormControl(null, [Validators.required]),
    });
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async submitKewpa21() {
    await this.kewpa21Service.create(this.kewpa21Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa21-list'])
      }
    );
  }

  async submitKewpa21Update() {
    await this.kewpa21Service.update(this.selected_id, this.kewpa21Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa21-list'])

      }
    );
  }

  async submitKewpa21UpdateSubmit() {
    this.kewpa21Form.patchValue({'scan_status': 'diperiksa'})
    await this.kewpa21Service.update(this.selected_id, this.kewpa21Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa21-list'])

      }
    );
  }


  getFormValues(params) {
    this.kewpa21Service.getOne(params).subscribe(
      (res) => {
        this.kewpa21 = res;
        this.kewpa21FormValues = res;
        this.setFormValues();
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  setFormValues() {
    this.kewpa21Form.setValue({
      kaedah_pelupusan: this.kewpa21FormValues.kaedah_pelupusan,
      justifikasi: this.kewpa21FormValues.justifikasi,
      scan_status: this.kewpa21FormValues.scan_status,
    });

  }

}
