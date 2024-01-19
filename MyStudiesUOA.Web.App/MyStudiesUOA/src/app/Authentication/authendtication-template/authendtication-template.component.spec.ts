import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthendticationTemplateComponent } from './authendtication-template.component';

describe('AuthendticationTemplateComponent', () => {
  let component: AuthendticationTemplateComponent;
  let fixture: ComponentFixture<AuthendticationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthendticationTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthendticationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
