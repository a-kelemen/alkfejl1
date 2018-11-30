import { Injectable } from '@angular/core';
import { Note } from './Note';
import { NOTES1 } from './mock-data-notes1';
import { NOTES2 } from './mock-data-notes2';
import { GROUPS } from './mock-data-groups';
import { NoteGroup } from './NoteGroup';



@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes1: Note[] = NOTES1;
  notes2: Note[] = NOTES2;
  noteGroups: NoteGroup[] = GROUPS; 

  constructor() { }
  
  getNotes(noteGroupId: number): Note[] {
    if (noteGroupId === 1) {
      return this.notes1;
    }
    else if (noteGroupId === 2) {
      return this.notes2;
    }
    else {
      return [];
    }
  }

    getNoteGroups(): NoteGroup[] {
      return this.noteGroups;
    }


    
  
}
