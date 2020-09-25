import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { ModalComponent } from './modal/modal.component';
import { ViewNoteModalComponent } from './view-note-modal/view-note-modal.component';
import { EditNoteModalComponent } from './edit-note-modal/edit-note-modal.component';
import { CreateNoteModalComponent } from './create-note-modal/create-note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesAppComponent,
    NotesComponent,
    NoteComponent,
    ModalComponent,
    ViewNoteModalComponent,
    EditNoteModalComponent,
    CreateNoteModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
