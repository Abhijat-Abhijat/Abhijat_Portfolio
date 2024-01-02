const throttle = (func: (e: { clientX: number; clientY: number }) => void, limit: number) => {
    let throttling = false;

    return function (this: any, e: { clientX: number; clientY: number }) {
        const args = arguments;

        if (!throttling) {
            func.apply(this, [e]); // Pass the argument as an array with a single element
            throttling = true;
            setTimeout(() => (throttling = false), limit);
        }
    };
};

export default throttle;