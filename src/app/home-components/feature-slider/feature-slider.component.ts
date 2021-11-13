import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature-slider',
  templateUrl: './feature-slider.component.html',
  styleUrls: ['./feature-slider.component.scss']
})
export class FeatureSliderComponent implements OnInit {
  @ViewChild('scrollBox') scrollBox!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft(){
    this.scrollBox.nativeElement.scrollLeft -= 320;
  }

  scrollRight(){
    this.scrollBox.nativeElement.scrollLeft += 320;
  }

}
