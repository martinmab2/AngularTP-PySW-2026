import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Puntouno } from './components/puntouno/puntouno';
import { Puntodos } from './components/puntodos/puntodos';
import { Puntotres } from './components/puntotres/puntotres';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'puntouno', component: Puntouno },
  { path: 'puntodos', component: Puntodos },
  { path: 'puntotres', component: Puntotres },
  { path: '**', redirectTo: '' }
];
