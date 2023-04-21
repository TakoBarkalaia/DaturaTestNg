import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage1Component } from './about-page1.component';

describe('AboutPage1Component', () => {
  let component: AboutPage1Component;
  let fixture: ComponentFixture<AboutPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
