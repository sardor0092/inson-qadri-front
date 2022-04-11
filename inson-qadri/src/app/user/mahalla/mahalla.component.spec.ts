import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahallaComponent } from './mahalla.component';

describe('MahallaComponent', () => {
  let component: MahallaComponent;
  let fixture: ComponentFixture<MahallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
