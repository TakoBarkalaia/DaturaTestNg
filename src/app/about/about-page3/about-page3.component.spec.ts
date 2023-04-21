import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage3Component } from './about-page3.component';

describe('AboutPage3Component', () => {
  let component: AboutPage3Component;
  let fixture: ComponentFixture<AboutPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
