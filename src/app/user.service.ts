import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from './model/user';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: AngularFireList<any>;
  selectedUser: User = new User();
  constructor(private firebase: AngularFireDatabase ) { }

  getUsers()
  {
    return this.usersList = this.firebase.list('users');
  }

  AddUser(user: User)
  {
    this.usersList.push({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      identifier: user.identifier,
      tel: user.tel,
      birthdate: moment(user.birthdate).format('YYYY-MM-DD')
    });
  }

  updateUser(user: User)
  {
    this.usersList.update(user.$key, {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      identifier: user.identifier,
      tel: user.tel,
      birthdate: moment(user.birthdate).format('YYYY-MM-DD')
    });
  }

  deleteUser($key: string)
  {
    this.usersList.remove($key);
  }
}
