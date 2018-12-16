import { Note } from './Note';

export const NOTES1: Note[] = [
  { noteId: 1, noteTitle: "note1", noteText: "afgad", created_at: "2018-08-15", noteImportance: 2, isActual: true, labels:[{labelId:1,labelText:"label1"},{labelId:2,labelText:"label2"}]},
  { noteId: 2, noteTitle: "note2", noteText: "adfhfdhhafhdfha", created_at: "2018-10-16", noteImportance: 3, isActual: false , labels:[{labelId:1,labelText:"label1"}]},
  { noteId: 3, noteTitle: "note3", noteText: "afdhdhfh", created_at: "2018-11-23", noteImportance: 1, isActual: false, labels:[{labelId:1,labelText:"label1"}]},
  { noteId: 4, noteTitle: "note4", noteText: "adhdhdafh", created_at: "2018-11-25", noteImportance: 2, isActual: true, labels:[{labelId:1,labelText:"label1"}]}
]


