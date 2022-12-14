import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerpasoComponent } from './primerpaso.component';

describe('PrimerpasoComponent', () => {
  let component: PrimerpasoComponent;
  let fixture: ComponentFixture<PrimerpasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerpasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerpasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
