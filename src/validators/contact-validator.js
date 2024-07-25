import Joi from "joi";

const createContactValidator = Joi.object({
  name: Joi.string().min(3).max(255).required().messages({
    "string.min": "Nama minimal 3 karakter",
    "string.max": "Nama maksimal 255 karakter",
    "any.required": "Nama tidak boleh kosong",
  }),
  gender: Joi.string().min(1).max(255).required().messages({
    "string.min": "Gender minimal 1 karakter",
    "string.max": "Gender maksimal 255 karakter",
    "any.required": "Nama tidak boleh kosong",
  }),
  address: Joi.string().min(5).max(255).required().messages({
    "string.min": "Address minimal 5 karakter",
    "string.max": "Address maksimal 255 karakter",
    "any.required": "Address tidak boleh kosong",
  }),
  email: Joi.string().min(4).max(2555).required().messages({
    "string.min": "Email minimal 8 karakter",
    "string.max": "Email maksimal 255 karakter",
    "any.required": "Email tidak boleh kosong",
  }),
  phone: Joi.string().min(1).max(255).required().messages({
    "string.min": "Phone minimal 1 karakter",
    "string.max": "Phone maksimal 255 karakter",
    "any.required": "Phone tidak boleh kosong",
  }),
  bank_account: Joi.string().min(1).max(255).required().messages({
    "string.min": "Bank account minimal 1 karakter",
    "string.max": "Bank account maksimal 255 karakter",
    "any.required": "Bank account tidak boleh kosong",
  }),
});

const updateContactValidator = Joi.object({
  contact_id: Joi.string().required().messages({
    "any.required": "Contact id tidak boleh kosong",
  }),
  name: Joi.string().min(3).max(255).required().messages({
    "string.min": "Nama minimal 3 karakter",
    "string.max": "Nama maksimal 255 karakter",
    "any.required": "Nama tidak boleh kosong",
  }),
  gender: Joi.string().min(1).max(255).required().messages({
    "string.min": "Gender minimal 1 karakter",
    "string.max": "Gender maksimal 255 karakter",
    "any.required": "Nama tidak boleh kosong",
  }),
  address: Joi.string().min(5).max(255).required().messages({
    "string.min": "Address minimal 5 karakter",
    "string.max": "Address maksimal 255 karakter",
    "any.required": "Address tidak boleh kosong",
  }),
  email: Joi.string().min(4).max(255).required().messages({
    "string.min": "Email minimal 8 karakter",
    "string.max": "Email maksimal 255 karakter",
    "any.required": "Email tidak boleh kosong",
  }),
  phone: Joi.string().min(1).max(255).required().messages({
    "string.min": "Phone minimal 1 karakter",
    "string.max": "Phone maksimal 255 karakter",
    "any.required": "Phone tidak boleh kosong",
  }),
  bank_account: Joi.string().min(1).max(255).required().messages({
    "string.min": "Bank account minimal 1 karakter",
    "string.max": "Bank account maksimal 255 karakter",
    "any.required": "Bank account tidak boleh kosong",
  }),
});

const removeContactValidator = Joi.string().required().messages({
  "any.required": "Bank account tidak boleh kosong",
});

export {
  createContactValidator,
  updateContactValidator,
  removeContactValidator,
};
