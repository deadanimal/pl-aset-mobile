import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Kewpa9Service } from 'src/app/shared/services/kewpa9/kewpa9.service';

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
   kewpa9Form: FormGroup;
   kewpa9FormValues: any;
   info_kewpa9Form: FormGroup;
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
    private kewpa9Service: Kewpa9Service,
    private plt: Platform,
    public alertController: AlertController,
  ) {

    this.plt.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/core/kewpa9-list'])
    });

  }

  async ngOnInit() {
    let params = this.route.snapshot.params['kewpa9_id'];

    if (params !== undefined) {
      this.updateMode = true;
      this.getFormValues(params);
      this.initkewpa9Form();
      this.selected_id = params;
    }

    else {
      this.initkewpa9Form();
      this.tambahInfoKewpa9();

    }

  }
  
  initkewpa9Form() {
    this.kewpa9Form = this.formBuilder.group({
      tujuan: new FormControl(null, [Validators.required]),
      tempat_digunakan: new FormControl(null, [Validators.required]),
      info_kewpa9: this.formBuilder.array([]),
    });
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  tambahInfoKewpa9() {
    const info_kewpa9 = this.formBuilder.group({

      no_siri_pendaftaran: [''],
      catatan: [''],
      tarikh_dipinjam: [new Date()],
      tarikh_dijangka: [new Date()],
      status: [''],
      tarikh_dipulangkan: [new Date()],
      tarikh_diterima: [new Date()],

      //PASTE TO FORM 8
      //no_siri_pendaftaran: [''],
      //tarikh_kerosakan: [''],
      //perihal_kerosakan: [''],
      //jumlah_kos_penyelenggaraan: [''],
      //anggaran_kos: [''],
      //syor_ulasan: [''],
      //ulasan: [''],

    });

    this.getInfoArray.push(info_kewpa9);
    this.count++;
    this.productLength = this.getInfoArray.length;
  }

  deleteInfo(i) {

    this.getInfoArray.removeAt(i);

    this.count--;
    this.productLength = this.getInfoArray.length;
  }

  get getInfoArray() {
    return (<FormArray> this.kewpa9Form.get('info_kewpa9'));
  }

  async submitKewpa9() {
    await this.kewpa9Service.create(this.kewpa9Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa9-list'])
      }
    );
  }

  async submitKewpa9Update() {
    await this.kewpa9Service.update(this.selected_id, this.kewpa9Form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/core/kewpa9-list/'])

      }
    );
  }

  getFormValues(params) {
    this.kewpa9Service.getOne(params).subscribe(
      (res) => {
        this.kewpa9FormValues = res;
        this.setFormValues();
      },
      (err) => {
        console.log(err);
      }
    );
    
  }
  setFormValues() {
    this.kewpa9Form.setValue({
      tujuan: this.kewpa9FormValues.tujuan,
      tempat_digunakan: this.kewpa9FormValues.tempat_digunakan,
      info_kewpa9: [],
    });

    this.kewpa9FormValues.info_kewpa9.forEach(element => {
      const info = this.formBuilder.group({
        id: element.id,
        no_siri_pendaftaran: element.no_siri_pendaftaran,
        catatan: element.catatan,
        tarikh_dipinjam: element.tarikh_dipinjam,
        tarikh_dijangka: element.tarikh_dijangka,
        status: element.status,
        tarikh_dipulangkan: element.tarikh_dipulangkan,
        tarikh_diterima: element.tarikh_diterima,
      });

      this.getInfoArray.push(info);
      this.count++;
      this.productLength = this.getInfoArray.length;
    });
  }

}
