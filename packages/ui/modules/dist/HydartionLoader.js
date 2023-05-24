"use strict";
exports.__esModule = true;
exports.HydrationLoader = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
exports.HydrationLoader = function () {
    var _a = react_1.useState(false), isHydrated = _a[0], setIsHydrated = _a[1];
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        var handleStart = function () { return setIsHydrated(false); };
        var handleComplete = function () { return setIsHydrated(true); };
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
        return function () {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);
    return (React.createElement("div", null, isHydrated ? (React.createElement("div", null,
        React.createElement("p", null, "Loading..."))) : null));
};
exports["default"] = exports.HydrationLoader;
