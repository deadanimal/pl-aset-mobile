import { Component, OnInit } from '@angular/core';
import { PengumumanService } from 'src/app/shared/services/pengumuman/pengumuman.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengumuman',
  templateUrl: './pengumuman.page.html',
  styleUrls: ['./pengumuman.page.scss'],
})
export class PengumumanPage implements OnInit {
  pengumumans: any[] = [];
  baseUrl = environment.baseUrl;

  constructor(
    private router: Router,
    private pengumumanService: PengumumanService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPengumuman();
  }

  getPengumuman() {
    this.pengumumanService.getAll().subscribe(
      (res) => {
        this.pengumumans = res;
        for(let i=0; i<res.length; i++) {
          this.pengumumans[i].gambar = this.baseUrl + "storage/" +  res[i].gambar_pengumuman;
        }
        console.log(this.pengumumans);
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
