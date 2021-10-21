import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPesquisaComponent } from './categoria-pesquisa.component';

describe('CategoriaPesquisaComponent', () => {
  let component: CategoriaPesquisaComponent;
  let fixture: ComponentFixture<CategoriaPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
