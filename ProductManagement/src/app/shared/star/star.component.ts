import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number = 0;
  starWidth = 75;

  @Output() rateChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.starWidth = this.rating * 75 / 5 ;
  }

  ngOnInit(): void {
  }

  onClick(val: number) {
    this.rating = val;
    this.rateChanged.emit(this.rating);
  }
}
