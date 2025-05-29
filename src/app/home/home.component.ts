import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mostrar:boolean = true;
  color:string = "green";
  destaques = [ "Inovação", "Tecnologia", "Impacto Social"]
  itemSelecionado:string = 'um';
  mes:number = 1

  trocarValor(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.itemSelecionado = elementoSelecionado.value
  }

  constructor(){

  }

}
