import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  buttons = [
    {count: 100, name: 'like', isClick: false},
    {count: 25, name: 'dislike', isClick: false},
  ]
  activeButton: any = undefined
  constructor() { }

  ngOnInit(): void {
  }

  on(button: any){
    if (button == undefined) return;
    this.activeButton.isClick = true
    this.activeButton.count++
  }

  off(button: any){
    if (button == undefined) return;
    this.activeButton.isClick = false
    this.activeButton.count--
  }

  click(button: any) {
    this.off(this.activeButton)
    if (button == this.activeButton) {
      this.activeButton = undefined
      return;
    } 
    this.activeButton = button
    this.on(this.activeButton)
   
  }
  

}
