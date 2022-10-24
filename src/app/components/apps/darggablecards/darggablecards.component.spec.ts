import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarggablecardsComponent } from './darggablecards.component';

describe('DarggablecardsComponent', () => {
  let component: DarggablecardsComponent;
  let fixture: ComponentFixture<DarggablecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarggablecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarggablecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
