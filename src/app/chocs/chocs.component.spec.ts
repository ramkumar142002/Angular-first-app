import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocsComponent } from './chocs.component';

describe('ChocsComponent', () => {
  let component: ChocsComponent;
  let fixture: ComponentFixture<ChocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
