import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArizaComponent } from './ariza.component';

describe('ArizaComponent', () => {
  let component: ArizaComponent;
  let fixture: ComponentFixture<ArizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
