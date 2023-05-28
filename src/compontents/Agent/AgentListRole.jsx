import React, { useEffect } from "react";
import { connect } from "react-redux";
import AgentList from "./AgentList";
import { useDispatch } from "react-redux";
import { setAgentList } from "../../actions";
import { useParams } from "react-router-dom";

const AgentListRole = (props) => {
  let params = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    if (!props.data.agentList?.length) {
      dispatch(setAgentList());
    }
  }, [dispatch, props.data.agentList]);
  return (
    <AgentList
      agents={props.data.agentList.filter(
        (agent) =>
          agent.role.displayName.toLowerCase() === params.role.toLowerCase()
      )}
    />
  );
};

const stateMapToPros = (state) => {
  return {
    data: {
      loading: state.view.loading,
      agentList: state.agent.agentList,
    },
  };
};

export default connect(stateMapToPros)(AgentListRole);
