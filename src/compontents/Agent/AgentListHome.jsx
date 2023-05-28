import React, { useEffect } from "react";
import { connect } from "react-redux";
import AgentList from "./AgentList";
import { useDispatch } from "react-redux";
import { setAgentList } from "../../actions";

const AgentListHome = (props) => {
  let dispatch = useDispatch();
  
  useEffect(() => {
    if (!props.data.agentList?.length) {
      dispatch(setAgentList());
    }
  }, [dispatch, props.data.agentList]);

  return <AgentList agents={props.data.agentList} />;
};

const stateMapToPros = (state) => {
  return {
    data: {
      loading: state.view.loading,
      agentList: state.agent.agentList,
    },
  };
};

export default connect(stateMapToPros)(AgentListHome);
