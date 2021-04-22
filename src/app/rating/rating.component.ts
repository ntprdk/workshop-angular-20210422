import  { Component, EventEmitter, Input, OnInit, Output }from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() targetScore = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.starWidth = this.targetScore * 75 / 5;
  }

  onClicked(): void {
    console.log('some data at ' + this.targetScore);
    this.ratingClicked.emit('some data at ' + this.targetScore);
}

}
