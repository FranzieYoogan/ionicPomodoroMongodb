import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlltimerPage } from './alltimer.page';

describe('AlltimerPage', () => {
  let component: AlltimerPage;
  let fixture: ComponentFixture<AlltimerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
