import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {

   // Slider
   @ViewChild('introSlides', {static: false}) introSlides: any
   endReached: boolean = false
   imgLoaded: boolean = false
   sliderConfig = {
     centeredSlides: true,
     initialSlide: 0,
     speed: 400
   }
   slides = [
     { "image": "/assets/logo-labuan.png", "text": "Pengurusan Aset dan Stor" },
   ];
 
   constructor(
     private router: Router
   ) {
   }
 
   ngOnInit() {
     this.imgLoaded = false
   }
 
   next() {
     this.introSlides.slideNext()
   }
 
   slideDidChange() {
     this.introSlides.isEnd().then(res => {
       this.endReached = res;
     })
   }
 
   navigatePage(path: string) {
     this.router.navigate([path])
   }

}
