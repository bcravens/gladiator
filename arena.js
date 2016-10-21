class Gladiator {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
}

class Arena {
  constructor(name) {
    let capName = name.charAt(0).toUpperCase() + name.slice(1)
    this.name = capName
    this.gladiators = []
  }
  addGladiator(gladiator){
    this.gladiators.push(gladiator)
    if (this.gladiators.length > 2) {
      this.gladiators.pop()
    }
  }
  removeGladiator(name){
    let gladiator = this.gladiators.indexOf(name)
    this.gladiators.splice(gladiator, 1)
  }
  fight(){

    if (this.gladiators[0].name == "Maximus"){
      this.gladiators.pop()
      return
    } else if (this.gladiators[1].name == "Maximus"){
      this.gladiators.shift()
      return
    }

    let gladOneWeapon = this.gladiators[0].weapon
    let gladTwoWeapon = this.gladiators[1].weapon

    switch (gladOneWeapon) {
      case "Trident":
        if (gladTwoWeapon == "Spear") {
          if (this.vote() == true) {
            return
          }
          this.gladiators.pop()
        } else if (gladTwoWeapon == "Club"){
          if (this.vote() == true) {
            return
          }
          this.gladiators.shift()
        } else {
          this.gladiators = []
        }
      break;
      case "Spear":
        if (gladTwoWeapon == "Trident") {
          if (this.vote() == true) {
            return
          }
          this.gladiators.shift()
        } else if (gladTwoWeapon == "Club") {
          if (this.vote() == true) {
            return
          }
          this.gladiators.pop()
        } else {
          this.gladiators = []
        }
      break;
      case "Club":
        if (gladTwoWeapon == "Trident") {
          if (this.vote() == true) {
            return
          }
          this.gladiators.pop()
        } else if (gladTwoWeapon == "Spear") {
          if (this.vote() == true) {
            return
          }
          this.gladiators.shift()
        } else {
          this.gladiators = []
        }
      break;
    }
  }

  vote(){
    let theVote = prompt ("Thumbs up(1), Thumbs down(2)")
    if (theVote == 1 ) {
      return true
    } else {
      return false
    }
  }

  entertained(){
    if (this.gladiators[0].name == "Maximus"){
      console.log("Yes")
    } else if (this.gladiators[1].name == "Maximus"){
      console.log("Yes")
    }
  }
}

var max = new Gladiator("Bob","Spear")
var titus = new Gladiator("Titus","Trident")
var colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
console.log(colosseum.gladiators)
