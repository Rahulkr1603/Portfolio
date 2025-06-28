import { Component } from '@angular/core';
import {AppConstants} from '../../Common/constant';
import {ButtonComponent} from '../../Common/button/button.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   app_name = AppConstants.app_name as any;
   constructor(private router: Router) {}
   onSubmit(): void {
   this.router.navigate(['/dashboard/posts']);
  }
  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }
  goToforgot(): void {
    this.router.navigate(['/reset']);
  }

  fun (){
    console.log('yes');
    
    confirm('ye or no')
  }


}
