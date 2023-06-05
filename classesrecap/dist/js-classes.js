class Player {
    static description = 'this is a player class';
    #score = 99;
    #numLives = 10;
    praise = 'you are doing great!';

    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }

    static randomPlayer() {
        return new Player('random', 'player');
    }
    
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('score cannot be negative');
        }
        
        this.#score = newScore;
    } 

    // setScore(score) {
    //     this.#score = score;
    // }

    get score() {
        return `I am using a getter ${this.#score}`
    }

    // getScore() {
    //     return `your score is ${this.#score}`;
    // }

    set fullName(newName) {
        const [first, last] = newName.split(' ')
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    
    #secret() {
        console.log('this is a secret');
    }

    taunt() {
        console.log('ariba campeon!');
    }

    loseLife() {
        this.#numLives--;
    }
}

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last)
        this.powers = powers;
    }

    isAdmin = true;
}

const admin = new AdminPlayer('Uchirai', 'Govere',['create', 'delete', 'update']);


// const player1 = new Player('James', 'Doe');
// player1.taunt();
// console.log(player1.taunt());

// const player2 = new Player('John', 'Doe');
// console.log(player2.numLives);
// player2.loseLife()
// console.log(player2.numLives);
// console.log(player2)
// player2.setScore(100)
// console.log(player2.getScore())

// console.log(player1.score)
// console.log(player2.fullName)

const player1 = new Player('James', 'Doe');
console.log(player1.fullName)
player1.fullName = 'Johny Moe'
console.log(player1.fullName)
console.log(player1.first)
console.log(Player.description)
