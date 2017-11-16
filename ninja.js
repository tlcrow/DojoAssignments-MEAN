function Ninja(name, health, speed, stregth){
    var speed = 3;
    var strength = 3;

    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
        health = health + 10;
    }
    
}
Ninja.prototype.punch = function(ninja){
    ninja.health = ninja.health - 5;
    console.log(ninja.name + "was punched by" + this.name + "and lost 5 health!");
    return this;
}
Ninja.prototype.kick = function(ninja){
    ninja.health = ninja.health - 15;
    console.log(ninja.name + "was kicked by" + this.name + "and lost 15 health!");
    return this;
}

var ninja1 = new Ninja("Hyabusa");

ninja1.sayName();

ninja1.showStats();

const blueNinja = new Ninja("Bill Gates");
const redNinja = new Ninja("Hyabusa");

blueNinja.sayName();
redNinja.sayName();

blueNinja.punch(redNinja);
redNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();

class Ninja{
    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = 100;
    }
    sayName(){
        console.log("My ninja name is " + this.name + "!");
        }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        }
    drinkSake(){
        this.health = this.health + 10;
        }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("This sensei is not saying something wise")
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();

ninja1.showStats();

let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();

super_sensei.showStats();
