class Bio {
  first(name) {
    alert(`hello ${name} how are you?? `);
    document.write('Congratulation' + ' ' +  name + ' ' + "You're access this object oriented programming")
  }
  second(name) {
    document.write(`can i give you ${name} data`);
  }
}

let Jibran = new Bio();
let Munaaf = new Bio();

let name = "Jibran";
// Jibran.first(name);
Munaaf.second(prompt('Enter your name'))

