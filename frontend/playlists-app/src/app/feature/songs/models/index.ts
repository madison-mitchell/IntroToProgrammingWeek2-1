import { FormControl } from "@angular/forms";
import { SongEntity } from "../state/reducers/song-list.reducer";

export type SongCreateModel = Omit<SongEntity, 'id'>


export type SongListItemModel = Pick<SongEntity, "id" | "title" | "album" | "artist"> & {
  isTemporary: boolean
}
export type SongsListModel = {
  loaded: boolean;
  numberOfSongs: number;
  numberWithAlbums: number;
  numberWithoutAlbums: number;
  songs: SongListItemModel[]
}


export type FormModel<Type> = {
  [Property in keyof Type]: FormControl<Type[Property]>
}
