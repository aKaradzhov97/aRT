// Decorators and Lifehooks
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();
  @Input() categories: any[] = [];
  constructor() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
