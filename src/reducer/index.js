const INITIAL_STATE = {
  isConnected: false,
  connectDevice: {},
  characteristic: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CONNECT_BLUETOOTH":
      return {
        isConnected: true,
        connectDevice: action.payload,
        characteristic: action.payload,
      };
    case "ACTIVATE_PNEUMATIC":
      console.log(state);
      return {
        isConnected: true,
        connectDevice: state.connectDevice,
        characteristic: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
