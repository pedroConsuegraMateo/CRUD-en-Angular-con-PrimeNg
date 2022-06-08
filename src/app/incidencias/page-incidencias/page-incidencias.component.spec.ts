import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIncidenciasComponent } from './page-incidencias.component';

describe('PageIncidenciasComponent', () => {
  let component: PageIncidenciasComponent;
  let fixture: ComponentFixture<PageIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIncidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
