import * as constants from '../constants';
import { action } from 'typesafe-actions';

export const addCount = (amount: number) => action(constants.INCREMENT, amount);