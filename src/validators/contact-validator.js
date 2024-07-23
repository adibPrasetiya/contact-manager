import Joi from "joi";

const createContactValidator = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .regex(/^[a-zA-Z ]*$/)
    .required()
    .messages({
      "string.min": "Nama minimal 3 karakter",
      "string.max": "Nama maksimal 100 karakter",
      "string.pattern.base":
        "Nama hanya terdiri atas huruf besar dan kecil serta spasi",
      "any.required": "Nama tidak boleh kosong",
    }),
  gender: Joi.string()
    .min(1)
    .max(20)
    .regex(/^[a-zA-Z ]*$/)
    .required()
    .messages({
      "string.min": "Gender minimal 1 karakter",
      "string.max": "Gender maksimal 20 karakter",
      "string.pattern.base":
        "Gender hanya terdiri atas huruf besar dan kecil serta spasi",
      "any.required": "Nama tidak boleh kosong",
    }),
  address: Joi.string()
    .min(5)
    .max(100)
    .regex(/^[a-zA-Z0-9., ]*$/)
    .required()
    .messages({
      "string.min": "Address minimal 5 karakter",
      "string.max": "Address maksimal 100 karakter",
      "string.pattern.base":
        "Address hanya terdiri atas huruf besar, kecil, angka, titik, koma serta spasi",
      "any.required": "Address tidak boleh kosong",
    }),
  email: Joi.string().email().min(4).max(100).required().messages({
    "string.min": "Email minimal 8 karakter",
    "string.max": "Email maksimal 100 karakter",
    "any.required": "Email tidak boleh kosong",
  }),
  phone: Joi.string()
    .min(1)
    .max(30)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.min": "Phone minimal 1 karakter",
      "string.max": "Phone maksimal 30 karakter",
      "string.pattern.base": "Phone hanya terdiri atas angka",
      "any.required": "Phone tidak boleh kosong",
    }),
  bank_account: Joi.string()
    .min(1)
    .max(30)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.min": "Bank account minimal 1 karakter",
      "string.max": "Bank account maksimal 30 karakter",
      "string.pattern.base": "Bank account hanya terdiri atas angka",
      "any.required": "Bank account tidak boleh kosong",
    }),
});

const updateContactValidator = Joi.object({
  contact_id: Joi.string().required().messages({
    "any.required": "Bank account tidak boleh kosong",
  }),
  name: Joi.string()
    .min(3)
    .max(100)
    .regex(/^[a-zA-Z ]*$/)
    .required()
    .messages({
      "string.min": "Nama minimal 3 karakter",
      "string.max": "Nama maksimal 100 karakter",
      "string.pattern.base":
        "Nama hanya terdiri atas huruf besar dan kecil serta spasi",
      "any.required": "Nama tidak boleh kosong",
    }),
  gender: Joi.string()
    .min(1)
    .max(20)
    .regex(/^[a-zA-Z ]*$/)
    .required()
    .messages({
      "string.min": "Gender minimal 1 karakter",
      "string.max": "Gender maksimal 20 karakter",
      "string.pattern.base":
        "Gender hanya terdiri atas huruf besar dan kecil serta spasi",
      "any.required": "Nama tidak boleh kosong",
    }),
  address: Joi.string()
    .min(5)
    .max(100)
    .regex(/^[a-zA-Z0-9., ]*$/)
    .required()
    .messages({
      "string.min": "Address minimal 5 karakter",
      "string.max": "Address maksimal 100 karakter",
      "string.pattern.base":
        "Address hanya terdiri atas huruf besar, kecil, angka, titik, koma serta spasi",
      "any.required": "Address tidak boleh kosong",
    }),
  email: Joi.string().email().min(4).max(100).required().messages({
    "string.min": "Email minimal 8 karakter",
    "string.max": "Email maksimal 100 karakter",
    "any.required": "Email tidak boleh kosong",
  }),
  phone: Joi.string()
    .min(1)
    .max(30)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.min": "Phone minimal 1 karakter",
      "string.max": "Phone maksimal 30 karakter",
      "string.pattern.base": "Phone hanya terdiri atas angka",
      "any.required": "Phone tidak boleh kosong",
    }),
  bank_account: Joi.string()
    .min(1)
    .max(30)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.min": "Bank account minimal 1 karakter",
      "string.max": "Bank account maksimal 30 karakter",
      "string.pattern.base": "Bank account hanya terdiri atas angka",
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
