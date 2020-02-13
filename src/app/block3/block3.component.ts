import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-block3',
  templateUrl: './block3.component.html',
  styleUrls: ['./block3.component.css']
})
export class Block3Component implements OnInit {
  @Input()
  configs: Config[];
  constructor() { }

  ngOnInit() {
  }

}
