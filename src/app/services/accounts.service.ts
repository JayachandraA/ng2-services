import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {

  public accounts = [{ name: 'Facebook', status: 'Active' }];

  constructor(private loggingService: LoggingService) { }


  /**
   * addNewAccount
   * @param: name, is the account name of string type
   * @param: status, is the account status of string type
   */
  public addNewAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status})
  }

  /**
   * updateStatus
   * @param: status: is the new status value to be updated
   * @param: index: is the index value at which position account you want to update it's status
   */
  public updateStatus(status: string, index: number) {
    this.accounts[index].status = status;
    this.loggingService.logTheAccountStatus(status);
  }
}
