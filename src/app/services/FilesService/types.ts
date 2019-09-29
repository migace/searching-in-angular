export enum Filetype {
  Image,
  Document,
  Video,
  Audio,
}

export type File = {
  id: number;
  type: Filetype;
  name: string;
}
