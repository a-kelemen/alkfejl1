import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../Note';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  titleValue: string;
  textValue: string;

  

  constructor(private noteService: NoteService, private fb: FormBuilder, private router: Router) { }

  form = this.fb.group({
    noteTitle: ['', [Validators.required]],
    noteText: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  get noteTitle() { return this.form.get('noteTitle'); }
  get noteText() { return this.form.get('noteText'); }

  onSubmit(): void {
    let noteTitle: string = this.noteTitle.value;
    let noteText: string = this.noteText.value;
    this.noteService.newNote({ noteTitle, noteText } as Note);
    this.router.navigate(["/note-browser"]);
  }

  goBack(): void {
    this.router.navigate(['/note-browser']);
  }

}
