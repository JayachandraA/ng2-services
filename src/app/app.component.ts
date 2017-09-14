import { AccountsService } from './services/accounts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {

  accounts: { name: string, status: string }[] = []

  constructor(private accountsServices: AccountsService) {
    this.accounts = accountsServices.accounts;
  }
  // onAddNewAccount(event) {
  //   // console.log(event);
  //   this.accounts.push(event.account);
  //  }
  // onStatusChanged(event) {
  //   // console.log(event);
  //   this.accounts[event.id].status = event.newStatus;
  //  }
}
