import dotenv from "dotenv";
dotenv.config();

export const dbURI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/onedayin";
export const port = process.env.PORT || 4000;
export const secret = process.env.SECRET || "Ind1@n@J0ne5";
