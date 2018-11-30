import { Component, OnInit } from '@angular/core';

import { NoteGroup } from '../NoteGroup';
import { Note } from '../Note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  noteGroups: NoteGroup[];
  notes: Note[];
  selectedGroup: NoteGroup;
  selectedNote: Note;
  selectedNoteId: number;
  sortByImpNotDat: boolean;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteGroups = this.noteService.getNoteGroups();
    this.selectedGroup = this.noteGroups[0];
    this.notes = this.noteService.getNotes(this.selectedGroup.groupId);
    this.sortNotes();
    this.selectedNote = this.notes[0];
    this.selectedNoteId = 0;
  }

  onSelectGroup(group: NoteGroup): void {
    this.selectedGroup = group;
    this.notes = this.noteService.getNotes(this.selectedGroup.groupId);
    this.sortNotes();
  }

  sortNotesByImportance(): void {
    this.notes.sort((a, b) => {
      if (a.importance > b.importance) {
        return -1;
      }
      else if (a.importance <= b.importance) {
        return 1;
      }
      else {
        return 0;
      }
    });
    
  }

  sortNotesByDate(): void {
    this.notes.sort((a, b) => {
      if (a.creationTime > b.creationTime) {
        return -1;
      }
      else if (a.creationTime <= b.creationTime) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }

  sortNotesByActuality(): void {
    let notesActual: Note[] = [];
    let notesNotActual: Note[] = [];
    

    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].isActual) {
        notesActual.push(this.notes[i]);
      }
      else {
        notesNotActual.push(this.notes[i]);
      }
    }
    this.notes = notesActual.concat(notesNotActual);
  }

  switchToPrevNote(): void {
    if (this.selectedNoteId > 0) {
      let newNoteId: number = this.selectedNoteId - 1;
      this.selectedNote = this.notes[newNoteId];
      this.selectedNoteId = newNoteId;
    }
  }

  switchToNextNote(): void {
    if (this.selectedNoteId < this.notes.length - 1) {
      let newNoteId: number = this.selectedNoteId + 1;
      this.selectedNote = this.notes[newNoteId];
      this.selectedNoteId = newNoteId;
    }
  }

  onSelectNote(note: Note): void {
    this.selectedNote = note;
    this.selectedNoteId = this.notes.indexOf(note);
  }

  sortNotes(): void {
    if (this.sortByImpNotDat) {
      this.sortNotesByImportance();
    }
    else {
      this.sortNotesByDate();
    }
    this.sortNotesByActuality();
  }

  setSortByImportance(): void {
    this.sortByImpNotDat = true;
    this.sortNotes();
  }

  setSortByDate(): void {
    this.sortByImpNotDat = false;
    this.sortNotes();
  }
}
