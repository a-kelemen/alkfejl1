import { Label } from "./Label";

export class Note {
  noteId: number;
  noteTitle: string;
  noteText: string;
  creationTime: Date;
  importance: number;
  isActual: boolean;
  labels : Label[];
}
