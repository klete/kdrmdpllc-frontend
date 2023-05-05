const formatNumber = (num) => {
  if (typeof num == 'string') {
    num = Number(num)
    if (Number.isNaN(num)) return null
  }
  if (typeof num == 'number') {
    return num.toLocaleString()
  }

  return null
}

export { formatNumber }
