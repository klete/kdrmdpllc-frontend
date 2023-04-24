import { v4 as uuidv4 } from 'uuid'

function getUniqueID() {
  return uuidv4()
}

export default getUniqueID
