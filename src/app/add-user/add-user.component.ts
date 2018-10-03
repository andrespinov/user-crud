import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../model/user';
import * as moment from 'moment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
    form: FormGroup;
    description:string;
    user: any = {};

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
  }

  save() {
    let newUser = new User();
    newUser.name = this.user.name;
    newUser.lastname = this.user.lastname;
    newUser.email = this.user.email;
    newUser.identifier = this.user.identifier;
    newUser.tel = this.user.tel;
    newUser.birthdate = moment(this.user.birthdate).format('YYYY-MM-DD');
    this.dialogRef.close(newUser);
  }

  close() {
    this.dialogRef.close();
  }

}
