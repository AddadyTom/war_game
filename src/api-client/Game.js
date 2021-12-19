import BaseClient from "./baseClient.js";

class GameClient {
    constructor() {
        this.baseClient = new BaseClient();
        this.resource = '/game';
    }
    createGame(game) {
        return this.baseClient.create(this.resource,game);
    }

    getGameById(id) {
        return this.baseClient.get(`${this.resource}/${id}`);  
    }

    async getGameByName(name) {
        return await this.baseClient.get(`${this.resource}?name=${name}`);
    }
}

export default GameClient;