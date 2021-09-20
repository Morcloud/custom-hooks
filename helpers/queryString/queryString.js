export const queryString = (location) => {
    const locationArray = location.replace("?", "").split("&");
    let result = {};
    locationArray.forEach((e) => {
        const [clave, valor] = e.split("=");
        result = { ...result, [clave]: valor };
    });
    return result;
};
