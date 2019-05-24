import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmenComponent } from './workmen.component';

describe('WorkmenComponent', () => {
  let component: WorkmenComponent;
  let fixture: ComponentFixture<WorkmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
