import { Todo } from './components/Todo.js';


const randomUzduotys = new Todo('"Vargdienio kasdienybe"');


randomUzduotys.summary();

randomUzduotys.add('isplauti indus');
randomUzduotys.add('issiurbti namus');
randomUzduotys.add('isvesti suni');
randomUzduotys.add('kodint visa nakti');
randomUzduotys.summary();
randomUzduotys.print();
randomUzduotys.edit(0, 'isplauti lekstes');
randomUzduotys.remove(1);
randomUzduotys.taskCompleted(2);
randomUzduotys.print();

randomUzduotys.printCompletedOnly();
randomUzduotys.notCompletedOnly();





// import { Cate, Suo, Bonha } from './components/animals.js';

// const suo1 = new Suo('Bobik', 'patchy');
// suo1.greeting();

// const cate1 = new Cate('Micius', 'rainas');
// cate1.hello();

// const bonhe = new Bonha('Bonha', 'juodas');
// bonhe.bonhello();