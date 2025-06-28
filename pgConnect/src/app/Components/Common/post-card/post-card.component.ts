import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-post-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() posts: any;



}
