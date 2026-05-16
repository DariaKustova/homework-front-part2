import {UserType} from "../HW8";

type ActionType =
  | {type: "sort"; payload: "up" | "down"}
  | {type: "check"; payload: number};

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType,
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      const sortResult = [...state].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      // by name
      return action.payload === "down" ? sortResult.reverse() : sortResult; // need to fix
    }
    case "check": {
      return state.filter((u) => u.age >= 18);
    }
    default:
      return state;
  }
};
