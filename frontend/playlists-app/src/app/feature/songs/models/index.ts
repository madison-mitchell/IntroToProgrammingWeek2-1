import { FormControl } from "@angular/forms";
import { SongEntity } from "../state/reducers/song-list.reducer";

export type SongCreateModel = Omit<SongEntity, 'id'>


export type FormModel<Type> = {
  [Property in keyof Type]: FormControl<Type[Property]>
}
