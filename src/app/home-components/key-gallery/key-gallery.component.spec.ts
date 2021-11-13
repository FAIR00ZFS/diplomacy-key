import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyGalleryComponent } from './key-gallery.component';

describe('KeyGalleryComponent', () => {
  let component: KeyGalleryComponent;
  let fixture: ComponentFixture<KeyGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
