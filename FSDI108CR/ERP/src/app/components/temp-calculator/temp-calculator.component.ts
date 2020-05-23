import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.scss']
})
export class TempCalculatorComponent implements OnInit {

//Global Variables
celcius = '';
fahrenheit = '';


  constructor() {  }

  ngOnInit() {
  }

  convertCtoF(){
    var res = +this.celcius * (9 / 5) +32;
    this.fahrenheit = res.toFixed(2);
  }

  convertFtoC(){
    var res = (+this.fahrenheit -32) * (5 / 9);
    this.celcius = res.toFixed(2);
  }

}
