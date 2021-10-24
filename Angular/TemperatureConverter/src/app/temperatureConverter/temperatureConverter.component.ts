import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})
export class TemperatureConverter implements OnInit {

  celsiusVal: number;
  fahrenheitVal: number;

  ngOnInit() {
  }

  celsiusValueChange(celsius) {
    if (celsius || celsius === 0) {
      this.fahrenheitVal = Math.round((celsius * (9.0 / 5.0) + 32) * 10) / 10;
    } else {
      this.fahrenheitVal = null;
    }
  }

  fahrenheitValueChange(fahrenheit) {
    if (fahrenheit || fahrenheit === 0) {
      this.celsiusVal = Math.round((fahrenheit - 32) * (5.0 / 9.0) * 10) / 10;
    } else {
      this.celsiusVal = null;
    }
  }
}