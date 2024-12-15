import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../screens/Home'; 

describe('Home Screen', () => {
  test('deve exibir as categorias corretamente', () => {
    const { getByText, getByTestId } = render(<Home />);

    expect(getByText('Lanches')).toBeTruthy();
    expect(getByText('Bebidas')).toBeTruthy();
    expect(getByText('Sobremesas')).toBeTruthy();
    expect(getByText('Almoço')).toBeTruthy();

    expect(getByTestId('gryffindor-image')).toBeTruthy();
    expect(getByTestId('hufflepuff-image')).toBeTruthy();
    expect(getByTestId('ravenclaw-image')).toBeTruthy();
    expect(getByTestId('slytherin-image')).toBeTruthy();
  });

  test('deve navegar para a tela de produtos ao clicar na categoria', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<Home navigation={{ navigate: mockNavigate }} />);

    fireEvent.press(getByText('Lanches'));

    expect(mockNavigate).toHaveBeenCalledWith('Produtos', { nome: 'Lanches', produtos: expect.any(Array) });
  });
});
