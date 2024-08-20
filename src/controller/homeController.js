//hàm getHomePage
let getHomePage = (req, res) => {
    //return res.send('Nguyễn Hữu Trung');
    return res.render('homepage.ejs');//trả về view
}
//hàm getAbout
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
// object: {
//     key: '',
//     value: ''
// }
//export ra object
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}