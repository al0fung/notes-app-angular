import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() savedNotes: Note[];
  @Input() searchText: string;
  @Input() selectedNoteIds: number[];
  @Output() noteClick: EventEmitter<any> = new EventEmitter();
  filteredNotes: Note[];

  constructor() { }

  refreshFilteredNotes() {
    this.filteredNotes = [];
    this.savedNotes.forEach(savedNote => {
      let noteTitleLower = savedNote.title.toLowerCase();
      let noteContentLower = savedNote.content.toLowerCase();
      let searchTextLower = this.searchText.toLowerCase();
      if(noteTitleLower.includes(searchTextLower) || noteContentLower.includes(searchTextLower)) {
        this.filteredNotes.push(savedNote);
      } else {
        return;
      }
    });
  }

  ngOnInit(): void {
    this.refreshFilteredNotes();
  }

  ngOnChanges(): void {
    this.refreshFilteredNotes();
  }

  handleNoteClick(e) {
    this.noteClick.emit(e);
  }

}
