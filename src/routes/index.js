const newsRoutes = require('./news');
const siteRoutes = require('./site');

function route(app) {
    app.use('/news', newsRoutes );

    app.use('/', siteRoutes ); // những routes nào / thì để bên dưới cho lên trên là nó lỗi 

}


module.exports= route;