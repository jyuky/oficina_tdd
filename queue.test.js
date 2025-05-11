const Queue = require('./queue')

describe('Queue', () => {
  

  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({
      elements: []
    })
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.size()).toBe(5)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.elements = [1, 2, 3, 4, 5];
    queue.add(6);
    expect(queue.elements).toEqual([1, 2, 3, 4, 5, 6]);

  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.peek()).toBe(1)
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.elements = [1, 2, 3, 4, 5];
    expect(queue.dequeue()).toBe(1);
    expect(queue.elements).toEqual([2, 3, 4, 5]);
  })
})