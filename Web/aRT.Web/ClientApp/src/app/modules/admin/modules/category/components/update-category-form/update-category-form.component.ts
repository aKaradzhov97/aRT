// Decorators & Lifehooks
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-category-form',
  templateUrl: './update-category-form.component.html',
  styleUrls: ['./update-category-form.component.scss']
})
export class UpdateCategoryFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
