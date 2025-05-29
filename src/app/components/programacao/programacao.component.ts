import { Eventos } from './../../interfaces/Eventos';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Adicione esta linha
import { HoverBorderDirective } from './hover-border.directive';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, HoverBorderDirective], // ✅ Adicione CommonModule aqui
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.css'
})
export class ProgramacaoComponent {
  mensagemInscricao: string = '';

  participarEvento(nomeEvento: string) {
    this.mensagemInscricao = `Você se inscreveu no evento: ${nomeEvento}`;
  }

  eventos: Eventos[] =[
    {id:1, titulo:"Evento Principal", data:"28/05/2025", horario:"20:20", local: "Estande P2"},
    {id:2, titulo:"Evento IBM", data:"01/06/2025", horario:"20:20", local: "Estande Principal"},
    {id:3, titulo:"Evento Challange", data:"10/09/2025", horario:"20:20", local: "Estande P1"}
  ]
}
