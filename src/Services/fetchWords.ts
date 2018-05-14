import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FetchWords {
  constructor(private http: Http ) { }
  getWords(number) {
    return new Promise((resolve, reject) => {
      this.http.get(' https://thawing-bayou-82277.herokuapp.com/wordlist/' + number ).subscribe(function (res) {

        console.log('service' + res + 'service' + res._body);
        resolve(res._body);

      }, ( err ) => {
        reject(err);
      });
    });
  }
}
