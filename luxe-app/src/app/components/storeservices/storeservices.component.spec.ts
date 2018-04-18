import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreservicesComponent } from './storeservices.component';

describe('StoreservicesComponent', () => {
  let component: StoreservicesComponent;
  let fixture: ComponentFixture<StoreservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
