import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

isMenuBtnHovering = false;

  constructor() { }

  ngOnInit() {
  }

  hoverMenuBtn() {
    this.isMenuBtnHovering = true;
  }
  stopHoverMenuBtn() {
    this.isMenuBtnHovering = false;
  }
}
