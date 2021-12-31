import { Component, OnInit } from '@angular/core';
import { PengumumanService } from 'src/app/shared/services/pengumuman/pengumuman.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  pengumuman: any = {};
  user_detail: any = {};
  tarikh = new Date();
  tarikh_hari_ini = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private pengumumanService: PengumumanService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPengumuman();
    this.getTokenFromStorage();
    this.tarikh_hari_ini = this.datePipe.transform(this.tarikh, 'MMM d y h:mm');
  }

  getTokenFromStorage() {
    Storage.get({key: 'access_token'}).then((res)=> {
      let body = {
        "bearer_token": res.value
      };
      this.getUserInfo(body);
    });
  }

  getUserInfo(body) {
    this.authService.obtainUserInfo(body).subscribe(
      (res) => {
        this.user_detail = res;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  getPengumuman() {
    this.pengumumanService.getAll().subscribe(
      (res) => {
        this.pengumuman = res[0];
      },
      (err) => {
        console.log("error on calling pengumuman data from API", err);
      }
    );
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }



}
