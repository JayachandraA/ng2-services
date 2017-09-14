import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() onNewAccount = new EventEmitter();

  accountName = '';
  accountStatus = '';

  constructor() { }

  ngOnInit() {
  }

  onAdd(event) {
    // console.log(event);
    // console.log(this.accountName);
    this.onNewAccount.emit({ account: {name: this.accountName, status: this.accountStatus}});
  }
}
