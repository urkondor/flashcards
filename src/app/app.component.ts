import { Component } from '@angular/core';
import { Flash } from './flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flashs: Flash[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
  }];

  editing = false;
  editingId: number;

  // : corresponds to ($event) in template
  handleDelete(id: number) {
    const flashToDelete = this.flashs.filter(flash => flash.id === id);
    if (flashToDelete.length > 0) {
      const indexToDelete = this.flashs.indexOf(flashToDelete[0]);
      this.flashs.splice(indexToDelete, 1);
    }
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
    // add editing logic after adding the form
  }

  handleRememberedChange({id, flag}) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.remembered = flag;
  }

  trackByFlashId(index, flashs) {
    return flashs.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }

}

