import { User } from "./user";

export type StackProps = {
  Home: undefined;
  Profile: { user: User };
}