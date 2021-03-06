import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { NoteGroup } from '../NoteGroup';

@Component({
  selector: 'app-new-note-group',
  templateUrl: './new-note-group.component.html',
  styleUrls: ['./new-note-group.component.css', '../style.css']
})
export class NewNoteGroupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }


  form = this.fb.group({
    noteGroupName: ['', [Validators.required]]
  });

  get noteGroupName() { return this.form.get('noteGroupName'); }

  onSubmit() {
    let noteGroupName: string = this.noteGroupName.value;
    this.noteService.newNoteGroup({ noteGroupName } as NoteGroup);
    this.router.navigate(['/note-browser']);
  }

  back(): void {
    this.router.navigate(['/note-browser']);
  }

}
