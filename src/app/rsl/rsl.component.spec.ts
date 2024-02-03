import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RslComponent } from './rsl.component';

describe('RslComponent', () => {
  let component: RslComponent;
  let fixture: ComponentFixture<RslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RslComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
