export class Ship{
    /**
     * 
     * @param {Player} player 
     * @param {Board} board 
     * @param {list} position 
     */
    constructor(player,board, type, position){
        this._player = player;
        this._board = board;
        this.type = type;
        this.position = position;
    }
    
    get player(){
        return this._player
    }
    set player(player){
        this._player = player
    }
    
    get board(){
        return this._player
    }
    set board(player){
        this._player = player
    }
}

export class Player{
    constructor(name, fleet, board){
        this.name = name;
        this.fleet = fleet;
        this.board = board;
    }
}

