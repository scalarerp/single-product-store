import React from "react";
import { VariationKeys } from "./../themes/variations";
import { StoreInfo } from "./../themes/info";

type ContextProps = {
  isSaveModalOpen: boolean;
  // TODO replace number with variation type
  selectedVariations: { [key in VariationKeys]: any };
  storeInfo: StoreInfo;
};

// TODO how to typescript a specific payload with a type? Maybe union types of objects?
type Action = {
  type:
    | "TOGGLE_SAVE_MODAL"
    | "UPDATE_EMAIL"
    | "UPDATE_VARIATION"
    | "SET_PRESET_THEME"
    | "UPDATE_STORE_INFO";
  payload: any;
};

// Context
const State = React.createContext<Partial<ContextProps>>(null);
const Dispatch = React.createContext<React.Dispatch<Action>>(null);

// Reducer
const reducer = (state, action: Action) => {
  switch (action.type) {
    case "TOGGLE_SAVE_MODAL":
      return {
        ...state,
        isSaveModalOpen: action.payload
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payload
      };
    case "UPDATE_VARIATION":
      return {
        ...state,
        selectedVariations: {
          ...state.selectedVariations,
          [action.payload.key]: action.payload.variation
        }
      };
    case "SET_PRESET_THEME":
      return {
        ...state,
        // TODO: better way to update all of the keys? Maybe store keys all in one place
        selectedVariations: {
          header: action.payload,
          background: action.payload
        }
      };
    case "UPDATE_STORE_INFO":
      return {
        ...state,
        storeInfo: {
          ...state.storeInfo,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

// Provider
const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isSaveModalOpen: false,
    selectedVariations: {},
    // TODO: use defaults in info.tsx as well
    storeInfo: {}
  });

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

// Export
export const Store = {
  State,
  Dispatch,
  Provider
};