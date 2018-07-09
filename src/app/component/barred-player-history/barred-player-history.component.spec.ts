import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarredPlayerHistoryComponent } from './barred-player-history.component';

describe('BarredPlayerHistoryComponent', () => {
  let component: BarredPlayerHistoryComponent;
  let fixture: ComponentFixture<BarredPlayerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarredPlayerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarredPlayerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
