import { agentType } from "../types/agentActionType";

const INITIAL_STATE = {
  agentList: [],
  agentListByName: [],
  // AgentVoice: [],
  agent: { abilities: [] },
  ability: "Ability1",

  favorites: JSON.parse(localStorage.getItem("favorites")),
};
//
// import { SET_AGENT_VOICE } from '../actions/types';
//
// const initialState = null;

// const voiceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_AGENT_VOICE:
//       return { ...state, agent: action.payload };
//     default:
//       return state;
//   }
// };
//
// export default voiceReducer;

export default function reducerAgent(state = INITIAL_STATE, action) {
  switch (action.type) {
    case agentType.SET_LIST: {
      return { ...state, agentList: action.payload };
    }


    case agentType.SET: {
      return { ...state, agent: action.payload };
    }
    // case agentType.SET_AGENT_VOICE: {
    //   return {...state, agent: action.payload};
    // }

    case agentType.SET_LIST_BY_NAME: {
      const agentListByName = state.agentList.filter((agent) =>
        agent.displayName.toLowerCase().includes(action.name.toLowerCase())
      );

      return { ...state, agentListByName };
    }

    case agentType.SET_ABILITY: {
      return { ...state, ability: action.ability };
    }

    case agentType.CHANGE_FAVORITE: {
      let favoritesChange = state.favorites ? state.favorites : [];
      
      let favorite = favoritesChange.find((f) => f.uuid === action.id);

      if (favorite) {
        favoritesChange = favoritesChange.filter((f) => f.uuid !== action.id);
      } else {
        favoritesChange.push(state.agentList.find((f) => f.uuid === action.id));
      }
      console.log(favoritesChange);
      localStorage.setItem("favorites", JSON.stringify(favoritesChange));
      return { ...state, favorites: favoritesChange };
    }
    default:
      return state;
  }
}
