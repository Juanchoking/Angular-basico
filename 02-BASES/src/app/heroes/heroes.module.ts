import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//Codigo nuestro
import { HeroComponent } from "./hero/hero/hero.component";
import { ListComponent } from "./list/list/list.component";



@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ], exports:[
    HeroComponent,
    ListComponent
  ], imports:[
    CommonModule
  ]
})
export class HeroesModule{}
