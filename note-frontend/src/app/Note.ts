import { Label } from "./Label";

export class Note {
  noteId: number;
  noteTitle: string;
  noteText: string;
  created_at: string;
  convertedCreated_at?: Date;
  noteImportance: number;
  isActual: boolean;
  labels : Label[];
}
