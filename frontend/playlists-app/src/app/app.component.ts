import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Playlist App';

  todoList = [
    'Clean Garage',
    'Mow Lawn',
    'Trim Tree by Road'
  ];

  easterEgg() {
    this.title = 'You win a prize!';
  }

  addItem(item:HTMLInputElement) {
    this.todoList.push(item.value);
    item.value ='';
    item.focus();
  }
}
