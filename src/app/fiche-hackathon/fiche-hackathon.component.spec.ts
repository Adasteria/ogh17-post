import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheHackathonComponent } from './fiche-hackathon.component';

describe('FicheHackathonComponent', () => {
  let component: FicheHackathonComponent;
  let fixture: ComponentFixture<FicheHackathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheHackathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
