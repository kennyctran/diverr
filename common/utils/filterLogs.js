const filterLogs = (selectedTags, logTags) => {
  // iterate through selectedTags
  for (var i = 0; i < Object.keys(selectedTags).length; i++) {
    // if logTags does not include selectedTags[i], return false
    if (!logTags.includes(Object.keys(selectedTags)[i])) {
      return false;
    }
  }
  // return true
  return true;
};
export default filterLogs;
