import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-note-modal',
  templateUrl: './create-note-modal.component.html',
  styleUrls: ['./create-note-modal.component.css']
})
export class CreateNoteModalComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Output() closeClick: EventEmitter<any> = new EventEmitter();
  @Output() titleChange: EventEmitter<any> = new EventEmitter();
  @Output() contentChange: EventEmitter<any> = new EventEmitter();
  @Output() discardClick: EventEmitter<any> = new EventEmitter();
  @Output() saveClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleCloseClick() {
    this.closeClick.emit();
  }

  handleTitleChange(e) {
    this.titleChange.emit(e);
  }

  handleContentChange(e) {
    this.contentChange.emit(e);
  }

  handleDiscardClick() {
    this.discardClick.emit();
  }

  handleSaveClick() {
    this.saveClick.emit();
  }
}
