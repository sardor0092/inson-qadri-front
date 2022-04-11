import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaminotchiComponent } from './taminotchi.component';

describe('TaminotchiComponent', () => {
  let component: TaminotchiComponent;
  let fixture: ComponentFixture<TaminotchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaminotchiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaminotchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
