import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarredPlayerDetailComponent } from './barred-player-detail.component';

describe('BarredPlayerDetailComponent', () => {
  let component: BarredPlayerDetailComponent;
  let fixture: ComponentFixture<BarredPlayerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarredPlayerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarredPlayerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
