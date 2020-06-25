exports.seed = async function(knex) {

    await knex('user').del();
    return await knex('user').insert({
        name: 'John Doe',
        email: 'user@email.com',
        // Password is: password
        password: '180b94511afd8ef26ddc06bbada76d0aae3d59b15f0de95353fe434e20d22aff16851021e9ca80ebf2c2e7f81ef5104a0be0a2e3d0f76fed84b7f6592115e3da',
        phone: '55555555',
        address: 'Street A #45, Earth',
        salt: 'e004d53d9ffd17d4b72606c1ed9f1e4192'
     });
    
}