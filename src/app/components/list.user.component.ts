import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'list.user.component.html'
})

export class ListUserComponent implements OnInit {
  currentUser: User;
  users: any[] = [];
  user: any;

  constructor(private userService: UserService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users;});
  }


  delete(id: string) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
  }
}
