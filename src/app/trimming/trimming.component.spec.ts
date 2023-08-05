import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimmingComponent } from './trimming.component';

describe('TrimmingComponent', () => {
  let component: TrimmingComponent;
  let fixture: ComponentFixture<TrimmingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrimmingComponent]
    });
    fixture = TestBed.createComponent(TrimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
