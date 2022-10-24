import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorsComponent } from './wysiwyg-editors.component';

describe('FormEditorsComponent', () => {
  let component: FormEditorsComponent;
  let fixture: ComponentFixture<FormEditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
