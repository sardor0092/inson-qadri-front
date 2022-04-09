import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TashkilotComponent } from './tashkilot.component';

describe('TashkilotComponent', () => {
  let component: TashkilotComponent;
  let fixture: ComponentFixture<TashkilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TashkilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TashkilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
