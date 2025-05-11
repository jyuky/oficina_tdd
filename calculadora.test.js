const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  const calculadora = new Calculadora();
  it('Deverá retornar a soma de dois números', () => {
    //Seu código aqui
    expect(calculadora.soma(2,3)).toBe(5)
  })

  it('Deverá retornar a subtração de dois números', () => {
    //Seu código aqui
    expect(calculadora.subtracao(10,5)).toBe(5)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    //Seu código aqui
    expect(calculadora.multiplicacao(10,5)).toBe(50)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
    expect(calculadora.divisao(10,5)).toBe(2)
  })
})
