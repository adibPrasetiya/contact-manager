import contactModel from "../models/contact-model.js";

const get = async (req, res, next) => {
  try {
    const result = await contactModel.get();
    return res.render("contacts/index", { contacts: result });
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
  try {
    await contactModel.create(req.body);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await contactModel.remove(contactId);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

export default {
  get,
  post,
  remove,
};
