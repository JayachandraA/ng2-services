import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts = [{ name: 'Facebook', status: 'Active' }];
  onAddNewAccount(event) {
    // console.log(event);
    this.accounts.push(event.account);
   }
  onStatusChanged(event) {
    // console.log(event);
    this.accounts[event.id].status = event.newStatus;
   }
}
