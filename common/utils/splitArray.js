const splitArrayRows = (array, rowLength) => {
  var result = [];
  var rows = Math.ceil(array.length / rowLength);
  var currentEle = 0;
  for (var i = 0; i < rows; i++) {
    var row = [];

    if (i !== rows - 1) {
      for (var j = 0; j < rowLength; j++) {
        row.push(array[currentEle]);
        currentEle++;
      }
    } else {
      while (currentEle !== array.length) {
        row.push(array[currentEle]);
        currentEle++;
      }
    }
    result.push(row);
  }
  return result;
};
export default splitArrayRows;
