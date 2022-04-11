import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyadalilinkComponent } from './foyadalilink.component';

describe('FoyadalilinkComponent', () => {
  let component: FoyadalilinkComponent;
  let fixture: ComponentFixture<FoyadalilinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyadalilinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoyadalilinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
