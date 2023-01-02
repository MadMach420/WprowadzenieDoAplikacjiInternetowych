import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    persistence: FormControl = new FormControl('');

    constructor(public authService: AuthenticationService) {
    }

    changePersistence() {
        this.authService.setPersistence(this.persistence.value);
    }
}
