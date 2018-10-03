import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  user: any = {};
  usersRef: AngularFireList<User[]>;
  users: Observable<any[]>;
  displayedColumns: any[] = ['name', 'lastname', 'identifier', 'email', 'tel', 'birthdate'];

  constructor(private dialog: MatDialog, db: AngularFireDatabase) {
    this.usersRef = db.list('/users');
    this.users = this.usersRef.valueChanges();
   }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        type: 0, // For add user
        user: {}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.usersRef.push(result);
    });
  }

  updateUser(x: any) {
    console.log(x)
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        type: 1, // For update user
        user: x
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.usersRef.push(result);
    });
  }
}
