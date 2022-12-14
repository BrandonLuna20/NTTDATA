import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundopasoComponent } from './segundopaso.component';

describe('SegundopasoComponent', () => {
  let component: SegundopasoComponent;
  let fixture: ComponentFixture<SegundopasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundopasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundopasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
