import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  titleValue: string;
  textValue: string;

  constructor() { }

  ngOnInit() {
  }

  saveNewNote(): void {
    //httpvel új jegyzet létrehozás
    console.log("httpvel új jegyzet létrehozás");
  }

}
