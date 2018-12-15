import { Note } from './Note';

export const NOTES1: Note[] = [
  { noteId: 1, noteTitle: "note1", noteText: "afgad", creationTime: new Date("2018-08-15"), importance: 2, isActual: true, labels:[{labelId:1,labelText:"label1"},{labelId:2,labelText:"label2"}]},
  { noteId: 2, noteTitle: "note2", noteText: "adfhfdhhafhdfha", creationTime: new Date("2018-10-16"), importance: 3, isActual: false , labels:[{labelId:1,labelText:"label1"}]},
  { noteId: 3, noteTitle: "note3", noteText: "afdhdhfh", creationTime: new Date("2018-11-23"), importance: 1, isActual: false, labels:[{labelId:1,labelText:"label1"}]},
  { noteId: 4, noteTitle: "note4", noteText: "adhdhdafh", creationTime: new Date("2018-11-25"), importance: 2, isActual: true, labels:[{labelId:1,labelText:"label1"}]}
]


