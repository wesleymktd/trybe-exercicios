const sum = require('./sum');

describe('testa a função soma', () => {
  it('retorna a soma correta', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });

  it('testando erro caso receba string', () => {
    expect(() => sum(4,'5')).toThrowError(); //aqui não dá certo se colocar o sun direto pois o erro vai para o meu teste e eu preciso colocar ele dentro de outra função encapsulada para aí sim fazer esse teste
    expect(() => sum(4,'5')).toThrowError("parameters must be numbers");
  })
})
  

