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

function isObject(item) {
  if (Array.isArray(item)) {
    return false
  }
  if (item == null) {
    return false
  }
  return typeof item == 'object'
}

export { formatNumber, isObject }
