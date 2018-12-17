import { Component, OnInit } from '@angular/core';

import { NoteGroup } from '../NoteGroup';
import { Note } from '../Note';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../style.css']
})
export class NavigationComponent implements OnInit {

  noteGroups: NoteGroup[];
  notes: Note[];
  selectedGroup: NoteGroup;
  selectedNote: Note;
  selectedNoteId: number;
  sortByImpNotDat: boolean;



  constructor(private noteService: NoteService, private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.setSelectedNote();
    this.refresh();
  }

  onSelectGroup(group: NoteGroup): void {
    this.selectedGroup = group;
    //this.notes = this.noteService.getNotes(this.selectedGroup.groupId);
    this.notes = this.selectedGroup.notes;
    this.convertDate();

    this.sortNotes();
  }

  sortNotesByImportance(): void {
    this.notes.sort((a, b) => {
      if (a.noteImportance > b.noteImportance) {
        return -1;
      }
      else if (a.noteImportance <= b.noteImportance) {
        return 1;
      }
      else {
        return 0;
      }
    });
    
  }

  sortNotesByDate(): void {
    this.notes.sort((a, b) => {
      if (a.convertedCreated_at > b.convertedCreated_at) {
        return -1;
      }
      else if (a.convertedCreated_at <= b.convertedCreated_at) {
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

  async setSelectedNote() {
    const noteGroupId = +this.route.snapshot.paramMap.get('noteGroupId');
    const noteId = +this.route.snapshot.paramMap.get('noteId');

    

    this.noteGroups = await this.noteService.getNoteGroups();
    if (this.noteGroups[0]) {
      if (noteGroupId) {
        this.selectedGroup = this.noteGroups.find(noteGroup => noteGroup.groupId === noteGroupId);
      }
      else {
        this.selectedGroup = this.noteGroups[0];
        console.log(this.noteGroups);
      }

      if (this.selectedGroup.notes) {
        this.notes = this.selectedGroup.notes;
        this.convertDate();

        if (this.notes[0]) {

          this.sortByImpNotDat = true;
          this.sortNotes();
          if (noteId) {
            this.selectedNote = this.notes.find(note => note.noteId === noteId);
            this.selectedNoteId = this.notes.indexOf(this.selectedNote);
          }
          else {
            this.selectedNote = this.notes[0];
            this.selectedNoteId = 0;
          }
        }
      }
    }

  }

  convertDate(): void {

    for (let i = 0; i < this.notes.length; i++) {
      let note = this.notes[i];

      //let dateToSplit: string = note.created_at;
      //let splitDate: string[] = dateToSplit.split('T');
      note.convertedCreated_at = new Date(note.created_at);
    }
  }

  async refresh() {
    console.log("refresh()");
    this.noteGroups = await this.noteService.getNoteGroups();
    this.selectedGroup = this.noteGroups[0];
    this.notes = this.selectedGroup.notes;
    
    
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
