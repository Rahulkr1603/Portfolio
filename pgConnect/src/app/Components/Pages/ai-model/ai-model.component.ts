import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../Common/button/button.component';

@Component({
  selector: 'app-ai-model',
  templateUrl: './ai-model.component.html',
  styleUrls: ['./ai-model.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
})
export class AiModelComponent {
  userMessage: string = '';
  chatHistory: { user: string; ai: string }[] = [];

  trendingPosts = [
    { title: '5 Ways AI is Changing Design', user: '@user123', likes: 120 },
    { title: 'Prompt Engineering Tips', user: '@ai_guru', likes: 95 },
    { title: 'Best AI Tools for 2025', user: '@tech_savvy', likes: 78 },
    { title: '5 Ways AI is Changing Design', user: '@user123', likes: 120 },
    { title: 'Prompt Engineering Tips', user: '@ai_guru', likes: 95 },
  ];

  sendMessage() {
    if (!this.userMessage.trim()) return;

    const hardcodedResponse =
      'This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.This is a hardcoded AI response for testing.';
    this.chatHistory.push({
      user: this.userMessage,
      ai: hardcodedResponse,
    });

    this.userMessage = '';
  }

  viewPost(post: any) {
    alert(`Viewing post: ${post.title}`);
  }
}
