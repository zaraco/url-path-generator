exports = module.exports;

exports.baseUrl = '';
exports.pathArray = [];

exports.init = (baseUrl) =>
{
    this.pathArray = [];
    this.baseUrl = baseUrl;
    return this;
};

exports.addToPath = (entity, id = null) => {
    if (entity) {
        this.pathArray.push(entity);
        if (id) {
            this.pathArray.push(id);
        }
    }
    return this;
};

exports.build = () => {
    if (this.baseUrl.slice(-1) === '/') {
        this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
    }
    return this.baseUrl + this.pathArray.map(value => `/${value}`).join('')
};

exports.urlToPath = (url) =>
{
    const splitProtocol = url.split('//');
    let splitUrl;
    if(splitProtocol && splitProtocol.length > 1) {
        splitUrl = splitProtocol[1].split('/')
    } else if(splitProtocol && splitProtocol.length > 0) {
        splitUrl = splitProtocol[0].split('/')
    }
    if(splitUrl && splitUrl.length>0) {
        this.baseUrl = splitUrl[0];
        this.pathArray = splitUrl.slice(1);
    }
    return this;
};

exports.getEntityId = (entity) => {
    if(this.pathArray && this.pathArray.length>0) {
        const entityIndex = this.pathArray.indexOf(entity);
        if(entityIndex > 0 && entityIndex < this.pathArray.length - 1) {
            return this.pathArray[entityIndex+1];
        }
        return null;
    }
    return null;
};

