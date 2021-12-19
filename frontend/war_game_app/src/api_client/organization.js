import BaseClient from "./baseClient";

class OrganizationClient {
    constructor() {
        this.baseClient = new BaseClient();
        this.resource = '/organization';
    }
    createOrganization(organization) {
        return this.baseClient.create(this.resource,organization);
    }

    getMessageByAuthors(authors) {
        return this.baseClient.getByBody(this.resource,authors);  
    }

    getMessageByContent(content) {
        return this.baseClient.get(`${this.resource}?content=${content}`)
    }
    
}

export default OrganizationClient;

