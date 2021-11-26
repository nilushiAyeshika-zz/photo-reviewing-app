/**
 * check item is exits
 * @param value
 * @param arr
 */
export const checkValueExits = (value: any, arr: any) => {
  var status = false
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i]
    if (name === value) {
      status = true
      break
    }
  }
  return status
}
