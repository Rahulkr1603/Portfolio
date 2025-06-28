import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../Common/button/button.component';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
})
export class MessageCardComponent {
  friends = [
    { name: 'Alice Morgan', lastMessage: 'Hey, what’s up?', activeTime: '2m' },
    {
      name: 'Bob Carter',
      lastMessage: 'Let’s meet tomorrow.',
      activeTime: '5m',
    },
    {
      name: 'Clara Evans',
      lastMessage: 'That looks great!',
      activeTime: '10m',
    },
  ];

  selectedFriend: any = this.friends[0];

  messages = [
    { text: 'Hey! How are you?', sender: 'friend' },
    { text: 'I’m good, thanks! What about you?', sender: 'user' },
  ];

  newMessage: string = '';

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  selectFriend(friend: any) {
    this.selectedFriend = friend;
    this.messages = [
      { text: 'Hello!', sender: 'friend' },
      { text: 'Hi, how’s everything going?', sender: 'user' },
    ];
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({ text: this.newMessage, sender: 'user' });

    setTimeout(() => {
      this.messages.push({
        text: 'Thanks for your message! I’ll get back to you soon.',
        sender: 'friend',
      });
    }, 500);

    this.newMessage = '';
  }
}
