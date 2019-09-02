
class KingOfTokyo{
    constructor( displayDom ){
        this.dom = $(displayDom);
        this.monsters = [];
        this.currentMonster = 0;
    }
    addMonster( name, image ){
        var newMonster = new Monster( name, image, 10, 0 );
        this.monsters.push( newMonster );
        var domElement = newMonster.render();
        this.dom.append( domElement );
    }
    changePointsOfMonster( type, delta, monsterIndex ){
        if(monsterIndex===undefined){
            monsterIndex = this.currentMonster;
        }
        this.monsters[ monsterIndex ].changePoints( type, delta );
    }
}