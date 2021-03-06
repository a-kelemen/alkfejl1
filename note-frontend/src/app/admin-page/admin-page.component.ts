import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-data-users';
import { NoteService } from '../note.service';
import { NoteGroup } from '../NoteGroup';
import { Note } from '../Note';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: User[];
  selectedNote: Note;
  noteIsSelected: boolean;
  selectedGroup: NoteGroup;
  noteGroups: NoteGroup[];

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.users = await this.noteService.getUsers();
    this.noteIsSelected = false;
     
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
    this.noteIsSelected = true;
    
  }

  deleteNote(): void {
    this.noteService.deleteNote(this.selectedNote.noteId);
    //this.router.navigate(['/admin-page']);

  }

  refresh(): void {
    this.router.navigate(['/admin-page']);
    this.getUsers();
  }
}
