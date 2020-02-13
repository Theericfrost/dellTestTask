import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component implements OnInit {
  editModal: boolean = false;

  @Input() configs: Config[];
  constructor() { }

  ngOnInit() {
  }

}
