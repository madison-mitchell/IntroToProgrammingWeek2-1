import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormModel, SongCreateModel } from '../../models';
import { SongEvents } from '../../state/actions/songs.actions';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form!: FormGroup<FormModel<SongCreateModel>>;
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.form = new FormGroup<FormModel<SongCreateModel>>({
      title: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(100)
        ]
      }),
      artist: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      }),
      album: new FormControl<string>('', { nonNullable: true })
    })


  }

  get title() { return this.form.controls.title; }
  get artist() { return this.form.controls.artist; }

  allDone(foci: HTMLInputElement) {
    if (this.form.valid) {
      const payload: SongCreateModel = this.form.value as SongCreateModel;
      this.store.dispatch(SongEvents.newsongcreated({ payload }));

      this.form.reset();
      foci.focus();

    } else {

      console.log('invalid');
      this.title.markAsTouched();
      this.title.updateValueAndValidity();
      this.artist.markAsTouched();
      this.artist.updateValueAndValidity();
      foci.focus();
    }

  }
}


