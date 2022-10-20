export const setBackgroundImage = (url, style) => ({ backgroundImage: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', ...style })

export const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}