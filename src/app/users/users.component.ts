import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  serviceUser: UserService;
  displayedColumns: any[] = ['name', 'lastname', 'identifier', 'email', 'tel', 'birthdate'];

  constructor(private dialog: MatDialog, db: AngularFireDatabase, userService: UserService) {
    this.serviceUser = userService;
   }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        type: 0, // For add user
        user: {}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.serviceUser.AddUser(result);
    });
  }

  updateUser(x: any) {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        type: 1, // For update user
        user: x
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.delete) {
        this.serviceUser.deleteUser(result.key);
      } else {
        this.serviceUser.updateUser(result);
      }
    });
  }

  ngOnInit() {
    return this.serviceUser.getUsers()
      .snapshotChanges().subscribe(item => {
        this.users = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.users.push(x as User);
        });
      });
  }
}
