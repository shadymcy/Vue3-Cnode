import { ref } from "vue";
const searchValue = ref("");
const useSearch = () => {
  const setSearchValue = (value) => {
    // console.log("setSearchValue", value);
    searchValue.value = value;
  };
  const getSearchValue = () => {
    // console.log("getSearchValue", searchValue.value);
    return searchValue.value;
  };
  return { setSearchValue, getSearchValue };
};
export default useSearch;
