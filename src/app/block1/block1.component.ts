import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../config'

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./block1.component.css']
})

export class Block1Component implements OnInit {
  @Input()
  configs: Config[];
  expanded1: boolean = false;
  expanded2: boolean = false;
  expanded3: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
