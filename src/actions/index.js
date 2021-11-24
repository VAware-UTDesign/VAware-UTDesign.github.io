export const connectToBluetooth = () => {
  return async (dispatch, getState) => {
    const serviceUuid = "e472cea9-3ae8-4d96-951e-7086fe17d416";
    const characteristicUuid = "7abd909a-a9e5-4409-96a9-7aa4fa33426f";
    console.log("Requesting any Bluetooth Device...");
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ name: ["VAware"] }],
      optionalServices: [serviceUuid],
    });

    console.log("Connecting to GATT Server...");
    const server = await device.gatt.connect();

    console.log("Getting Service...");
    const service = await server.getPrimaryService(serviceUuid);

    console.log("Getting Characteristic...");
    const characteristic = await service.getCharacteristic(characteristicUuid);

    console.log("Getting Descriptor...");
    let myDescriptor = await characteristic;

    console.log("Reading Descriptor...");
    const value = await myDescriptor.readValue();

    let decoder = new TextDecoder("utf-8");
    console.log("> Characteristic User Description: " + decoder.decode(value));
    // } catch (error) {
    //   console.log("Argh! " + error);
    // }
    dispatch({
      type: "CONNECT_BLUETOOTH",
      payload: myDescriptor,
    });
  };
};
