import responseHandler from "../handlers/response.handler.js";
import watchModel from "../models/watch.model.js";

const addWatch = async (req, res) => {
  try {
    const isWatch = await watchModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (isWatch) return responseHandler.ok(res, isWatch);

    const watch = new watchModel({
      ...req.body,
      user: req.user.id
    });

    await watch.save();

    responseHandler.created(res, watch);
  } catch {
    responseHandler.error(res);
  }
};

const removeWatch = async (req, res) => {
  try {
    const { watchId } = req.params;

    const watch = await watchModel.findOne({
      user: req.user.id,
      _id: watchId
    });

    if (!watch) return responseHandler.notfound(res);

    await watch.remove();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getWatchOfUser = async (req, res) => {
  try {
    const watch = await watchModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, watch);
  } catch {
    responseHandler.error(res);
  }
};

export default { addWatch, removeWatch, getWatchOfUser };