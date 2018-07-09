import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBarredPlayerComponent } from './edit-barred-player.component';

describe('EditBarredPlayerComponent', () => {
  let component: EditBarredPlayerComponent;
  let fixture: ComponentFixture<EditBarredPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBarredPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBarredPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
