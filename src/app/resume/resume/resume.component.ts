import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '..//../animations/animations';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    slideInAnimation
   ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
