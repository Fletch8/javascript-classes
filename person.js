class Person {
    // runs when person obj is created
    constructor(name, softwareEngineer){
        this.arms = 2
        this.legs = 2
        this.name = name
        this.softwareEngineer = softwareEngineer
        this.artists = [];
    }

    greet() {
        console.log(`Hello`)
    }

    walk() {
        console.log('Walking')
    }

    eat(food) {
        console.log(`Today, I am eating ${food}`)
    }
    // method working with arrays
    addArtist(artist){
        console.log(`i like ${artist}`)
        this.artists.push(artist)
    }
}

// this is an instance of a class, aka an object
const princeLeo = new Person('leo', true);

// calling the methods
princeLeo.walk();
princeLeo.eat('chicken')
princeLeo.jump = () => {
    console.log('weeee')
}
princeLeo.jump()
princeLeo.addArtist('Rico Nasty')
princeLeo.addArtist('Yeye')
// view an attribute
console.log(princeLeo.artists)


// jake obj
const jake = new Person('jake', true)
jake.codeSomething = () => {
    console.log('<srcipt>create tomogochi </script>')
} 
jake.codeSomething()


// jaccob obj 
const jaccob = new Person('jaccob', true)
jaccob.createBomberGame = () => {
    console.log('Pew! Pew! Pew!')
}
jaccob.createBomberGame()

