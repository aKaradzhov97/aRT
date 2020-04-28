import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductItemComponent } from './details-product-item.component';

describe('DetailsProductItemComponent', () => {
  let component: DetailsProductItemComponent;
  let fixture: ComponentFixture<DetailsProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
