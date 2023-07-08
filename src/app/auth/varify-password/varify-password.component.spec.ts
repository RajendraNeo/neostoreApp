import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyPasswordComponent } from './varify-password.component';

describe('VarifyPasswordComponent', () => {
  let component: VarifyPasswordComponent;
  let fixture: ComponentFixture<VarifyPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarifyPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarifyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
