import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() color = 'bug';
  @Input() value = 0;
  @Input() height = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
