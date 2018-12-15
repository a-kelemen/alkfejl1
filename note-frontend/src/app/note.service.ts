import { Injectable } from '@angular/core';
import { Note } from './Note';
import { NOTES1 } from './mock-data-notes1';
import { NOTES2 } from './mock-data-notes2';
import { GROUPS } from './mock-data-groups';
import { NoteGroup } from './NoteGroup';
import { Label } from './Label';
import { LABELS } from './mock-data-labels';
import { User } from './user';
import { USERS } from './mock-data-users';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes1: Note[] = NOTES1;
  notes2: Note[] = NOTES2;
  noteGroups: NoteGroup[] = GROUPS; 
  labels: Label[] = LABELS;
  users: User[] = USERS;

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

    getAllLabels(): Label[] {
      return this.labels;
    }

    getNoteLabels(): Label[]{
      return this.notes1[0].labels;

  }

  getUsers(): User[] {
    return this.users;
  }

    
  
}
