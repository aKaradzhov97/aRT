// Decorators and Lifehooks
import {Component, EventEmitter, Input, Output} from '@angular/core';

// Services
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();
  @Input() categories: any[] = [];
  isSearchInputMaterial = false;

  constructor(private authService: AuthService) {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onSubmit(f) {
    console.log(f);
  }
}
