import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioGrumosoComponent } from './espacio-grumoso.component';

describe('EspacioGrumosoComponent', () => {
  let component: EspacioGrumosoComponent;
  let fixture: ComponentFixture<EspacioGrumosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioGrumosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioGrumosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
