import { prismaClient } from "../app/database.js";
import {
  createContactValidator,
  removeContactValidator,
  updateContactValidator,
} from "../validators/contact-validator.js";
import { validate } from "../validators/validator.js";
import { ResponseError } from "../errors/response-error.js";

const create = async (reqBody) => {
  reqBody = validate(createContactValidator, reqBody);

  const countContact = await prismaClient.contacts.count({
    where: {
      name: reqBody.name,
    },
  });

  if (countContact !== 0) {
    throw new ResponseError(400, "Nama kontak sudah terdaftar");
  }

  await prismaClient.contacts.create({
    data: reqBody,
  });

  return "Kontak sudah terdaftar";
};

const get = async () => {
  // hanya untuk pembelajaran, harus ada pagination
  const contacts = await prismaClient.contacts.findMany();
  return contacts;
};

const update = async (reqBody) => {
  reqBody = validate(updateContactValidator, reqBody);

  const countContact = await prismaClient.contacts.count({
    where: {
      contact_id: reqBody.contact_id,
    },
  });

  if (countContact !== 1) {
    throw new ResponseError(404, "Contact tidak ditemukan");
  }

  await prismaClient.contacts.update({
    where: {
      contact_id: reqBody.contact_id,
    },
    data: {
      name: reqBody.name,
      gender: reqBody.gender,
      address: reqBody.address,
      email: reqBody.email,
      phone: reqBody.phone,
      bank_account: reqBody.bank_account,
    },
  });

  return "Contact updated";
};

const remove = async (contactId) => {
  contactId = validate(removeContactValidator, contactId);

  const countContact = await prismaClient.contacts.count({
    where: {
      contact_id: contactId,
    },
  });

  if (countContact !== 1) {
    throw new ResponseError(404, "Contact tidak ditemukan");
  }

  await prismaClient.contacts.delete({
    where: {
      contact_id: contactId,
    },
  });

  return "Contact berhasil dihapus";
};

export default {
  create,
  get,
  update,
  remove,
};
