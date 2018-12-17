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

import { HttpClient } from '@angular/common/http';
import { httpOptions, AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})



export class NoteService {

  notes1: Note[] = NOTES1;
  notes2: Note[] = NOTES2;
  noteGroups: NoteGroup[] = GROUPS; 
  labels: Label[] = LABELS;
  users: User[] = USERS;
  private noteUrl = 'http://localhost:8080/notes';

   noteGroupsUrl: string = 'http://localhost:8080/notegroups';
   notesUrl: string = 'http://localhost:8080/notes';
   usersUrl: string  = 'http://localhost:8080/users';
   labelsUrl: string = 'http://localhost:8080/labels';

  constructor(private http: HttpClient, private authService: AuthService) { }

  
  getNotes(noteGroupId: number): Promise<Note[]> {
    /*
    if (noteGroupId === 1) {
      return this.notes1;
    }
    else if (noteGroupId === 2) {
      return this.notes2;
    }
    else {
      return [];
    }
    */

    return this.http.get<Note[]>(`${this.noteGroupsUrl}/${noteGroupId}/notes`).toPromise();
  }

    getNoteGroups(): Promise<NoteGroup[]> {
      //return this.noteGroups;

      return this.http.get<NoteGroup[]>(this.noteGroupsUrl, httpOptions).toPromise();
    }

    getAllLabels(): Promise<Label[]> {
      //return this.labels;

      return this.http.get<Label[]>(this.labelsUrl, httpOptions).toPromise();
    }

    getNoteLabels(id: number): Promise<Label[]>{
      //return this.notes1[0].labels;

      return this.http.get<Label[]>(`${this.labelsUrl}/${id})`, httpOptions).toPromise();

    }

    getUsers(): Promise<User[]> {
      //return this.users;

      return this.http.get<User[]>(this.usersUrl, httpOptions).toPromise();
    }

    newNote(noteGroupId: number, note: Note): Promise<Note> {
      note.noteImportance = 4;
      note.isActual = true;
      return this.http.post<Note>(`${this.noteGroupsUrl}/${noteGroupId}/notes`, note, httpOptions).toPromise();
      }

    newNoteGroup(noteGroup: NoteGroup): Promise<NoteGroup> {

        return this.http.post<NoteGroup>(this.noteGroupsUrl, noteGroup, httpOptions).toPromise();
    
    }


    /*editNote(noteGroupId: number, note: Note): Promise<Note> {
      note.isActual = true;
      return this.http.post<Note>(`${this.noteGroupsUrl}/${noteGroupId}/notes`, note, httpOptions).toPromise();
    }
    */

    modifyNote(id: number, note: Note): Promise<Note> {
      return this.http.put<Note>(
        `${this.notesUrl}/${id}`,
        note,
        httpOptions
      ).toPromise();
    }

  deleteNote(id: number): Promise<Note> {
    return this.http.delete<Note>(`${this.notesUrl}/${id}`, httpOptions).toPromise();
  }



  
}
