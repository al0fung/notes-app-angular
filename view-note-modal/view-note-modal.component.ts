import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-note-modal',
  templateUrl: './view-note-modal.component.html',
  styleUrls: ['./view-note-modal.component.css']
})
export class ViewNoteModalComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Output() closeClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();
  @Output() editClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleCloseClick() {
    this.closeClick.emit();
  }

  handleDeleteClick() {
    this.deleteClick.emit();
  }

  handleEditClick() {
    this.editClick.emit();
  }
}
