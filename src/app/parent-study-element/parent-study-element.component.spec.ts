import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStudyElementComponent } from './parent-study-element.component';

describe('ParentStudyElementComponent', () => {
  let component: ParentStudyElementComponent;
  let fixture: ComponentFixture<ParentStudyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentStudyElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentStudyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
