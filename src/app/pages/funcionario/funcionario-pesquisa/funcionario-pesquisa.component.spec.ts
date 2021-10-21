import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioPesquisaComponent } from './funcionario-pesquisa.component';

describe('UsuarioPesquisaComponent', () => {
  let component: FuncionarioPesquisaComponent;
  let fixture: ComponentFixture<FuncionarioPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
