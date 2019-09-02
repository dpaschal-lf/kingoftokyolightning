
class Monster{
    constructor( name, img, initialHitpoints, initialVictorypoints){
        this.name = name;
        this.image = img;
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