import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { NoteGroup } from '../NoteGroup';
import { Note } from '../Note';
import { rootRoute } from '@angular/router/src/router_module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchTerm: string;
  noteGroups: NoteGroup[];
  notes: Note[];
  foundNotes: Note[];
  groupsOfFoundNotes: NoteGroup[];
  selectedNote: Note;
  selectedGroup: NoteGroup;
  selectedNoteId: number;
  selectedGroupId: number;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  async onSearchButtonClick() {
    let foundNotes = [];
    let groupsOfFoundNotes = [];
    this.noteGroups = await this.noteService.getNoteGroups();
    for (let i = 0; i < this.noteGroups.length; i++) {
      console.log(i);
      this.notes = this.noteGroups[i].notes;
      console.log(this.notes);
      for (let j = 0; j < this.notes.length; j++) {
        console.log(this.notes[j]);
        let result: number = this.notes[j].noteText.search(this.searchTerm);
        if ( result > -1) {
          foundNotes.push(this.notes[j]);
          groupsOfFoundNotes.push(this.noteGroups[i]);
        }
      }
    }
    this.foundNotes = foundNotes;
    this.groupsOfFoundNotes = groupsOfFoundNotes;
  }
  
}
