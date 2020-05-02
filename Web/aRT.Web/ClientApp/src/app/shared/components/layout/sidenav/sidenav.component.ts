// Decorators & Lifehooks
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Models
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  @Input() categories: Category[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
