import BaseClient from "./baseClient";

class MessageClient {
    constructor() {
        this.baseClient = new BaseClient();
        this.resource = '/message';
    }
    createMessage(message) {
        return this.baseClient.create(this.resource,message);
    }

    getMessageByAuthors(authors) {
        return this.baseClient.getByBody(this.resource,authors);  
    }

    getMessageByContent(content) {
        return this.baseClient.get(`${this.resource}?content=${content}`)
    }
    
}

export default MessageClient;

