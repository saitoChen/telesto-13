export function nowDate(){
  const date = new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
}

export function formateDate(time) {
  let date = new Date(parseInt(time))
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}