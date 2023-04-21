import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage4Component } from './about-page4.component';

describe('AboutPage4Component', () => {
  let component: AboutPage4Component;
  let fixture: ComponentFixture<AboutPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
