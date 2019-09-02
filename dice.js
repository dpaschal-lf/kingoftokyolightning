
class Dice{
    constructor(diceCount){
        this.dom = {
            container: null,
            singleDice: []
        }
        this.possibleValues = [1,2,3, 'fist', 'heart'];
        this.displayValues = [1,2,3, '&#9994', '&hearts;']
        this.currentValues = [];
        this.diceCount = diceCount;
    }
    render(){
        this.dom.container = $("<div>",{
            class: 'diceContainer'
        })
        for( var dieIndex = 0; dieIndex < this.diceCount; dieIndex++){
            var singleDie = $("<div>",{
                class: 'singleDie',
                text: '?'
            });
            this.dom.singleDice.push( singleDie );
            this.dom.container.append(singleDie);
        }
        return this.dom.container;
    }
    rollAllDice(){
        var tempDiceValues = [];
        for( var diceIndex = 0; diceIndex < this.diceCount; diceIndex++){
            var randomIndex = Math.floor(Math.random() * this.possibleValues.length);
            var randomValue = this.possibleValues[ randomIndex ];
            tempDiceValues.push( randomValue );
            this.dom.singleDice[ diceIndex ].html( this.displayValues[ randomIndex ]);
        }
        this.currentValues = tempDiceValues;
        return tempDiceValues;
    }
}