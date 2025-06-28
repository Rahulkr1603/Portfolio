import { Component } from '@angular/core';
import {AppConstants} from '../../Common/constant';
import {ButtonComponent} from '../../Common/button/button.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
imports: [ButtonComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: '../login/login.component.scss'
})
export class ForgotPasswordComponent {
     app_name = AppConstants.app_name as any;
     constructor(private router: Router) {}

  
     onSubmit(): void {
      alert('password reset!');
    }
    goToLogin(): void {
      this.router.navigate(['/']);
    }
}
