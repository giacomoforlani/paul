export const isTouchDevice = process.browser
    && ('ontouchstart' in window
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0
    );
