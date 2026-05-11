import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntotres } from './puntotres';

describe('Puntotres', () => {
  let component: Puntotres;
  let fixture: ComponentFixture<Puntotres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puntotres],
    }).compileComponents();

    fixture = TestBed.createComponent(Puntotres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
