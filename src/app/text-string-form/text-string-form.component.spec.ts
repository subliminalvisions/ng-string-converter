import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStringFormComponent } from './text-string-form.component';

describe('TextStringFormComponent', () => {
  let component: TextStringFormComponent;
  let fixture: ComponentFixture<TextStringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextStringFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
