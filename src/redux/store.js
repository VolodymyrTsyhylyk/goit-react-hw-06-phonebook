import { configureStore } from "@reduxjs/toolkit";
import contacts from "./contacts-reducers";

export default configureStore({ reducer: contacts });
