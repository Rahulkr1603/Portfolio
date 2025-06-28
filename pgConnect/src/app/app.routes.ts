// app.routes.ts or wherever your Routes are defined
import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../app/Components/Pages/forgot-password/forgot-password.component';
import { RegisterUserComponent } from './Components/Pages/register-user/register-user.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { TopBarComponent } from './Components/Pages/top-bar/top-bar.component';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { AiModelComponent } from './Components/Pages/ai-model/ai-model.component';
import { CommunityComponent } from './Components/Pages/community/community.component';
import { ConnectionListComponent } from './Components/Pages/connection-list/connection-list.component';
import { MessageCardComponent } from './Components/Pages/message-card/message-card.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisterUserComponent },
  { path: 'reset', component: ForgotPasswordComponent },

  {
    path: 'dashboard',
    component: TopBarComponent,
    children: [
      { path: 'posts', component: HomepageComponent },
      { path: '', component: HomepageComponent },
      { path: 'connections', component: ConnectionListComponent },
      { path: 'messages', component: MessageCardComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'ai', component: AiModelComponent },
    ]
  },
];
