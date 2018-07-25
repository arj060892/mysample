import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utility } from '../shared/utility';

import { UserObject } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { PostHelperService } from '../shared/services/post-helper.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isServiceCalled = false;
  isUserInValid = false;
  constructor(
    private fb: FormBuilder,
    private postService: PostHelperService,
    private route: Router
  ) {
    this.loginForm = fb.group({
      userID: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  get userIDControl(): FormControl {
    return this.loginForm.controls['userID'] as FormControl;
  }
  get idControl(): FormControl {
    return this.loginForm.controls['id'] as FormControl;
  }
  onLogin() {
    Utility.onValidateForm(this.loginForm);
    if (this.loginForm.valid) {
      this.isServiceCalled = true;
      this.postService.getUserDetails()
        .subscribe(
          (users: UserObject[]) => {
            const verifiedUser = users.filter(user => {
              return this.validateUser(user);
            });

            if (verifiedUser.length > 0) {
              this.route.navigate(['/posts']);
            } else {
              this.isUserInValid = true;
            }

          },
          (error) => console.log(error),
          () => { this.isServiceCalled = false; }
        );
    }
  }

  validateUser(user: UserObject): boolean {
    return (user.userId.toString() === this.userIDControl.value && user.id.toString() === this.idControl.value);
  }
}
