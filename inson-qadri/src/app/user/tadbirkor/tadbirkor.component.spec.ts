import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadbirkorComponent } from './tadbirkor.component';

describe('TadbirkorComponent', () => {
  let component: TadbirkorComponent;
  let fixture: ComponentFixture<TadbirkorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadbirkorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadbirkorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
