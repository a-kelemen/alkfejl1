import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Note';
import { Router } from '@angular/router';
import { NoteGroup } from '../NoteGroup';
import { NoteService } from '../note.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-note-browser',
  templateUrl: './note-browser.component.html',
  styleUrls: ['./note-browser.component.css', '../style.css']
})
export class NoteBrowserComponent implements OnInit {


  @Input() note: Note;
  @Input() group: NoteGroup;
  modify: boolean = false;
  isReadOnly: boolean = false;
  
  textValue:string;
  titleValue:string;

  constructor(private noteService: NoteService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    if (this.note) {
      this.isReadOnly = true;
      this.textValue = this.note.noteText;
      this.titleValue = this.note.noteTitle;
    }
  }

  ngOnChanges() {
    if (this.note) {
      this.modify = false;
      this.textValue = this.note.noteText;
      this.titleValue = this.note.noteTitle;
      document.getElementById("modifyArea").setAttribute("readonly", "");
    }
  }


  modifyNote(){
    if (!this.modify){
      this.modify = true;
      document.getElementById("modifyArea").removeAttribute("readonly");
    } else{
      this.modify = false;
      document.getElementById("modifyArea").setAttribute("readonly", "");
    }
  }

  saveModifiedNote(): void{
    if (this.note) {
      let titleText:string = ((document.getElementById("noteTitle") as HTMLInputElement).value);
      //console.log("title: ", titleText);
      let areaText:string = ((document.getElementById("modifyArea") as HTMLInputElement).value);
      //console.log("textarea: ", areaText);
      console.log("save");
      this.note.noteTitle = titleText;
      this.note.noteText = areaText;
      var id = this.note.noteId;
      this.modifyNote();
      this.noteService.modifyNote(id, this.note);
      //this.router.navigate(["/note-browser"]);
    }
  }

  deleteNote(): void {
    console.log("httpvel jegyzet törlése");
    //this.router.navigate(['/note-browser']);
  }

  addNewNoteGroup():void {
    this.router.navigate(['/new-note-group']);
  }


}
