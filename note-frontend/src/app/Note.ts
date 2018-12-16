import { Label } from "./Label";

export class Note {
  noteId: number;
  noteTitle: string;
  noteText: string;
  creationTime: string;
  convertedCreationTime: Date;
  noteImportance: number;
  isActual: boolean;
  labels : Label[];
}
