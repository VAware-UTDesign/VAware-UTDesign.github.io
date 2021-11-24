const bleConnectReducer = (state, action) => {
  switch (action.type) {
    case "CONNECT_BLUETOOTH":
      return action.payload;
    default:
      return state;
  }
};

export default bleConnectReducer;
