import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  counter: number = 0

  add(){
    this.counter++
  }

  sub(){
    this.counter--
  }

  clean(){
    this.counter = 0
  }

  hide(){
   return this.counter <= 0
  }
}
