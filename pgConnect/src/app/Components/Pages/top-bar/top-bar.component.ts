// top-bar.component.ts
import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppConstants } from '../../Common/constant';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  app_name = AppConstants.app_name;
  selectedTab: any = 'posts';

  constructor(private router: Router) {
    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          const currentUrl = this.router.url;
        this.selectedTab =currentUrl.split('/').pop()
        }
      });
  }

  menuClick(menuName: string) {
    this.selectedTab = menuName;
    this.router.navigate(['/dashboard', menuName]);
  }
 
  
}
