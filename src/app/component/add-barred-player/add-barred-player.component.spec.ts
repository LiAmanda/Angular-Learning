import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarredPlayerComponent } from './add-barred-player.component';

describe('AddBarredPlayerComponent', () => {
  let component: AddBarredPlayerComponent;
  let fixture: ComponentFixture<AddBarredPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarredPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBarredPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
