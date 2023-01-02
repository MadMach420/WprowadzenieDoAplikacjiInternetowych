import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: FormControl = new FormControl('', Validators.required);
    password: FormControl = new FormControl('', Validators.required);

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    login(): void {
        if (this.email.valid && this.password.valid) {
            this.authService.login(this.email.value, this.password.value).then(r => {
                this.router.navigate(['']);
            });
        }
    }
}
