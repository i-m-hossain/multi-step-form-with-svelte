import { push } from "svelte-spa-router";
import { writable } from "svelte/store";
const currentPageFromLS = JSON.parse(localStorage.getItem("currentPage"));
export const currentPage = writable(parseInt(currentPageFromLS) || 1);

export const pageMap = {
    1: "/setup-factory",
    2: "/floor",
    3: "/camera",
    4: "/employee",
    5: "/machine",
    6: "/schedule",
};

export const moveToNextPage = () => {
    currentPage.update((current) => {
        if (current < 6) {
            push(pageMap[current + 1]);
            localStorage.setItem("currentPage", JSON.stringify(current + 1));
            return current + 1;
        }
        return current;
    });
};
export const moveToPrevPage = () => {
    currentPage.update((current) => {
        if (current > 1) {
            push(pageMap[current - 1]);
            localStorage.setItem("currentPage", JSON.stringify(current - 1));
            return current - 1;
        }
        return current;
    });
};
export const moveToHomePage = () => {
    push("/");
};
