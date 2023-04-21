import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage5Component } from './about-page5.component';

describe('AboutPage5Component', () => {
  let component: AboutPage5Component;
  let fixture: ComponentFixture<AboutPage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPage5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
