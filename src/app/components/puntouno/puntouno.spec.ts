import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puntouno } from './puntouno';

describe('Puntouno', () => {
  let component: Puntouno;
  let fixture: ComponentFixture<Puntouno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puntouno],
    }).compileComponents();

    fixture = TestBed.createComponent(Puntouno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
