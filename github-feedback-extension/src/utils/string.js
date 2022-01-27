export const capitalizeFirst = (str) => {
    if (typeof str != "string") {
        return str;
    } else {
        if (str.length == 0) {
            return str;
        }
    }

    let lower = str.toLocaleLowerCase();

    return `${lower[0].toLocaleUpperCase()}${lower.slice(1)}`;
};