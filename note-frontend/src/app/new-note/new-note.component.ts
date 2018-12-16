import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../Note';
import { NoteGroup } from '../NoteGroup';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css', '../style.css']
})
export class NewNoteComponent implements OnInit {

  titleValue: string;
  textValue: string;
  noteGroups: NoteGroup[];
  selectedGroup: NoteGroup;
  
  constructor(private noteService: NoteService, private fb: FormBuilder, private router: Router) { }

  form = this.fb.group({
    noteTitle: ['', [Validators.required]],
    noteText: ['', [Validators.required]],
    noteImportance['', [Validators.required]]
  });

  async ngOnInit() {
    this.noteGroups = await this.noteService.getNoteGroups();
  }

  get noteTitle() { return this.form.get('noteTitle'); }
  get noteText() { return this.form.get('noteText'); }
  get noteImportance() { return this.form.get('noteImportance');}

  onSubmit(): void {
    let noteTitle: string = this.noteTitle.value;
    let noteText: string = this.noteText.value;
    this.noteService.newNote(this.selectedGroup.groupId, { noteTitle, noteText } as Note);
    this.router.navigate(["/note-browser"]);
  }

  goBack(): void {
    this.router.navigate(['/note-browser']);


  }

  onSelectGroup(noteGroup :NoteGroup): void {
    this.selectedGroup = noteGroup;
    
  }

}
