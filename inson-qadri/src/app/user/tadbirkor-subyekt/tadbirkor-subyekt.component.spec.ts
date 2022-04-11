import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadbirkorSubyektComponent } from './tadbirkor-subyekt.component';

describe('TadbirkorSubyektComponent', () => {
  let component: TadbirkorSubyektComponent;
  let fixture: ComponentFixture<TadbirkorSubyektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadbirkorSubyektComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadbirkorSubyektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
