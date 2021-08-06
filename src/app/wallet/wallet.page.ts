import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  walletAmount: string = '';
  refferalCode: string = '';


  constructor() { }

  ngOnInit() {
    this.refferalCode = localStorage.getItem('refferalCode');
    this.walletAmount = localStorage.getItem('walletAmount');
  }

}
