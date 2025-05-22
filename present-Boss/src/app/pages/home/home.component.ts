import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sections = [
    {
      title: 'Face Recognition + GPS Attendance',
      description: 'No more guesswork. No more fake entries. Present Boss uses AI-driven face ID...',
      image: 'images/Mask group.png',
      badgeImage: 'images/Group 973.png'
    },
    {
      title: 'Commute Made Clear',
      description: 'Forget TA bill drama. Present Boss handles routes, time, distance...',
      image: 'images/Mask group (1).png',
      badgeImage: 'images/Group 972.png'
    },
    {
      title: 'Real-Time Dashboards & Insights',
      description: 'See your workforce live in action. Generate smart reports...',
      image: 'images/Mask group (2).png',
      badgeImage: 'images/Group 974.png'
    },
    {
      title: 'Safe. Secure. Scalable.',
      description: 'From startups to enterprises, Present Boss grows with you...',
      image: 'images/Mask group (3).png',
      badgeImage: ''
    }
  ];

}
