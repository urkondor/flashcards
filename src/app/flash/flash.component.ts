import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flash } from '../flash.model';


@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() flash: Flash = {
    id: 1,
    question: '',
    answer: '',
    show: false,
  };

  // after these, make sure to add (click) to template
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();
  @Output() onToggleCard = new EventEmitter();

  toggleCard() {
    // doesn't work here - needed to import EventEmitter from @angular/core
    this.onToggleCard.emit(this.flash.id);
  }

  /* action functions for cards: once functions are defined
  * and template includes (click) actions, "wire it up" in
  * app.component.html to include (onDelete), etc. actions
  */

  deleteFlash() {
    this.onDelete.emit(this.flash.id);
  }

  editFlash() {
    this.onEdit.emit({
      id: this.flash.id,
      flag: 'incorrect',
    });
  }

  markCorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct',
    });
  }

  markIncorrect() {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
