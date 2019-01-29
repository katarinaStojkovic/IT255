import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledJelaComponent } from './pregled-jela.component';

describe('PregledJelaComponent', () => {
  let component: PregledJelaComponent;
  let fixture: ComponentFixture<PregledJelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledJelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledJelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});