import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetial } from './product-detial';

describe('ProductDetial', () => {
  let component: ProductDetial;
  let fixture: ComponentFixture<ProductDetial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
