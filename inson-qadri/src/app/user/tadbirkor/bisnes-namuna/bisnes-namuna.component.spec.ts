import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisnesNamunaComponent } from './bisnes-namuna.component';

describe('BisnesNamunaComponent', () => {
  let component: BisnesNamunaComponent;
  let fixture: ComponentFixture<BisnesNamunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BisnesNamunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BisnesNamunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
