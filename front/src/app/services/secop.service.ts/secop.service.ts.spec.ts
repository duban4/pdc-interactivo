import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecopServiceTs } from './secop.service.ts';

describe('SecopServiceTs', () => {
  let component: SecopServiceTs;
  let fixture: ComponentFixture<SecopServiceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecopServiceTs],
    }).compileComponents();

    fixture = TestBed.createComponent(SecopServiceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
