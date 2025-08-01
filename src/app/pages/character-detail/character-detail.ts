import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMorty } from '../../services/rick-and-morty';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Character } from '../../interfaces/character';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export default class CharacterDetail {
 private route = inject(ActivatedRoute);
  private rickAndMortyService = inject(RickAndMorty);
id=input.required<string>()
  character = signal<Character | undefined>(undefined);


//Aqui conseguimos el user con  httpResource
user = this.rickAndMortyService.getCharacterByIdRs(this.id) 
//

constructor() {
    effect(() => {
      if (this.id().length > 0) {
        this.rickAndMortyService.getCharacterById(this.id())
          .subscribe(char => this.character.set(char));
      }
    });
  }
 
}
