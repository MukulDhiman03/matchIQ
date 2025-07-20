const adminAuth = (req, res, next) => {
  console.log("Admin auth checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(400).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(400).send("Unauthorized request");
  } else {
    next();
  }
};
module.exports = {
  adminAuth,
  userAuth,
};
