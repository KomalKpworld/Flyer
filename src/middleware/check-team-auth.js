const jwt = require("jsonwebtoken");
const { getTeamById } = require("../helpers/team");
const { getUserByIdAndWorkspaceId } = require("../helpers/user");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) return res.status(200).json({ err: "Authentication Failed!" });

    const decodedData = jwt.verify(token, process.env.JWT_KEY);
    let user = await getUserByIdAndWorkspaceId(
      decodedData?.id,
      decodedData?.workspace_id
    );
    if (!user) return res.status(200).json({ err: "Authentication Failed!" });

    if (!user?.isadmin) {
      const { id } = req.params;
      const { team } = await getTeamById(id);

      if (
        !user?.isadmin &&
        !team?.created_by === user?.id &&
        !team?.manager === user?.id
      ) {
        return res.status(200).json({ err: "Authentication Failed!" });
      }
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(200).json({ err: "Authentication Failed!" });
  }
};
