import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletmapsComponent } from './leafletmaps.component';

describe('LeafletmapsComponent', () => {
  let component: LeafletmapsComponent;
  let fixture: ComponentFixture<LeafletmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletmapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
