export enum Filetype {
  Image,
  Document,
  Video,
  Audio,
  Any,
}

export type File = {
  id: number;
  type: Filetype;
  name: string;
}
