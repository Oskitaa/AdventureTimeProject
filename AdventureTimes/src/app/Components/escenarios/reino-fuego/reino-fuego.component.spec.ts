import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinoFuegoComponent } from './reino-fuego.component';

describe('ReinoFuegoComponent', () => {
  let component: ReinoFuegoComponent;
  let fixture: ComponentFixture<ReinoFuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinoFuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinoFuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
