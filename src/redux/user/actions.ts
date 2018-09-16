import * as constants from "./constants";
import { action } from "typesafe-actions";

export const signUpRequest = (amount: number) =>
  action(constants.SIGN_UP_REQUEST, amount);

export const signUpSuccess = (amount: number) =>
  action(constants.SIGN_UP_SUCCESS, amount);
