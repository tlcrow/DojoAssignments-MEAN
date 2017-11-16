import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmUserComponent } from './farm-user.component';

describe('FarmUserComponent', () => {
  let component: FarmUserComponent;
  let fixture: ComponentFixture<FarmUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
