
class Monster{
    constructor( name, img, initialHitpoints, initialVictorypoints){
        this.name = name;
        this.image = img;
        this.maximums = {
            life: 10,
            victory: 20
        }
        this.points = {
            life: initialHitpoints,
            victory: initialVictorypoints
        }
        this.domElements = {
            container: null,
            lifePoints: null,
            victoryPoints: null
        }
    }
    changeHitpoints( newValue ){
        
        this.changePoints( 'life', newValue );
    }
    changeVictorypoints( newValue ){
        this.changePoints( 'victory', newValue );
    }
    changePoints( type, newValue ){
        var nextValue = this.points[type] + newValue;
        if( nextValue > this.maximums[type] ){
            nextValue = this.maximums[type];
        } else if (nextValue < 0){
            nextValue = 0;
        }
        this.points[type] = nextValue;
        this.update();
    }
    update(){
        this.domElements.lifePoints.text(this.points.life);
        this.domElements.victoryPoints.text(this.points.victory);
    }
    render(){
        this.domElements.container = $("<div>",{
            class: 'monster',
            css: {
                backgroundImage: 'url('+ this.image +')'
            }
        })
        var pointsContainer = $("<div>",{
            class: 'pointsContainer'
        })
        var lifePointsContainer = $("<aside>",{
            class: 'lifePointsContainer label',
        });
        this.domElements.lifePoints = $("<span>",{
            text: this.points.life
        })
        lifePointsContainer.append( this.domElements.lifePoints);

        var victoryPointsContainer = $("<aside>",{
            class: 'victoryPointsContainer label',
        });
        this.domElements.victoryPoints = $("<span>",{
            text: this.points.victory
        })

        victoryPointsContainer.append( this.domElements.victoryPoints );
        pointsContainer.append(lifePointsContainer, victoryPointsContainer)
        this.domElements.container.append( pointsContainer );
        return this.domElements.container;
    }
}