import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletatiPageComponent } from './completati-page.component';

describe('CompletatiPageComponent', () => {
  let component: CompletatiPageComponent;
  let fixture: ComponentFixture<CompletatiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletatiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletatiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
