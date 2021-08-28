import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, countSelector } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  count$: Observable<number> = this.store.select(countSelector)
  hide$ = this.count$.pipe(map(count => count <= 0))

  constructor(private store: Store){
  }

  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }
}
