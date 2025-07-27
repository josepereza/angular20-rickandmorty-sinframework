import { Routes } from '@angular/router';
import { Hero } from './pages/hero/hero';
import { CharacterList } from './pages/character-list/character-list';
import { CharacterDetail } from './pages/character-detail/character-detail';

export const routes: Routes = [

     { path: '', component: Hero },
    { path: 'characters', component: CharacterList },
    { path: 'character/:id', component: CharacterDetail },
    { path: '**', redirectTo: '' }
];
