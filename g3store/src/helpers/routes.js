const routes = {
    home: '/',
    contacto: '/contacto',
    equipo: '/equipo',
    gestionpeajes: '/gestion-peajes',
    gestiontransporte: '/gestion-transporte',
    softwarefactory: '/software-factory',
    account: '/account',
    users: '/admin/users',
    product: {
        list: '/admin/list/products',
        create: '/admin/create/product',
    },
    auth: {
        login: '/auth/login',
        register: '/auth/register'
    }
}

export default routes;