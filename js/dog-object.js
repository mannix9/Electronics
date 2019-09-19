var dog ={
    name: "Pancake",
    legs: 4,
    isAwesome: true
}
dog.age = 6

dog.bark = function(){
    console.log("Woof woof! My name is " + this.name + "!")
}
dog.bark()
var speak = function(){
    console.log(this.sound + "! My name is " + this.name + "!")
}
var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
}
console.log(cat.speak())
var pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
}
var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
}
pig.speak()
horse.speak()