import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsuariosComponent } from './page-usuarios.component';

describe('PageUsuariosComponent', () => {
  let component: PageUsuariosComponent;
  let fixture: ComponentFixture<PageUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
