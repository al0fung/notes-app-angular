import { Component, OnInit, Input } from '@angular/core';
import { Note } from './../note';

@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.css']
})
export class NotesAppComponent implements OnInit {
  @Input() predefinedNotes: Note[];
  searchText: string;
  savedNotes: Note[];
  currentNote: Note;
  unsavedNote: Note;
  selectionMode: boolean;
  selectedNoteIds: number[];
  createModalShown: boolean;
  viewModalShown: boolean;
  editModalShown: boolean;

  constructor() { }

  ngOnInit(): void {
    this.searchText = '';
    if(!localStorage.length) {
      this.savedNotes = this.predefinedNotes;
    } else {
      this.savedNotes = JSON.parse(localStorage.getItem('savedNotes'));
    }
    this.currentNote = {
      id: undefined,
      title: '',
      content: ''
    }
    this.unsavedNote = {
      id: undefined,
      title: '',
      content: ''
    }
    this.selectionMode = false;
    this.selectedNoteIds = [];
    this.createModalShown = false;
    this.viewModalShown = false;
    this.editModalShown = false;
  }

  handleSearchTextChange(e) {
    this.searchText = e.target.value;
  }

  handleSelectClick() {
    this.selectionMode = true;
  }

  handleCancelClick() {
    this.selectedNoteIds = [];
    this.selectionMode = false;
  }

  handleDeleteClick() {
    this.savedNotes = this.savedNotes.filter(savedNote => !this.selectedNoteIds.includes(savedNote.id));
    localStorage.setItem('savedNotes', JSON.stringify(this.savedNotes));
    this.selectedNoteIds = [];
    this.selectionMode = false;
  }

  handleCreateClick() {
    this.createModalShown = true;
  }

  handleNoteClick(e) {
    if(!this.selectionMode) {
      this.currentNote = {
        id: e.clickedNoteId,
        title: e.clickedNoteTitle,
        content: e.clickedNoteContent
      };
      this.viewModalShown = true;
    } else {
      if(!this.selectedNoteIds.includes(e.clickedNoteId)) {
        this.selectedNoteIds = this.selectedNoteIds.concat([e.clickedNoteId]);
      } else {
        this.selectedNoteIds = this.selectedNoteIds.filter(selectedNoteId => selectedNoteId !== e.clickedNoteId);
      }
    }
  }

  handleCreateTitleChange(e) {
    this.unsavedNote = {
      id: undefined,
      title: e.target.value,
      content: this.unsavedNote.content
    };
  }

  handleCreateContentChange(e) {
    this.unsavedNote = {
      id: undefined,
      title: this.unsavedNote.title,
      content: e.target.value
    };
  }

  handleCreateDiscardClick() {
    this.unsavedNote = {
      id: undefined,
      title: '',
      content: ''
    };
    this.createModalShown = false;
  }

  handleCreateSaveClick() {
    let lastSavedNote = this.savedNotes[this.savedNotes.length - 1];
    this.savedNotes = this.savedNotes.concat([{
      id: lastSavedNote.id + 1,
      title: this.unsavedNote.title,
      content: this.unsavedNote.content
    }]);
    localStorage.setItem('savedNotes', JSON.stringify(this.savedNotes));
    this.unsavedNote = {
      id: undefined,
      title: '',
      content: ''
    };
    this.createModalShown = false;
  }

  handleCreateCloseClick() {
    this.createModalShown = false;
  }

  handleViewDeleteClick() {
    this.savedNotes = this.savedNotes.filter(savedNote => savedNote.id !== this.currentNote.id);
    localStorage.setItem('savedNotes', JSON.stringify(this.savedNotes));
    this.viewModalShown = false;
  }

  handleViewEditClick() {
    this.unsavedNote = this.currentNote;
    this.viewModalShown = false;
    this.editModalShown = true;
  }

  handleViewCloseClick() {
    this.viewModalShown = false;
  }

  handleEditTitleChange(e) {
    this.unsavedNote = {
      id: undefined,
      title: e.target.value,
      content: this.unsavedNote.content
    };
  }

  handleEditContentChange(e) {
    this.unsavedNote = {
      id: undefined,
      title: this.unsavedNote.title,
      content: e.target.value
    };
  }

  handleEditDiscardClick() {
    this.unsavedNote = {
      id: undefined,
      title: '',
      content: ''
    };
    this.viewModalShown = true;
    this.editModalShown = false;
  }

  handleEditSaveClick() {
    this.savedNotes = this.savedNotes.map(savedNote => {
      if (savedNote.id === this.currentNote.id) {
        return Object.assign({}, this.currentNote, this.unsavedNote);
      } else {
        return savedNote;
      }
    });
    localStorage.setItem('savedNotes', JSON.stringify(this.savedNotes));
    this.currentNote = Object.assign(this.currentNote, this.unsavedNote);
    this.unsavedNote = {
      id: undefined,
      title: '',
      content: ''
    };
    this.viewModalShown = true;
    this.editModalShown = false;
  }

  handleEditCloseClick() {
    this.handleEditDiscardClick();
  }
}
