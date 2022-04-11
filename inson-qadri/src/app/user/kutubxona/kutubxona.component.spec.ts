import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutubxonaComponent } from './kutubxona.component';

describe('KutubxonaComponent', () => {
  let component: KutubxonaComponent;
  let fixture: ComponentFixture<KutubxonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KutubxonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KutubxonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
