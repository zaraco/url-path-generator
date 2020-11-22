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

