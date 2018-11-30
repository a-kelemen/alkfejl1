import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../Note';


@Component({
  selector: 'app-note-browser',
  templateUrl: './note-browser.component.html',
  styleUrls: ['./note-browser.component.css']
})
export class NoteBrowserComponent implements OnInit {


  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }



}
