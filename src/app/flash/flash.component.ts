import { Component, Input } from '@angular/core';
import { Flash } from '../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent {

  constructor() { }

  @Input() flash: Flash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction',
    show: false,
  };

}
