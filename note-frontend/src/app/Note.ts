import { Label } from "./Label";

export class Note {
  noteId: number;
  noteTitle: string;
  noteText: string;
  created_at: string;
  noteImportance: number;
  isActual: boolean;
  labels : Label[];
}
