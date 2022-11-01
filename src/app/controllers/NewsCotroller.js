
class NewsCotroller {

    // [GET] /news
    index(req, res){
        res.render('news');
    }

    //[GET]  /news/:lug
    show (req, res){
        res.send('NEW DETAIL!!!');
    }

     
}

module.exports= new NewsCotroller;