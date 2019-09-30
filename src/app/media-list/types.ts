import { Filetype } from '../services/FilesService';
import { Filter } from '../filter-by/types';

export const defaultFilter: Filter = {
  type: Filetype.Any,
  name: 'All media'
};
