//Polimorfismo: Algo que é polimorfo tem a habilidade de assumir diferentes formas

class AnimalSounds {
    public playSound(animal: Animal): void {
        animal.makeNoise();
    }
}

const dog = new Dog('Tina');
const cat = new Cat('Suzy');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog); // Tina está fazendo AU AU...
animalSounds.playSound(cat); // Suzy está fazendo MIAU...