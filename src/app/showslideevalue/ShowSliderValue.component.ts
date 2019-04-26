import {Component} from '@angular/core';

@Component({
  selector: 'app-show-slider-value',
  templateUrl: './ShowSliderValue.component.html',
  styleUrls: ['./ShowSliderValue.component.css']
})
export class ShowSliderValueComponent {

  min: number;
  max: number;

  private maxChanged(val: number) {
    this.max = val;
  }

  private minChanged(val: number) {
    this.min = val;
  }
}
