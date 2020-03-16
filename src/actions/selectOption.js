export const selectOption = (option) => {
    console.log("Choosen option: ", option.title);
    return {
        type: "OPTION_SELECTED",
        payload: option
    }
};