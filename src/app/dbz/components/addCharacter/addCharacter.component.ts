import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {

  @Output()
  //instancia de emision de eventos
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 0
  }

  emitCharacter():void{
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0}
  }
}
