import { Filetype } from "../services/FilesService";

export type Filter = {
  type: Filetype;
  name: string;
}
