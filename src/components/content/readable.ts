import { lbSourceJson } from '@/assets/constants'
import { demoData } from '@/assets/demo'

export const readableContent = async (
  response: (data: typeof demoData) => void,
  uri: string = lbSourceJson,
) =>
  fetch(uri, {
    method: 'GET',
    mode: 'cors',
  })
    .then((data) => data.json())
    .then((data) => response(data))

export const fetchDemoData = (response: (data: typeof demoData) => void) =>
  response(demoData)
