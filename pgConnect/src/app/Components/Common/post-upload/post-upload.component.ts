import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../Common/button/button.component';

@Component({
  selector: 'app-post-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './post-upload.component.html',
  styleUrl: './post-upload.component.scss',
})
export class PostUploadComponent {
  postText: string = '';
  selectedImage: File | null = null;
  selectedVideo: File | null = null;

  onFileSelected(event: any, type: 'image' | 'video') {
    const file = event.target.files[0];
    if (type === 'image') this.selectedImage = file;
    if (type === 'video') this.selectedVideo = file;
  }

  post() {
    console.log('Posting:', {
      text: this.postText,
      image: this.selectedImage,
      video: this.selectedVideo,
    });
  }
}
