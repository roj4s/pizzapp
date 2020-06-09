const get = async (id) => {

    // TODO: DB querying here using param id
    return {
        id: id,
        name: 'Dummy Pizza',
        description: 'Just a dummy pizza',
        price: 20.5,
        currency: 'euros'
    };

}


module.exports = {
    get
};
