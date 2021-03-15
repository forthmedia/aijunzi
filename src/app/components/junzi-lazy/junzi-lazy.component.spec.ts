import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunziLazyComponent } from './junzi-lazy.component';

describe('JunziLazyComponent', () => {
  let component: JunziLazyComponent;
  let fixture: ComponentFixture<JunziLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunziLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunziLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
