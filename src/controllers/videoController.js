const fakeuser = {
  username: "lucy",
  loggedIn: true,
};

const videos = [
  { title: "first video", ratting: 5, comment: 2, views: 59, id: 1 },
  { title: "second video", ratting: 5, comment: 2, views: 59, id: 2 },
  { title: "third video", ratting: 5, comment: 2, views: 59, id: 3 },
  { title: "gg", ratting: 5, comment: 2, views: 59, id: 4 },
];

export const trending = (req, res) => {
  return res.render("home", { pagetitle: "홈화면", fakeuser, videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pagetitle: `watching ${video.title}`,
    fakeuser,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", {
    pagetitle: `editing ${video.title}`,
    video,
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pagetitle: `uploading videos` });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = { title: title, ratting: 5, comment: 2, views: 59, id: 1 };
  videos.push(newVideo);
  return res.redirect("/");
};
