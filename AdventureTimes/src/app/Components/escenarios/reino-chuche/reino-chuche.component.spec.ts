import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinoChucheComponent } from './reino-chuche.component';

describe('ReinoChucheComponent', () => {
  let component: ReinoChucheComponent;
  let fixture: ComponentFixture<ReinoChucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinoChucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinoChucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
