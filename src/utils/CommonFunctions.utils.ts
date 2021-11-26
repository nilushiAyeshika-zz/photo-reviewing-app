/**
 * check item is exits
 * @param value
 * @param arr
 */
export const checkValueExits = (value: string, arr: any) => {
  var status = false
  for (var i = 0; i < arr.length; i++) {
    var id = arr[i]
    if (id === value) {
      status = true
      break
    }
  }
  return status
}
