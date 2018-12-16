import { User } from './User';

export const USERS: User[] = [
  {
     username: "user1", password: "password1", emailAddress: "email1@blahblah.hu", enabled: true, role: "user", noteGroups: [
      {
         groupId: 1, noteGroupName: 'group1', notes: [
           { noteId: 1, noteTitle: "note1", noteText: "afgad", created_at: "2018-08-15", noteImportance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }, { labelId: 2, labelText: "label2" }] },
           { noteId: 2, noteTitle: "note2", noteText: "adfhfdhhafhdfha", created_at: "2018-10-16", noteImportance: 3, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
           { noteId: 3, noteTitle: "note3", noteText: "afdhdhfh", created_at: "2018-11-23", noteImportance: 1, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
           { noteId: 4, noteTitle: "note4", noteText: "adhdhdafh", created_at: "2018-11-25", noteImportance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }] }
        ]
      },
      {
        groupId: 2, noteGroupName: 'group2', notes: [
          { noteId: 1, noteTitle: "note11", noteText: "gjllglhlhgjlgh", created_at: "2018-09-16", noteImportance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }] },
          { noteId: 2, noteTitle: "note22", noteText: "ahljgllhjlgh", created_at: "2018-11-08", noteImportance: 3, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
          { noteId: 3, noteTitle: "note33", noteText: "zuezjz", created_at: "2018-10-11", noteImportance: 1, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] },
          { noteId: 4, noteTitle: "note44", noteText: "nbchgk,km", created_at: "2018-11-12", noteImportance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }] }
        ]
      },
       { groupId: 3, noteGroupName: 'group3', notes: [] },
       { groupId: 4, noteGroupName: 'group4', notes: [] },
       { groupId: 5, noteGroupName: 'group5', notes: [] },
       { groupId: 6, noteGroupName: 'group6', notes: [] },
       { groupId: 7, noteGroupName: 'group7', notes: [] }
    ]
  },
  {
    username: "user2", password: "password2", emailAddress: "email2@blahblah.hu", enabled: true,  role: "user", noteGroups: [
      {
        groupId: 1, noteGroupName: "group1", notes: [
          { noteId: 1, noteTitle: "note1", noteText: "blablablablalba", created_at: "2018-08-15", noteImportance: 2, isActual: true, labels: [{ labelId: 1, labelText: "label1" }, { labelId: 2, labelText: "label2" }] },
          { noteId: 2, noteTitle: "note2", noteText: "adfhfdhhafhdfha", created_at: "2018-10-16", noteImportance: 3, isActual: false, labels: [{ labelId: 1, labelText: "label1" }] }
        ]
      }
    ]
  },
  { username: "user3", password: "password3", emailAddress: "email3@blahblah.hu", enabled: true, role: "user", noteGroups: [] }
];

