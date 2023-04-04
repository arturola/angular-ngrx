import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  styles: [],
  template: `
    <div>Current Count: {{ count$ | async }}</div>

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `,
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment())
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
