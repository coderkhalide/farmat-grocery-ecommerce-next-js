export const setBackgroundImage = (url, style) => ({ backgroundImage: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', ...style })

export const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Time ago
export const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " Years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " Months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " Days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " Hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " Minutes";
    }
    return Math.floor(seconds) + " seconds";
}