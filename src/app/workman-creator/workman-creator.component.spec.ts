import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmanCreatorComponent } from './workman-creator.component';

describe('WorkmanCreatorComponent', () => {
  let component: WorkmanCreatorComponent;
  let fixture: ComponentFixture<WorkmanCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkmanCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkmanCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
