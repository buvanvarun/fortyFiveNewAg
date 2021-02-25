import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreorderButtonComponent } from './preorder-button.component';

describe('PreorderButtonComponent', () => {
  let component: PreorderButtonComponent;
  let fixture: ComponentFixture<PreorderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreorderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreorderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
