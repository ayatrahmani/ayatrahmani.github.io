import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('1000ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('1000ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class AppComponent {
  title = 'ayatrahman';
  current = 0;
  img_list = [
    'profile-img.jpg',
    'ayat1.jpg',
    'ayat2.jpg',
  ];
  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }
}
