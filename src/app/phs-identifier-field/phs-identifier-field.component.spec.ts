import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhsIdentifierFieldComponent } from './phs-identifier-field.component';

describe('PhsIdentifierFieldComponent', () => {
  let component: PhsIdentifierFieldComponent;
  let fixture: ComponentFixture<PhsIdentifierFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhsIdentifierFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhsIdentifierFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
