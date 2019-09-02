
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
        var lifePointsContainer = $("<aside>",{
            class: 'lifePointsContainer'
        });
        this.domElements.lifePoints = $("<span>",{
            text: this.points.life
        })
        lifePointsContainer.append( this.domElements.lifePoints);

        var victoryPointsContainer = $("<aside>",{
            class: 'victoryPointsContainer'
        });
        this.domElements.victoryPoints = $("<span>",{
            text: this.points.victory
        })

        victoryPointsContainer.append( this.domElements.victoryPoints );
        this.domElements.container.append( lifePointsContainer, victoryPointsContainer );
        return this.domElements.container;
    }
}