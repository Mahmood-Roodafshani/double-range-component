import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-double-slider-bar',
  templateUrl: './DoubleSliderBar.component.html',
  styleUrls: ['./DoubleSliderBar.component.css']
})
export class DoubleSliderBarComponent implements OnInit {
  @Input('minimum')
  MIN_VAL;
  @Input('maximum')
  MAX_VAL;
  @Output()
  selectedMinimum: EventEmitter<any> = new EventEmitter();
  @Output()
  selectedMaximum: EventEmitter<any> = new EventEmitter();
  startPointer;
  endPointer;
  maxVal: number;
  minVal: number;

  ngOnInit(): void {
    this.startPointer = document.getElementById('lower');
    this.endPointer = document.getElementById('upper');
    this.minVal = this.MIN_VAL;
    this.maxVal = this.MAX_VAL;
    this.emmit();
  }

  private startValueChanged(newVal: number) {
    if (newVal > Number(this.endPointer.value) - 1300000) {
      this.startPointer.value = Number(this.endPointer.value) - 1300000;
    }
    this.minVal = this.startPointer.value;
    this.emmit();
  }

  private endValueChanged(newVal: number) {
    if (newVal - 1300000 < this.startPointer.value) {
      this.endPointer.value = Number(this.startPointer.value) + 1300000;
    }
    this.maxVal = this.endPointer.value;
    this.emmit();
  }

  private emmit() {
    console.log('Emmit');
    this.selectedMinimum.emit(this.minVal);
    this.selectedMaximum.emit(this.maxVal);
  }
}
