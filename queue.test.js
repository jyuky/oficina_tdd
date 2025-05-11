const Queue = require('./queue')

describe('Queue', () => {
  const queue = new Queue()

  it('Deve criar uma fila', () => {

    expect(queue).toEqual({
      elements: []
    })
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.size()).toBe(5)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.add('6')).toBe(6)

  })

  it('Deve escolher o primeiro item da fila', () => {
    
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.peek()).toBe(1)
  })

  it('Deve remover o primeiro item da fila', () => {
    
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.dequeue()).toBe(1)
  })
})