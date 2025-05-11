class Queue {


  //- constructor() Deve criar uma fila 
  constructor() {
    this.elements = []
  }

  // - size() Deve ser capaz de calcular o tamanho da fila
  size() {

    return this.elements.length;
  }
  
  //- add(item) Deve ser capaz de adicionar um item na fila
  add(item) {
    return this.elements.push(item);

  }

  //- peek() Deve escolher o primeiro item da fila
  peek() {
    return this.elements[0];

  }

  //- dequeue() Deve remover o primeiro item da fila
  dequeue() {
    return this.elements.shift();

  }
}

module.exports = Queue