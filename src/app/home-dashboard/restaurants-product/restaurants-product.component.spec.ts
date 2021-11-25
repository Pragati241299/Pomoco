import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsProductComponent } from './restaurants-product.component';

describe('RestaurantsProductComponent', () => {
  let component: RestaurantsProductComponent;
  let fixture: ComponentFixture<RestaurantsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
