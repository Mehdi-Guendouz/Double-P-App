import { userType } from ".";

export type historyType = {
  _id: string;
  actionType: string;
  word?: string;
  number?: number;
  description?: string;
  isValid: boolean;
  nearestPerfectNumber?: number;
  user: userType;
};
