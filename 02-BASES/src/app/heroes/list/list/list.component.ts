import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman','Ironman','Hulk','Thor'];

  public deletedHero?:string;
  removeLastHero():void{
    //pop remueve el ultimo elemento del arreglo y lo regresa
    //shift el primero
    this.deletedHero = this.heroNames.pop();
  }
}
