import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettimerPage } from './settimer.page';

describe('SettimerPage', () => {
  let component: SettimerPage;
  let fixture: ComponentFixture<SettimerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SettimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
