let myHome = (req, res) => {
  return res.render("Home.ejs");
};
module.exports = {
  myHome: myHome,
};
