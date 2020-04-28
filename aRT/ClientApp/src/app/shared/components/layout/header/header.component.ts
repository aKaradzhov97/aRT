// Decorators and Lifehooks
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
