export const addEllipsis = (text) => {
    if (text.length > 45) {
        return text.substring(0, 45) + '...';
    }
    return text
}