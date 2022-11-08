import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'interview-angular-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [LottieComponent],
})
export class WelcomeComponent {
  options: AnimationOptions = {
    path: '/assets/avocado-fruit-exercise-animation.json',
  };
}
