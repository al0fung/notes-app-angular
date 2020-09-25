import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() selected: boolean;
  @Output() noteClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleNoteClick() {
    this.noteClick.emit({clickedNoteId: this.id, clickedNoteTitle: this.title, clickedNoteContent: this.content});
  }

}
