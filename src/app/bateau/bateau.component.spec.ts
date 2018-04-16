import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchgameComponent } from './launchgame.component';

describe('LaunchgameComponent', () => {
  let component: LaunchgameComponent;
  let fixture: ComponentFixture<LaunchgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
