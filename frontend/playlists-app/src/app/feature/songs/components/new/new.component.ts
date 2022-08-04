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


  allDone() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log("The form is invalid")
    }

  }
}


