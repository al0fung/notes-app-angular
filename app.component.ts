import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  predefinedNotes: Note[] = [
    {id: 1, title: "ToDo List", content: "write a React SPA\ndo laundary\nget new headphones"},
    {id: 2, title: "Technologies to keep an eye on", content: "AI\nQuantum Computing"},
    {id: 3, title: "Favourite Colors", content: "Alice:\nblue\nwhite\n\nBob:\ngreen\n\nCammy:\nred\ngreen"},
    {id: 4, title: "Journal", content: "2020-02-10:\nFinally beat the mobile game I downloaded last week. It's time to do some actual work :D\n\n2020-04-08:\nFinally have a functional version of my first game developed! Time to share it with my family and friends :D"},
    {id: 5, title: "Reading List", content: "Harry Potter series\nThe Hobbit\nLord of the Rings series"}
  ]
}
