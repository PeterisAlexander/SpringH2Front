import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPersonComponent } from './generator-person.component';

describe('GeneratorPersonComponent', () => {
  let component: GeneratorPersonComponent;
  let fixture: ComponentFixture<GeneratorPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
