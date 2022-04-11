import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TashkilotArizaComponent } from './tashkilot-ariza.component';

describe('TashkilotArizaComponent', () => {
  let component: TashkilotArizaComponent;
  let fixture: ComponentFixture<TashkilotArizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TashkilotArizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TashkilotArizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
