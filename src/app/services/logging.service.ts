import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  public logTheAccountStatus(status: string) {
    console.log('The account status is: ', status);
  }
}
