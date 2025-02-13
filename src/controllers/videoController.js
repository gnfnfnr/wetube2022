import Video from "../models/Video";

const fakeuser = {
  username: "lucy",
  loggedIn: true,
};

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pagetitle: "홈화면", fakeuser, videos });
  } catch (error) {
    return res.render("server-error");
  }
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pagetitle: "page not find" });
  } else {
    return res.render("watch", {
      pagetitle: video.title,
      fakeuser,
      video,
    });
  }
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pagetitle: "page not find" });
  } else {
    return res.render("edit", {
      pagetitle: `edit ${video.title}`,
      video,
    });
  }
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.exists({ _id: id });
  const { title, description, hastags } = req.body;
  if (!video) {
    return res.render("404", { pagetitle: "page not find" });
  }

  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hastags: Video.formatHastags(hastags),
  });

  console.log(title, description, hastags);
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pagetitle: `uploading videos` });
};

export const postUpload = async (req, res) => {
  const { title, description, hastags } = req.body;
  try {
    await Video.create({
      title,
      hastags: Video.formatHastags(hastags),
      description,
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pagetitle: `uploading videos`,
      errorMessage: error._message,
    });
  }
};
