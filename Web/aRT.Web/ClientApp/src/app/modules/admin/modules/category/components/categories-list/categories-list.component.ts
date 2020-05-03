// Decorators & Lifehooks
import {Component, Input, OnInit} from '@angular/core';

// Models
import {Category} from '../../../../../../shared/models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() categories: Category[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
