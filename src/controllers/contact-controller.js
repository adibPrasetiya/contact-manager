import { decryptData, encryptData } from "../app/vault.js";
import contactModel from "../models/contact-model.js";

const get = async (req, res, next) => {
  try {
    const result = await contactModel.get();
    const contacts = await Promise.all(
      result.map(async (item) => {
        item.name = await decryptData(item.name);
        item.gender = await decryptData(item.gender);
        item.address = await decryptData(item.address);
        item.phone = await decryptData(item.phone);
        item.email = await decryptData(item.email);
        item.bank_account = await decryptData(item.bank_account);
      })
    );
    return res.render("contacts/index", { contacts: result });
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
  try {
    const reqBody = req.body;
    reqBody.name = await encryptData(reqBody.name);
    reqBody.gender = await encryptData(reqBody.gender);
    reqBody.address = await encryptData(reqBody.address);
    reqBody.phone = await encryptData(reqBody.phone);
    reqBody.email = await encryptData(reqBody.email);
    reqBody.bank_account = await encryptData(reqBody.bank_account);
    await contactModel.create(reqBody);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const reqBody = req.body;
    reqBody.name = await encryptData(reqBody.name);
    reqBody.gender = await encryptData(reqBody.gender);
    reqBody.address = await encryptData(reqBody.address);
    reqBody.phone = await encryptData(reqBody.phone);
    reqBody.email = await encryptData(reqBody.email);
    reqBody.bank_account = await encryptData(reqBody.bank_account);
    await contactModel.update(req.params.contactId, reqBody);
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
  update,
  remove,
};
