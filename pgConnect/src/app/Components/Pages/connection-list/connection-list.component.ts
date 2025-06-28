import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connection-list',
  standalone: true,
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class ConnectionListComponent {
  searchQuery = '';
  activeTab = 'followers';

  followers = [
    { name: 'Alice Johnson', id: '@alice_j', icon: 'A' },
    { name: 'Bob Smith', id: '@bob_smith', icon: 'B' },
    { name: 'Charlie Lee', id: '@charlie_l', icon: 'C' },
    { name: 'Dana White', id: '@dana_w', icon: 'D' },
    { name: 'Eli Brown', id: '@eli_b', icon: 'E' },
    { name: 'Fay Turner', id: '@fay_t', icon: 'F' },
  ];

  following = [
    { name: 'Grace Hall', id: '@grace_h', icon: 'G' },
    { name: 'Harry Ford', id: '@harry_f', icon: 'H' },
    { name: 'Ian Kent', id: '@ian_k', icon: 'I' },
    { name: 'Jane Doe', id: '@jane_d', icon: 'J' },
    { name: 'Kyle Green', id: '@kyle_g', icon: 'K' },
  ];

  requests = [
    { name: 'Laura Bell', id: '@laura_b', icon: 'L' },
    { name: 'Mike Chen', id: '@mike_c', icon: 'M' },
    { name: 'Nina Park', id: '@nina_p', icon: 'N' },
  ];

  suggestions = [
    { name: 'Oscar Ray', id: '@oscar_r', icon: 'O' },
    { name: 'Paula Young', id: '@paula_y', icon: 'P' },
    { name: 'Quinn West', id: '@quinn_w', icon: 'Q' },
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  getFilteredList(list: any[]) {
    return list.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.id.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
