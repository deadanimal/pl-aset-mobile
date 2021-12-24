import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kewpa10aService } from 'src/app/shared/services/kewpa10a/kewpa10a.service';

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
   kewpa10aForm: FormGroup;
   kewpa10aFormValues: any;
   info_kewpa10aForm: FormGroup;
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
    private kewpa10aService: Kewpa10aService,
    private plt: Platform,
    public alertController: AlertController,
  ) {

    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/core/kewpa10a-list'])
    });

  }

  async ngOnInit() {
    let params = this.route.snapshot.params['kewpa10a_id'];

    if (params !== undefined) {
      this.updateMode = true;
      this.getFormValues(params);
      this.initkewpa10aForm();
      this.selected_id = params;
    }

    else {
      this.initkewpa10aForm();

    }

  }
  
  initkewpa10aForm() {
    this.kewpa10aForm = this.formBuilder.group({
      no_siri_pendaftaran: new FormControl(null, [Validators.required]),
      tarikh_kerosakan: new FormControl(null, [Validators.required]),
      perihal_kerosakan: new FormControl(null, [Validators.required]),
      jumlah_kos_penyelenggaraan: new FormControl(null, [Validators.required]),
      anggaran_kos: new FormControl(null, [Validators.required]),
      syor_ulasan: new FormControl(null, [Validators.required]),
      ulasan: new FormControl(null, [Validators.required]),
      pengguna_terakhir: new FormControl(null, [Validators.required]),
    });
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async submitKewpa10a() {
    await this.kewpa10aService.create(this.kewpa10aForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa10a-list'])
      }
    );
  }

  async submitKewpa10aUpdate() {
    await this.kewpa10aService.update(this.selected_id, this.kewpa10aForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa10a-list'])

      }
    );
  }

  getFormValues(params) {
    this.kewpa10aService.getOne(params).subscribe(
      (res) => {
        this.kewpa10aFormValues = res;
        this.setFormValues();
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  setFormValues() {
    this.kewpa10aForm.setValue({
      no_siri_pendaftaran: this.kewpa10aFormValues.no_siri_pendaftaran,
      tarikh_kerosakan: this.kewpa10aFormValues.tarikh_kerosakan,
      perihal_kerosakan: this.kewpa10aFormValues.perihal_kerosakan,
      jumlah_kos_penyelenggaraan: this.kewpa10aFormValues.jumlah_kos_penyelenggaraan,
      anggaran_kos: this.kewpa10aFormValues.anggaran_kos,
      syor_ulasan: this.kewpa10aFormValues.syor_ulasan,
      ulasan: this.kewpa10aFormValues.ulasan,
      pengguna_terakhir: this.kewpa10aFormValues.pengguna_terakhir,
    });

  }

}
