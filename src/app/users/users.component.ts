import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  user: any = {};
  users: any[] = [
    {
      id: '01',
      name: 'Andrés',
      lastname: 'Pino',
      identifier: '1233',
      email: 'aeec@gmail',
      tel: '2313',
      birthdate: '12/01/1998'
    }
  ];
  displayedColumns: any[] = ['id', 'name', 'lastname', 'identifier', 'email', 'tel', 'birthdate'];

  constructor(private dialog: MatDialog) { }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
      data: {name: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user = result;
    });
  }
}
