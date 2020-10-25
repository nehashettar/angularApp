import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DircComponent } from './dirc.component';

describe('DircComponent', () => {
  let component: DircComponent;
  let fixture: ComponentFixture<DircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
