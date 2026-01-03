import { TestBed } from '@angular/core/testing';

//import { Product } from './product';
import { ProductService } from './product'; // Test the SERVICE, not the model

describe('Product', () => {
  let service: ProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
