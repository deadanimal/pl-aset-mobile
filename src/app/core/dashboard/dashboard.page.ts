import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) 
  { }

  ngOnInit(
  ) {
  }

  navigateToPage(path) {
    this.router.navigate([path]);
  }

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    console.log(this.barcodeScanner);
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
      alert(barcodeData);

    }).catch(err => {
      console.log('Error', err);
    });
  }


}
