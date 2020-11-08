import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BStestComponent } from './bstest.component';

describe('BStestComponent', () => {
  let component: BStestComponent;
  let fixture: ComponentFixture<BStestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BStestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BStestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
