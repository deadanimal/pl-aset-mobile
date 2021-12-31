import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kewpa11Service } from 'src/app/shared/services/kewpa11/kewpa11.service';

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
   kewpa11Form: FormGroup;
   kewpa11FormValues: any;
   info_kewpa11Form: FormGroup;
   count : any = 0;
   productLength : any = 0;

   updateMode: boolean = false;
   selected_id: any;

   kewpa11: any = {
     'kewpa3a': '',
     'kewpa11': ''
   };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private kewpa11Service: Kewpa11Service,
    private plt: Platform,
    public alertController: AlertController,
  ) {

    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/core/kewpa11-list'])
    });

  }

  async ngOnInit() {
    let params = this.route.snapshot.params['kewpa11_id'];

    if (params !== undefined) {
      this.updateMode = true;
      this.getFormValues(params);
      this.initkewpa11Form();
      this.selected_id = params;
    }

    else {
      this.initkewpa11Form();

    }

  }
  
  initkewpa11Form() {
    this.kewpa11Form = this.formBuilder.group({
      lokasi_sebenar: new FormControl(null, [Validators.required]),
      status_aset: new FormControl(null, [Validators.required]),
      scan_status: new FormControl(null, [Validators.required]),
    });
  }

  navigateToPage(path) {
    console.log("test", path);
    this.router.navigate([path]);
  }

  async submitKewpa11() {
    await this.kewpa11Service.create(this.kewpa11Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa11-list'])
      }
    );
  }

  async submitKewpa11Update() {
    await this.kewpa11Service.update(this.selected_id, this.kewpa11Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa11-list'])

      }
    );
  }

  async submitKewpa11UpdateSubmit() {
    this.kewpa11Form.patchValue({'scan_status': 'diperiksa'})
    await this.kewpa11Service.update(this.selected_id, this.kewpa11Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa11-list'])

      }
    );
  }

  getFormValues(params) {
    this.kewpa11Service.getOne(params).subscribe(
      (res) => {
        this.kewpa11FormValues = res;
        this.kewpa11 = res;
        this.setFormValues();
        console.log(this.kewpa11);
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  setFormValues() {
    this.kewpa11Form.setValue({
      lokasi_sebenar: this.kewpa11FormValues.lokasi_sebenar,
      status_aset: this.kewpa11FormValues.status_aset,
      scan_status: this.kewpa11FormValues.scan_status,
    });

  }

}
