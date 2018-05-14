import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FetchWords} from '../../Services/fetchWords';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {
  constructor(private fetchwords: FetchWords) { }
  data: any = [];
  isDataAvailable  = false ;
  ngOnInit() {
  }

  onSubmit ( Form: NgForm ) {
    this.fetchwords.getWords(Form.value.number).then((res) => {
      this.data = JSON.parse(res);
      this.data = this.data.data;
      this.isDataAvailable = true;
    }).catch((err) => {
      console.log(err);
    });
  }
}
