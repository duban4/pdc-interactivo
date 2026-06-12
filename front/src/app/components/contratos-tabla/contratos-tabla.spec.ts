import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosTabla } from './contratos-tabla';

describe('ContratosTabla', () => {
  let component: ContratosTabla;
  let fixture: ComponentFixture<ContratosTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosTabla],
    }).compileComponents();

    fixture = TestBed.createComponent(ContratosTabla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
