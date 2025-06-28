import { Component } from '@angular/core';
import {PostUploadComponent} from '../../Common/post-upload/post-upload.component'
import {PostCardComponent} from '../../Common/post-card/post-card.component'
@Component({
  selector: 'app-homepage',
  imports: [PostUploadComponent,PostCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
     post = [
    {
      userIcon: 'https://i.pravatar.cc/40?img=1',
      userName: 'John Doe',
      userId: '@johnny',
      time: '2 hours ago',
      tagLine: 'Funny Joke',
      tagColor: 'orange',
      text: 'Why don’t scientists trust atoms? Because they make up everything!',
      imageUrl: '../../../../assets/Icons/fbpost.jpeg',
    },
    {
      userIcon: 'https://i.pravatar.cc/40?img=2',
      userName: 'Alice Smith',
      userId: '@alice123',
      time: '1 day ago',
      tagLine: 'New Song Drop',
      tagColor: 'purple',
      text: 'Check out this amazing track!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    }
  ] 


}
