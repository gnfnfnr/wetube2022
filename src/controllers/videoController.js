const fakeuser = {
  username: "lucy",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [
    { title: "first video", ratting: 5, comment: 2, views: 59 },
    { title: "second video", ratting: 5, comment: 2, views: 59 },
    { title: "third video", ratting: 5, comment: 2, views: 59 },
    { title: "gg" },
  ];
  res.render("home", { pagetitle: "홈화면", fakeuser, videos });
};
export const see = (req, res) => res.send("비디오 홈페이지 watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("비디오 홈페이지 search");
export const upload = (req, res) => res.send("비디오 홈페이지 upload");
export const remove = (req, res) => res.send("비디오 홈페이지 remove");
