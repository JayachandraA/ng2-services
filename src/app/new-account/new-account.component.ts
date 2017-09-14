import { AccountsService } from './../services/accounts.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  // @Output() onNewAccount = new EventEmitter();

  accountName = '';
  accountStatus = '';

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onAdd(event) {
    // console.log(event);
    // console.log(this.accountName);
    // this.onNewAccount.emit({ account: {name: this.accountName, status: this.accountStatus}});
    this.accountsService.addNewAccount(this.accountName, this.accountStatus);
  }
}
