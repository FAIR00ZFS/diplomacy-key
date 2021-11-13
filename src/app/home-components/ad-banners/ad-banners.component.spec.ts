import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBannersComponent } from './ad-banners.component';

describe('AdBannersComponent', () => {
  let component: AdBannersComponent;
  let fixture: ComponentFixture<AdBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
