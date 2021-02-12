const sort = (oriArr, sortStr) => {
  if(typeof oriArr !== 'object') return throw new TypeError()
  if(typeof sortStr !== 'string') return throw new TypeError()
  
  const newArray = Array.from(oriArr)
  if(sortStr === 'asc') {
    newArray.sort((a, b) => {
      if(typeof a === 'number' && typeof b === 'number') {
        return a - b
      } else if(typeof a === 'string' && typeof b === 'string') {
        const propA = a.toLowerCase()
        const propB = b.toLowerCase()
        let propRes = 0
          
        if(propA < propB) {
          propRes = -1
        } else if(propA > propB) {
          propRes = 1
        }
        return propRes
      }
    })
  } else if(sortStr === 'desc') {
    newArray.sort((a, b) => {
      if(typeof a === 'number' && typeof b === 'number') {
        return b - a
      } else if(typeof a === 'string' && typeof b === 'string') {
        const propA = a.toLowerCase()
        const propB = b.toLowerCase()
        let propRes = 0
          
        if(propB < propA) {
          propRes = -1
        } else if(propB > propA) {
          propRes = 1
        }
        return propRes
      }
    })
  }
  return newArray
}

const sorted = (oriArr) => {
  if(typeof oriArr !== 'object') return throw new TypeError()
  
  return (propStr, sortStr) => {
    if(typeof propStr !== 'string') return throw new TypeError()
    if(typeof sortStr !== 'string') return throw new TypeError()
    
    const newArray = Array.from(oriArr)
    if(sortStr === 'asc') {
      newArray.sort((a, b) => {
        if(propStr in a && propStr in b && typeof a[propStr] === 'number' && typeof b[propStr] === 'number') {
          return a[propStr] - b[propStr]
        } else if(propStr in a && propStr in b && typeof a[propStr] === 'string' && typeof b[propStr] === 'string') {
          const propA = a[propStr].toLowerCase()
          const propB = b[propStr].toLowerCase()
          let propRes = 0
          
          if(propA < propB) {
            propRes = -1
          } else if(propA > propB) {
            propRes = 1
          }
          return propRes
        }
      })
    } else if(sortStr === 'desc') {
      newArray.sort((a, b) => {
        if(propStr in a && propStr in b && typeof a[propStr] === 'number' && typeof b[propStr] === 'number') {
          return b[propStr] - a[propStr]
        } else if(propStr in a && propStr in b && typeof a[propStr] === 'string' && typeof b[propStr] === 'string') {
          const propA = a[propStr].toLowerCase()
          const propB = b[propStr].toLowerCase()
          let propRes = 0
          
          if(propB < propA) {
            propRes = -1
          } else if(propB > propA) {
            propRes = 1
          }
          return propRes
        }
      })
    }
    return newArray
  }
}

export {
  sort,
  sorted
}
