import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

test('testando se o componente não aparece caso o campo e-mail esteja vazio', () => {
  render(<ValidEmail email="" />);
  const testId = screen.queryByTestId('id-is-email-valid');
  expect(testId).not.toBeInTheDocument();
})
  
test('Testando se o componente possui texto verde ao ser digitado um e-mail válido.', () => {
  const EMAIL_USER = 'email@email.com';
  
  render(<ValidEmail email={EMAIL_USER} />);
  const testId = screen.queryByTestId('id-is-email-valid');
  expect(testId).toHaveAttribute('class', 'green-text')
})

test('Testando se o componente possui texto vermelho ao ser digitado um e-mail inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  
  render(<ValidEmail email={EMAIL_USER} />);
  const testId = screen.queryByTestId('id-is-email-valid');
  expect(testId).toHaveAttribute('class', 'red-text')
})