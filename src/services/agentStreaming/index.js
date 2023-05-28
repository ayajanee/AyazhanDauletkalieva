import axios from "../config";

export const agentStreamingServices = () => {
  const getAgentList = () => {
    return axios({
      method: "GET",
      url: "/agents?language=en-US&&isPlayableCharacter=true",
    });
  };
  const getAgent = (id) => {
    return axios({
      method: "GET",
      url: "/agents/" + id + "?language=en-US",
    });
  };
  const getAgentListByName = (name) => {
    return axios ({
      method: "GET",
      url: "/agents/" + name + "?language=en-US",
    });
  };

  // const getAgentVoice = (id) => {
  //   return axios({
  //     method: "GET",
  //     url: "https://valorant-api.com/v1/agents/" + id + "?language=en-US",
  //   })
  //       .then((response) => {
  //         // Extract the voice data from the response
  //         const voiceData = response.data.data.voiceLine.mediaList[0].wave;
  //
  //         // Return the voice data
  //         return voiceData;
  //       })
  //       .catch((error) => {
  //         // Handle any errors
  //         console.error("Error retrieving agent voice:", error);
  //       });
  // };

  return {
    getAgentList,
    getAgent,
    getAgentListByName
  };
};

export default agentStreamingServices();
