import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kewpa10bService } from 'src/app/shared/services/kewpa10b/kewpa10b.service';

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
   kewpa10bForm: FormGroup;
   kewpa10bFormValues: any;
   info_kewpa10bForm: FormGroup;
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
    private kewpa10bService: Kewpa10bService,
    private plt: Platform,
    public alertController: AlertController,
  ) {

    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/core/kewpa10b-list'])
    });

  }

  async ngOnInit() {
    let params = this.route.snapshot.params['kewpa10b_id'];

    if (params !== undefined) {
      this.updateMode = true;
      this.getFormValues(params);
      this.initkewpa10bForm();
      this.selected_id = params;
    }

    else {
      this.initkewpa10bForm();

    }

  }
  
  initkewpa10bForm() {
    this.kewpa10bForm = this.formBuilder.group({
      no_wo: new FormControl(null, [Validators.required]),
      plet_no_jenis_kenderaan: new FormControl(null, [Validators.required]),
      pengguna_terakhir: new FormControl(null, [Validators.required]),
      tarikh_rosak: new FormControl(null, [Validators.required]),
      bil: new FormControl(null, [Validators.required]),
      perihal_rosak: new FormControl(null, [Validators.required]),
      kos_penyelenggaraan_dulu: new FormControl(null, [Validators.required]),
      anggaran_kos_penyelenggaraan: new FormControl(null, [Validators.required]),
      syor_ulasan: new FormControl(null, [Validators.required]),
      ulasan: new FormControl(null, [Validators.required]),
      pembaikan_dalaman_luar: new FormControl(null, [Validators.required]),
      alatganti: new FormControl(null, [Validators.required]),
    });
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  async submitKewpa10b() {
    await this.kewpa10bService.create(this.kewpa10bForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa10b-list'])
      }
    );
  }

  async submitKewpa10bUpdate() {
    await this.kewpa10bService.update(this.selected_id, this.kewpa10bForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa10b-list'])

      }
    );
  }

  getFormValues(params) {
    this.kewpa10bService.getOne(params).subscribe(
      (res) => {
        this.kewpa10bFormValues = res;
        this.setFormValues();
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  setFormValues() {
    console.log("hu", this.kewpa10bFormValues);
    this.kewpa10bForm.setValue({
      no_wo: this.kewpa10bFormValues.no_wo,
      plet_no_jenis_kenderaan: this.kewpa10bFormValues.plet_no_jenis_kenderaan,
      pengguna_terakhir: this.kewpa10bFormValues.pengguna_terakhir,
      tarikh_rosak: this.kewpa10bFormValues.tarikh_rosak,
      bil: this.kewpa10bFormValues.bil,
      perihal_rosak: this.kewpa10bFormValues.perihal_rosak,
      kos_penyelenggaraan_dulu: this.kewpa10bFormValues.kos_penyelenggaraan_dulu,
      anggaran_kos_penyelenggaraan: this.kewpa10bFormValues.anggaran_kos_penyelenggaraan,
      syor_ulasan: this.kewpa10bFormValues.syor_ulasan,
      ulasan: this.kewpa10bFormValues.ulasan,
      pembaikan_dalaman_luar: this.kewpa10bFormValues.pembaikan_dalaman_luar,
      alatganti: this.kewpa10bFormValues.alatganti,
    });

  }

}
