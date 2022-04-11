import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenyuComponent } from './menyu.component';

describe('MenyuComponent', () => {
  let component: MenyuComponent;
  let fixture: ComponentFixture<MenyuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenyuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
