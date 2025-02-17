import User from "../models/Users";
import bcrypt from "bcrypt"

export const getJoin = (req, res) => res.render("join", { pagetitle: "join" });
export const postJoin = async(req, res) => {
    const { name, username, email, password, password2, location } = req.body
    if (password !== password2) {
        return res.render("join",{pagetitle:"join",errorMessage:"비밀번호가 일치하지 않습니다."})
    }
    const exits = await User.exists({ $or: [{ username, name }] });
    if (exits) {
        return res.status(400).render("join",{pagetitle:"join",errorMessage:"이미 존재하는 유저이름/이메일입니다."})
    }
    try {
        await User.create({
            name,username, email,password,location
        })
        res.redirect("/login")
    } catch (error) {
        console.log(error);
        return res.render("join", {
          pagetitle: `join videos`,
          errorMessage: error._message,
        });

    }
};
export const getLogin = (req, res) => res.render("login",{pagetitle:"login"});
export const postLogin = async (req, res) => {
    const {username, password} = req.body
    // check if accoutn exsit
    const user = await User.findOne({ username })
    if (!user) {
        return res.status(400).render("login", { errorMessage: "유저이름이 존재하지 않아요" })
    }
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
        return  res.status(400).render("login", { errorMessage: "비밀번호가 일치하지 않아요" })
    }
    console.log("log user in!")
    req.session.loggedIn = true
    req.session.user = user
    return res.redirect("/")
};
export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("remove");
export const see = (req, res) => res.send("see");
export const logout = (req, res) => res.send("logout");
