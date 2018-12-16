import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Note';
import { Router } from '@angular/router';


@Component({
  selector: 'app-note-browser',
  templateUrl: './note-browser.component.html',
  styleUrls: ['./note-browser.component.css', '../style.css']
})
export class NoteBrowserComponent implements OnInit {


  @Input() note: Note;
  modify: boolean = false;
  isReadOnly: boolean = false;
  
  textValue:string;
  titleValue:string;

  constructor(private router: Router) { }

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
      var titleText = ((document.getElementById("noteTitle") as HTMLInputElement).value);
      //console.log("title: ", titleText);
      var areaText = ((document.getElementById("modifyArea") as HTMLInputElement).value);
      //console.log("textarea: ", areaText);
      console.log("save");
      this.note.noteTitle = titleText;
      this.note.noteText = areaText;
      this.modifyNote();
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
