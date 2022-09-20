const myFizzBuzz = require("./myFizzBuzz");

describe('testando a função fizzBuzz', () => {
  it('teste de acordo com o valor recebido devolve o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('3')).toBe(false);
  }) 
})