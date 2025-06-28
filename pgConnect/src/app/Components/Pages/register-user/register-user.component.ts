import { Component } from '@angular/core';
import {AppConstants} from '../../Common/constant';
import {ButtonComponent} from '../../Common/button/button.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  imports: [ButtonComponent],
  templateUrl: './register-user.component.html',
  styleUrl: '../login/login.component.scss'
})
export class RegisterUserComponent {
   app_name = AppConstants.app_name as any;
   constructor(private router: Router) {}

   onSubmit(): void {
    alert('Sign Up!');
  }

  goToLogin(): void {
    this.router.navigate(['/']);
  }



}
