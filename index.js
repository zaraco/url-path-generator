module.exports = class Path {
    baseUrl;
    pathArray = [];
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    addToPath = (entity, id = null) => {
        if(entity) {
            this.pathArray.push(entity);
            if(id) {
                this.pathArray.push(id);
            }
        }
        return this;
    };
    build = () => {
        if(this.baseUrl.slice(-1) === '/') {
            this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
        }
        return this.baseUrl + this.pathArray.map(value => `/${value}`).join('')
    }
};
