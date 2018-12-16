import { NoteGroup } from './NoteGroup';

export const GROUPS: NoteGroup[] = [
  {
    groupId: 1, noteGroupName: 'group1', notes: [
      { noteId: 1, noteTitle: "note1", noteText: "afgad", creationTime: new Date("2018-08-15"), importance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }, { labelId: 2, labelText: "label2" }] },
      { noteId: 2, noteTitle: "note2", noteText: "adfhfdhhafhdfha", creationTime: new Date("2018-10-16"), importance: 3, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
      { noteId: 3, noteTitle: "note3", noteText: "afdhdhfh", creationTime: new Date("2018-11-23"), importance: 1, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
      { noteId: 4, noteTitle: "note4", noteText: "adhdhdafh", creationTime: new Date("2018-11-25"), importance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }] }
    ]
  },
  {
    groupId: 2, noteGroupName: 'group2', notes: [
      { noteId: 1, noteTitle: "note11", noteText: "gjllglhlhgjlgh", creationTime: new Date("2018-09-16"), importance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }] },
      { noteId: 2, noteTitle: "note22", noteText: "ahljgllhjlgh", creationTime: new Date("2018-11-08"), importance: 3, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
      { noteId: 3, noteTitle: "note33", noteText: "zuezjz", creationTime: new Date("2018-10-11"), importance: 1, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
      { noteId: 4, noteTitle: "note44", noteText: "nbchgk,km", creationTime: new Date("2018-11-12"), importance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }] }
    ]
  },
  { groupId: 3, noteGroupName: 'group3', notes: [] },
  { groupId: 4, noteGroupName: 'group4', notes: [] },
  { groupId: 5, noteGroupName: 'group5', notes: [] },
  { groupId: 6, noteGroupName: 'group6', notes: [] },
  { groupId: 7, noteGroupName: 'group7', notes: [] }
];
