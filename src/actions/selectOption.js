export const selectOption = (options = []) => {
    console.log("Choosen option: ", options);
    return {
        type: "OPTION_SELECTED",
        options
    }
};