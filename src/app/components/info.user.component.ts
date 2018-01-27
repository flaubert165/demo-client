import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  templateUrl: 'info.user.component.html'
})

export class InfoUserComponent implements OnInit {
   model: any = {};
   loading = false;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private alertService: AlertService,
                private router: Router,
                ) {}

    ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      this.model = this.route.params.switchMap((params: ParamMap) => this.userService.getById(params.get('id')));
      console.log(this.model.name);
    }

    updateUser(): void {
      this.userService.update(this.model)
        .subscribe(
          data => {
            this.alertService.success('Update successful', true);
            this.router.navigate(['/users']);
            this.loading = false;
          },
          error => {
            this.alertService.error(error._body);
            this.loading = false;
          });
    }
}
