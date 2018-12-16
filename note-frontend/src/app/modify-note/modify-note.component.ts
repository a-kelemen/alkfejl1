import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Label } from '../Label';
import { Note } from '../Note';

@Component({
  selector: 'app-modify-note',
  templateUrl: './modify-note.component.html',
  styleUrls: ['./modify-note.component.css']
})
export class ModifyNoteComponent implements OnInit {
  @Input() note: Note;
  allLabels: Label[];
  noteLabels: Label[];
  newLabels: Array<Label> = [];

  constructor(
    private noteService: NoteService
  ) { }

  async ngOnInit() {
    this.allLabels = await this.noteService.getAllLabels();
    this.noteLabels = this.note.labels;
  }

  isSelectedLabel(labelNum: number): boolean{
    var result: boolean = false;
    this.noteLabels.forEach(item => {
      if (item.labelId == labelNum){
        result = true;
        }
    });
    return result
  }

  changed(event){
    //console.log("changed:", event.target.id);
    this.newLabels = [];
    this.allLabels.forEach(item => {
      var checked = ((document.getElementById(String(item.labelId)) as HTMLInputElement).checked);
      //console.log(item.labelId +": " + checked);
      if (checked){
        this.newLabels.push(item);
      }
     
    });
    console.log("selected labels:");
    for(let i=0; i<this.newLabels.length; i++){
      console.log(this.newLabels[i].labelId);
  }
    
  }
    

}
