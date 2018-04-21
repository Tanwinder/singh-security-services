import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTitleContentComponent } from './image-title-content.component';

describe('ImageTitleContentComponent', () => {
  let component: ImageTitleContentComponent;
  let fixture: ComponentFixture<ImageTitleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTitleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTitleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
