import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalComponent } from './removal.component';

describe('RemovalComponent', () => {
  let component: RemovalComponent;
  let fixture: ComponentFixture<RemovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovalComponent]
    });
    fixture = TestBed.createComponent(RemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
