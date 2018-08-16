import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMeComponent } from './toggle-me.component';

describe('ToggleMeComponent', () => {
  let component: ToggleMeComponent;
  let fixture: ComponentFixture<ToggleMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
