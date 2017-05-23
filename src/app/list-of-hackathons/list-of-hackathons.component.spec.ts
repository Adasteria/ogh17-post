import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfHackathonsComponent } from './list-of-hackathons.component';

describe('ListOfHackathonsComponent', () => {
  let component: ListOfHackathonsComponent;
  let fixture: ComponentFixture<ListOfHackathonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfHackathonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfHackathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
