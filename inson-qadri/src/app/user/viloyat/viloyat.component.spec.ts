import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViloyatComponent } from './viloyat.component';

describe('ViloyatComponent', () => {
  let component: ViloyatComponent;
  let fixture: ComponentFixture<ViloyatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViloyatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViloyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
