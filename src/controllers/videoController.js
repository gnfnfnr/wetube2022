const fakeuser = {
  username: "lucy",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pagetitle: "홈화면", fakeuser });
export const see = (req, res) => res.send("비디오 홈페이지 watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("비디오 홈페이지 search");
export const upload = (req, res) => res.send("비디오 홈페이지 upload");
export const remove = (req, res) => res.send("비디오 홈페이지 remove");
