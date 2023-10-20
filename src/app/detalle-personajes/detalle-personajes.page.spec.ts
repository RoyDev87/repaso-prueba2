import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePersonajesPage } from './detalle-personajes.page';

describe('DetallePersonajesPage', () => {
  let component: DetallePersonajesPage;
  let fixture: ComponentFixture<DetallePersonajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallePersonajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
