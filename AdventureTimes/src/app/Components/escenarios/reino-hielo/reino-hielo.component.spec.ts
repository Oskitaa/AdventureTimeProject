import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinoHieloComponent } from './reino-hielo.component';

describe('ReinoHieloComponent', () => {
  let component: ReinoHieloComponent;
  let fixture: ComponentFixture<ReinoHieloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinoHieloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinoHieloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
