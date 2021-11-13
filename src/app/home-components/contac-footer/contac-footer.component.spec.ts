import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacFooterComponent } from './contac-footer.component';

describe('ContacFooterComponent', () => {
  let component: ContacFooterComponent;
  let fixture: ComponentFixture<ContacFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
