import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kewpa8Service } from 'src/app/shared/services/kewpa8/kewpa8.service';

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

@Component({ selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
   kewpa8Form: FormGroup;
   kewpa8FormValues: any;
   info_kewpa8Form: FormGroup;
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
    private kewpa8Service: Kewpa8Service,
    private plt: Platform,
    public alertController: AlertController,
  ) {

    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/core/kewpa8-list'])
    });

  }

  async ngOnInit() {
    let params = this.route.snapshot.params['kewpa8_id'];

    if (params !== undefined) {
      this.updateMode = true;
      this.getFormValues(params);
      this.initkewpa8Form();
      this.selected_id = params;
    }

    else {
      this.initkewpa8Form();

    }

  }
  
  initkewpa8Form() {
    this.kewpa8Form = this.formBuilder.group({
      kuantiti_dimohon: new FormControl(null, [Validators.required]),
      catatan_pemohon: new FormControl(null, [Validators.required]),
    });
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  tambahInfoKewpa8() {
    const info_kewpa8 = this.formBuilder.group({

      no_siri_pendaftaran: [''],
      tarikh_kerosakan: [''],
      perihal_kerosakan: [''],
      jumlah_kos_penyelenggaraan: [''],
      anggaran_kos: [''],
      syor_ulasan: [''],
      ulasan: [''],

    });

    this.getInfoArray.push(info_kewpa8);
    this.count++;
    this.productLength = this.getInfoArray.length;
  }

  deleteInfo(i) {

    this.getInfoArray.removeAt(i);

    this.count--;
    this.productLength = this.getInfoArray.length;
  }

  get getInfoArray() {
    return (<FormArray> this.kewpa8Form.get('info_kewpa8'));
  }

  async submitKewpa8() {
    await this.kewpa8Service.create(this.kewpa8Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa8-list'])
      }
    );
  }

  async submitKewpa8Update() {
    await this.kewpa8Service.update(this.selected_id, this.kewpa8Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa8-list/'])

      }
    );
  }

  getFormValues(params) {
    this.kewpa8Service.getOne(params).subscribe(
      (res) => {
        this.kewpa8FormValues = res;
        this.setFormValues();
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  setFormValues() {
    this.kewpa8Form.setValue({
      kuantiti_dimohon: this.kewpa8FormValues.kuantiti_dimohon,
      catatan_pemohon: this.kewpa8FormValues.catatan_pemohon,
    });
  }

}
