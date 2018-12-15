import { NoteGroup } from "./NoteGroup";

export class User {
  //userId: number;
  username: string;
  password: string;
  emailAddress: string;
  enabled: boolean;
  role: string;
  noteGroups: NoteGroup[];
}
