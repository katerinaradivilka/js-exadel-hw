/*You need to create a Zoo catalog, where we will keep all animals from this Zoo.
You need to create a Zoo class which. 
See structure in the attachment. You should implement the following methods:
get/set zoo’s address
get/set zoo’s area
get established date
get/set ticket’s price
add/remove/edit worker
add/remove/edit animal
show all animals
show animal by id (id should be a property of every animal)
show all workers
Create Animal class. See structure in the attachment. Implement the following methods:
get animal info
set weight
set height
Create child classes for some kinds of animals. See structure in the attachment. Implement the possibility to set the properties of child classes.
 */

class Zoo {

  constructor (address, area, establishedDate, ticketPrice, workers, animals){
      this.address= address;
      this.area= area;
      this.establishedDate= establishedDate;
      this.ticketPrice= ticketPrice;
      this.workers = workers;
      this.animals= animals;
  }


  get getAddress(){
      return this.address;
  }

  get getArea(){
      return this.area;
  }

  get getTicketPrice(){
      return this.ticketPrice;
  }

  get getEstablishedDate(){
      return this.establishedDate;
  }

  set setAddress( address){
      this.address= address;
  }

  set setArea( area){
      this.area= area;
  }

  set setTicketPrice( ticketPrice){
      this.ticketPrice= ticketPrice;
  }

  addWorker( worker) {
      this.workers.push(worker);
  }

  removeWorker(id) {
      this.workers = this.workers.filter( item=>  item.id != id );
  }

  editWorker(worker) {
      const index = this.workers.findIndex( item=> item.id == worker.id);
      this.workers[index] = worker;  
  }

  showAllWorkers() {
      
      for (const worker of this.workers) {
         console.log(worker.getInfo) 
      }
  }

  addAnimal( animal) {
      this.animals.push(animal);
  }

  removeAnimal(id) {
      this.animals = this.animals.filter( item=>  item.id != id );
  }
 
  editAnimal(animal) {
      const index = this.animals.findIndex( item=> item.id == animal.id);
      this.animals[index] = animal;  
  }

  showAllAnimals() {
  
      for (const animal of this.animals) {
         console.log(animal.getInfo) 
      }
  }

  showAnimalById(id) {
  
     console.log( this.animals.find ( item =>  item.id = id).getInfo)
  }

}

class Animal {

  constructor (id, type, color, weight, height, placeOfOrigin){
      this.id= id;
      this.type= type;
      this.color= color;
      this.weight= weight;
      this.height = height;
      this.placeOfOrigin= placeOfOrigin;
  }

  get getInfo() {
      return `Id: ${this.id}, 
      type : ${this.type} , 
      color : ${this.color}, 
      weight : ${this.weight},
      height : ${this.height},
      placeOfOrigin : ${this.placeOfOrigin}`;
  }

  set setHeight( height){
      this.height =height; 
  }
  set setWeight( weight){
      this.weight =weight; 
  }
}

class Snakes extends Animal {

  constructor (id, type, color, weight, height, placeOfOrigin, isPoisonous){
     super(id, type, color, weight, height, placeOfOrigin);
     this.isPoisonous= isPoisonous;
  }

  get getInfo(){
      return `${super.getInfo} 
      isPoisonous: ${this.isPoisonous} `
  }

   set setIsPoisonous( isPoisonous) {
      this.isPoisonous = isPoisonous;
  }
  
}

class CatsLike extends Animal {
  constructor (id, type, color, weight, height, placeOfOrigin, isSafeToPet){
      super(id, type, color, weight, height, placeOfOrigin);
      this.isSafeToPet= isSafeToPet;
   }

   get getInfo(){
      return `${super.getInfo} 
      isSafeToPet: ${this.isSafeToPet} `
  }

  set setIsSafeToPet( isSafeToPet) {
      this.isSafeToPet = isSafeToPet;
  }
   
}

class Birds extends Animal {
  constructor (id, type, color, weight, height, placeOfOrigin, isFlying){
      super(id, type, color, weight, height, placeOfOrigin);
      this.isFlying= isFlying;
   }

   get getInfo(){
      return `${super.getInfo} 
      isFlying: ${this.isFlying} `
   }

   set setIsFlying( isFlying) {
       this.isFlying = isFlying;
   }
}

class Worker {

  constructor( id, firstName, lastName, phone){
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
  }

  get getInfo() {
      return `ID : ${this.id}, 
      firstName: ${this.firstName} ,
      lastName: ${this.lastName}, 
      phone: ${this.phone}  `
  }

}

const worker1 = new Worker(11," myName", "kek", "2222222");

const workerKatya = new Worker(22," Katya", "keasdadk", "213122222222");

const cat1 = new CatsLike(9,"g","red",10,2,"Brazil",false);
const bird1 = new Birds(121,"s","blue",1,5,"Morocco",true);
const snake1 = new Snakes(1144,"v","yellow",12,35,"belarus",true);

const animals= [cat1,bird1,snake1];

const zoo = new Zoo(" adress ", "volozhin", "20.03.2021", 10, [worker1,workerKatya], animals);

// console.log(zoo.showAllWorkers())
//console.log(zoo.showAllWorkers());
// zoo.editWorker (new Worker (22," 222", "sss", "ddd"));
// //zoo.removeWorker(11);
// zoo.showAllWorkers();
// zoo.removeAnimal(121);
// const editedCat = new CatsLike(9,"g12d","zczxcz",10,2,"Brasdasdazil",true);
// zoo.editAnimal(editedCat)
// zoo.showAllAnimals();
// zoo.showAnimalById(9);
// snake1.setIsPoisonous= false;
// console.log(snake1.getInfo);