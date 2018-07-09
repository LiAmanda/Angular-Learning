import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarredPlayerComponent } from './barred-player.component';

describe('BarredPlayerComponent', () => {
  let component: BarredPlayerComponent;
  let fixture: ComponentFixture<BarredPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarredPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarredPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
