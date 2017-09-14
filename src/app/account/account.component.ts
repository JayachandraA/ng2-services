import { LoggingService } from './../services/logging.service';
import { AccountsService } from './../services/accounts.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  @Input() account;
  @Input() id;

  // @Output() statusChanged = new EventEmitter();

  constructor(private accountsService: AccountsService) {
    // console.log(this.account, this.id)
  }

  ngOnInit() {
  }

  onChangeStatus(status) {
    // console.log(status);
    // console.log(this.id);
    // this.statusChanged.emit({ newStatus: status, id: this.id });
    this.accountsService.updateStatus(status, this.id);
  }

}
