import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HokimYordamComponent } from './hokim-yordam.component';

describe('HokimYordamComponent', () => {
  let component: HokimYordamComponent;
  let fixture: ComponentFixture<HokimYordamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HokimYordamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HokimYordamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
