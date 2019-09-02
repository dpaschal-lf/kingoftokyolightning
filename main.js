

var game;

$(document).ready( startApp );

function startApp(){
    game = new KingOfTokyo('#gameArea');
    game.addMonster('gigazaur', 'images/gigazaur.png');
    game.addMonster('cyberkitty', 'images/cyberkitty.jpg');
    game.addEventListeners();
}