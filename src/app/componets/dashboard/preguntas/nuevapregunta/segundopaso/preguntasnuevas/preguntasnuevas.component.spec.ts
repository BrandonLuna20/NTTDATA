import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasnuevasComponent } from './preguntasnuevas.component';

describe('PreguntasnuevasComponent', () => {
  let component: PreguntasnuevasComponent;
  let fixture: ComponentFixture<PreguntasnuevasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasnuevasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasnuevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
