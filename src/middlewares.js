export const localMiddleware = (res,req,next) => {
    // res.locals. siteName = "wetube";
    res.locals.loggedIn = Boolean(req.session.loggedIn)
    next();
}