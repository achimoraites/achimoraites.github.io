

export default {
    setParams,
};

function setParams(values: Record<string, string>, $window = window): void {
    const url = new URL($window.location.toString());
    for (const [k, v] of Object.entries(values)) {
        if (v) {
            url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
        } else {
            url.searchParams.delete(k);
        }
    }
    history.replaceState({}, '', url);
};

