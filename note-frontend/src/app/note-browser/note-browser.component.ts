import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Note';
import { Router } from '@angular/router';

import { NoteGroup } from '../NoteGroup';
import { NoteService } from '../note.service';
import { FormBuilder } from '@angular/forms';
import { Label } from '../Label';



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
  newLabels: Array<Label> = [];
  
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
      document.getElementById("modifyArea").classList.add('noBorder');
    }
  }


  modifyNote(){
    if (!this.modify){
      this.modify = true;
      document.getElementById("modifyArea").removeAttribute("readonly");
      document.getElementById("modifyArea").classList.remove('noBorder');
    } else{
      this.modify = false;
      document.getElementById("modifyArea").setAttribute("readonly", "");
      document.getElementById("modifyArea").classList.add('noBorder');
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
      this.selectLabels(this.newLabels);
      this.note.labels = this.newLabels;
      var id = this.note.noteId;
      this.modifyNote();
      this.noteService.modifyNote(id, this.note);
      //this.router.navigate(["/note-browser"]);
    }
  }

  deleteNote(): void {
    this.noteService.deleteNote(this.note.noteId);
    this.router.navigate(['/note-browser']);
  }

  addNewNoteGroup():void {
    this.router.navigate(['/new-note-group']);
  }
  selectLabels(newLabels:  Label[]) {
    this.newLabels = newLabels;
    //console.log("labels in note browser:");
    //for(let i=0; i<this.newLabels.length; i++){
    //  console.log(this.newLabels[i].labelId);}
    
  }


}
