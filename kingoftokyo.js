
class KingOfTokyo{
    constructor( displayDom ){
        this.rollDice = this.rollDice.bind( this );
        this.dom = {
            container: $(displayDom),
            dice: null
        };
        this.monsters = [];
        this.currentMonster = 0;
        this.dice = new Dice(1);
        var diceDomElement = this.dice.render();
        this.dom.container.append( diceDomElement );
        this.dom.dice = diceDomElement;
    }
    addEventListeners(){
        $("#rollDice").click( this.rollDice );
    }
    gotoNextMonster(){
        this.monsters[this.currentMonster].unmarkCurrentTurn();
        this.currentMonster++;
        if(this.currentMonster === this.monsters.length){
            this.currentMonster=0;
        }
        this.monsters[this.currentMonster].markCurrentTurn();
    }
    rollDice(){
        var diceValues = this.dice.rollAllDice();
        var damageToOtherMonsters = null;
        var healingToCurrentMonster = null;
        var pointsForCurrentMonster = null;
        for( var diceIndex = 0; diceIndex < diceValues.length; diceIndex++){
            switch( diceValues[diceIndex]){
                case 3:
                case 2:
                case 1:
                    pointsForCurrentMonster+= diceValues[diceIndex];
                    break;
                case 'fist':
                    damageToOtherMonsters--;
                    break;
                case 'heart':
                    healingToCurrentMonster++;
                break;
            }
            this.changePointsOfMonster( 'life', healingToCurrentMonster );
            var otherMonsters = this.monsters.slice();
            otherMonsters.splice( this.currentMonster, 1);
            this.changePointsOfMonster('life', damageToOtherMonsters, otherMonsters);
            this.changePointsOfMonster('victory', pointsForCurrentMonster);
        }
        this.gotoNextMonster();
    }
    addMonster( name, image ){
        var newMonster = new Monster( name, image, 10, 0 );
        this.monsters.push( newMonster );
        var domElement = newMonster.render();
        this.dom.container.append( domElement );
        this.monsters[this.currentMonster].markCurrentTurn();
    }
    changePointsOfMonster( type, delta, monsterList ){
        let targetMonsters = monsterList;
        if(monsterList===undefined){
            targetMonsters= [this.monsters[this.currentMonster]];
        }
        for( var monsterIndex = 0; monsterIndex < targetMonsters.length; monsterIndex++){
            targetMonsters[monsterIndex].changePoints( type, delta );
        }
    }
}