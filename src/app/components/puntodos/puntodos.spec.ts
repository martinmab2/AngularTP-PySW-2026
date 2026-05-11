import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntodos } from './puntodos';

describe('Puntodos', () => {
  let component: Puntodos;
  let fixture: ComponentFixture<Puntodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puntodos],
    }).compileComponents();

    fixture = TestBed.createComponent(Puntodos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
