import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayer0Component } from './app-layer0.component';

describe('AppLayer0Component', () => {
  let component: AppLayer0Component;
  let fixture: ComponentFixture<AppLayer0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayer0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLayer0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
