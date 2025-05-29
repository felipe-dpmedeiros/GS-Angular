import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { InspiracaoComponent } from './components/inspiracao/inspiracao.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'inspiracao', component: InspiracaoComponent},
  {path : 'programacao', component: ProgramacaoComponent},
  {path : 'gifts', component: GiftsComponent},
  {path : 'parceiros', component: ParceirosComponent},
  {path : 'footer', component: FooterComponent},
  {path : '**', component: NotfoundComponent}
];
