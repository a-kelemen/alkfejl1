import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBrowserComponent } from './note-browser.component';

describe('NoteBrowserComponent', () => {
  let component: NoteBrowserComponent;
  let fixture: ComponentFixture<NoteBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
