import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBrandComponent } from './banner-brand.component';

describe('BannerBrandComponent', () => {
  let component: BannerBrandComponent;
  let fixture: ComponentFixture<BannerBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
