import { agentType } from "../types/agentActionType";
import { viewType } from "../types/viewActionType";

import { default as agentServices } from "../services/agentStreaming/index";
export const setAgentList = () => async (dispatch) => {
  dispatch({ type: viewType.LOADING });

  try {
    await agentServices.getAgentList().then(function (response) {
      dispatch({
        type: agentType.SET_LIST,
        payload: response.data.data,
      });
      dispatch({ type: viewType.LOADED });
    });
  } catch (error) {
    console.error(error);
  }
};
export const setAgent = (id) => async (dispatch) => {
  dispatch({ type: viewType.LOADING });
  try {
    await agentServices.getAgent(id)
    .then(function (response) {
      dispatch({
        type: agentType.SET,
        payload: response.data.data,
      });
      dispatch({ type: viewType.LOADED });
    });
  } catch (error) {
    console.error(error);
  }
};

export const setAbility = (ability) => async (dispatch) => {
  dispatch({
    type: agentType.SET_ABILITY,
    ability: ability,
  });
};


export const changeFavorite = (id) => async (dispatch) => {
  dispatch({
    type: agentType.CHANGE_FAVORITE,
    id: id,
  });
};

export const setAgentListByName = (name) => async (dispatch) => {
  dispatch({
    type: agentType.SET_LIST_BY_NAME,
    name: name,
  });
};



