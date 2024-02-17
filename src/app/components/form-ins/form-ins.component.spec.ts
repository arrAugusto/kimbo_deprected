import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsComponent } from './form-ins.component';

describe('FormInsComponent', () => {
  let component: FormInsComponent;
  let fixture: ComponentFixture<FormInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
