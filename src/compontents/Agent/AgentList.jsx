
import AgentCard from "./AgentCard";


const AgentList = (agents) => {
  console.log(agents)
  return (
    <div className="agent-list">
      {agents.agents?.map((agent, index) => (
        <AgentCard
          id={agent.uuid}
          image={agent.displayIcon}
          name={agent.displayName}
          role={{
            name: agent.role.displayName,
            icon: agent.role.displayIcon,
          }}
          key={index}
        ></AgentCard>
      ))}
    </div>
  );
};

export default AgentList;
