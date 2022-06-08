import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCentralesComponent } from './page-centrales.component';

describe('PageCentralesComponent', () => {
  let component: PageCentralesComponent;
  let fixture: ComponentFixture<PageCentralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCentralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCentralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
