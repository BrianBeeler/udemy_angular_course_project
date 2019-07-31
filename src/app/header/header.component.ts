import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  collapsed = true;
  section = 'recipe'
  @Output() sectionChanged = new EventEmitter<string>();

  navTo(newSection) {
    if (newSection !== this.section) {
      this.section = newSection;
      this.sectionChanged.emit(newSection);
    }
  }

  ngOnInit() {

  }

}
