import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private numbers = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < /*Math.floor(Math.random() * 500)*/50; i++) {
      this.numbers.push(i);
    }
  }

}
