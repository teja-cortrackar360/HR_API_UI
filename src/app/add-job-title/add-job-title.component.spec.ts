import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobTitleComponent } from './add-job-title.component';

describe('AddJobTitleComponent', () => {
  let component: AddJobTitleComponent;
  let fixture: ComponentFixture<AddJobTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJobTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddJobTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
