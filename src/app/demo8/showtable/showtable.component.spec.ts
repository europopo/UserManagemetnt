import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtableComponent } from './showtable.component';

describe('ShowtableComponent', () => {
  let component: ShowtableComponent;
  let fixture: ComponentFixture<ShowtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
