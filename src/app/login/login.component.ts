import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Utility } from '../shared/utility';
import { PostHelperService } from '../shared/post-helper.service';
import { UserObject } from '../shared/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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

      this.postService.getUserDetails()
        .subscribe(
          (users: UserObject[]) => {
            users.forEach(user => {
              if (this.validateUser(user)) {
                this.route.navigate(['/posts']);
                return;
              }
            });
          }
        );
    }
  }

  validateUser(user: UserObject): boolean {
    return (user.userId.toString() === this.userIDControl.value && user.id.toString() === this.idControl.value);
  }
}
