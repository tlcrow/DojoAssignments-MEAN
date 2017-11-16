import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMongooseComponent } from './new-mongoose.component';

describe('NewMongooseComponent', () => {
  let component: NewMongooseComponent;
  let fixture: ComponentFixture<NewMongooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMongooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMongooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
