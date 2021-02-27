import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipestudyComponent } from './pipestudy.component';

describe('PipestudyComponent', () => {
  let component: PipestudyComponent;
  let fixture: ComponentFixture<PipestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
