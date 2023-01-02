import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    email: FormControl = new FormControl('', [Validators.required, Validators.email]);
    password: FormControl = new FormControl('', [
        Validators.required, Validators.minLength(6)
    ]);
    username: FormControl = new FormControl('', Validators.required);
    role: FormControl = new FormControl('', Validators.required);

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    register(): void {
        if (this.email.valid && this.password.valid && this.username.valid && this.role.valid) {
            this.authService.register(this.email.value, this.password.value, this.username.value, this.role.value).then(r => {
                this.router.navigate(['']);
            });
        }
    }
}
