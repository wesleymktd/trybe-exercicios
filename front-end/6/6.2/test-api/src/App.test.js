// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it.only('ao renderizar a página é renderizada uma piada e a função fetch foi chamada 1 vez', async () => {
  // inicializando os mocks
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  }
  // inicio do processo do primeiro teste inicialização primeiro mock
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({ // mockResolvedValueOnce vai garantir que esse mock seje utilizado apenas uma vez
    json: jest.fn().mockResolvedValue(joke1)
  })

  // acessar
  render( <App />);
  const newJoke = screen.getByRole('button',{ name: 'New joke' }) // pegando botão para ser utilizado no novo teste


  //testar
  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1); // como o spyOn estava espiando a função eu consigo saber quantas vezes ela foi chamada

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke2),
  });

  // interagir
  userEvent.click(newJoke);

  expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
});