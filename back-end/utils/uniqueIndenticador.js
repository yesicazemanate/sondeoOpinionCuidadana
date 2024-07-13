export const generateUniqueId = () => {
    const timestampPart = Date.now().toString().substr(-6);
    return timestampPart;
};