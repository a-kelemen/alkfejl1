import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteGroupComponent } from './new-note-group.component';

describe('NewNoteGroupComponent', () => {
  let component: NewNoteGroupComponent;
  let fixture: ComponentFixture<NewNoteGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNoteGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
