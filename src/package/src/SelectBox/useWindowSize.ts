import * as React from 'react';

export function useWindowSize() {
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    const [windowSize, setWindowSize] = React.useState(getSize);

    React.useEffect(function() {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}
