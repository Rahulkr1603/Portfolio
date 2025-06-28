import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../Common/button/button.component';

@Component({
  selector: 'app-community',
  standalone: true,
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
  imports: [FormsModule, CommonModule, ButtonComponent],
})
export class CommunityComponent {
  currentUser = 'You';

  newQuestion = {
    title: '',
    description: '',
    tags: '',
    visibility: 'public',
  };

  selectedQuestion: any = null;
  expandedQuestionIndex: number | null = null;
  currentTab: 'recent' | 'my' | 'all' = 'recent';

  recentQuestions = [
    {
      title: 'How does Angular Change Detection work?',
      description:
        'I want to understand how Angular tracks changes in the DOM.',
      user: 'John Doe',
      time: '2h ago',
      tags: ['angular', 'change-detection'],
      answers: [
        {
          user: 'john Adm',
          text: 'angular is framworks',
          time: '5 min ago',
          likes: '21',
          dislikes: '3',
        },
      ],
    },
    {
      title: 'Best practices for async pipe in Angular?',
      description: 'Is it okay to use async pipe multiple times in a template?',
      user: 'Mary Jane',
      time: '3h ago',
      tags: ['angular', 'rxjs'],
      answers: [],
    },
  ];

  postQuestion() {
    if (!this.newQuestion.title.trim() || !this.newQuestion.description.trim())
      return;

    const newQ = {
      title: this.newQuestion.title,
      description: this.newQuestion.description,
      user: this.currentUser,
      time: 'Just now',
      tags: this.newQuestion.tags
        .split(',')
        .map((tag) => tag.trim().replace(/^#/, '')),
      answers: [],
    };

    this.recentQuestions.unshift(newQ);
    this.newQuestion = {
      title: '',
      description: '',
      tags: '',
      visibility: 'public',
    };
  }

  getQuestionsForTab(): any[] {
    if (this.currentTab === 'my') {
      return this.recentQuestions.filter((q) => q.user === this.currentUser);
    } else if (this.currentTab === 'all') {
      return this.recentQuestions;
    } else {
      return this.recentQuestions.slice(0, 5);
    }
  }

  toggleQuestion(index: number) {
    this.expandedQuestionIndex =
      this.expandedQuestionIndex === index ? null : index;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  postAnswer(question: any, text: string) {
    if (!text?.trim()) return;
    question.answers.push({
      user: this.currentUser,
      text,
      time: 'Just now',
      likes: 0,
      dislikes: 0,
    });
  }
}
