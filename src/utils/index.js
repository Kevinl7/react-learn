export const formDate = (time) => {
  if (!time) { return '' }
  else {
    let times = new Date(time)
    return `${times.getFullYear()} - ${(times.getMonth() + 1)} - ${times.getDate()}
    ${times.getHours()}: ${times.getMinutes()}:${times.getSeconds()}`
  }
}