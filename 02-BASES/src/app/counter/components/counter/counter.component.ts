import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h1> {{title}}</h1>

      <button (click)='increaseBy(-1)'>-1</button>
      <button (click)='resetCounter()'>Reset</button>
      <button (click)='increaseBy(+1)'>+1</button>

      <h3>Contador: {{counter}}</h3>
  `
})
export class CounterComponent {

  public title:string = 'bases - Mi primera App';
  public counter:number = 10;

  increaseBy(value:number):void{

    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }

}
