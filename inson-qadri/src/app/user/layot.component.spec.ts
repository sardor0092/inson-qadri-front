import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayotComponent } from './layot.component';

describe('LayotComponent', () => {
  let component: LayotComponent;
  let fixture: ComponentFixture<LayotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
