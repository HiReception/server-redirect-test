import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPageComponent } from './target-page.component';

describe('TargetPageComponent', () => {
  let component: TargetPageComponent;
  let fixture: ComponentFixture<TargetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
