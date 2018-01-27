import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {AlertService} from "../services/alert.service";

@Component({
  moduleId: module.id,
  templateUrl: 'register.user.component.html'
})

export class RegisterUserComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
          this.loading = false;
        },
        error => {
          this.alertService.error(error._body);
          this.loading = false;
        });
  }
}
