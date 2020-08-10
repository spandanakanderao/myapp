/**
 * Mocking client-server processing
 */

const TIMEOUT = 10

export const api = {
  getData() {
    return new Promise(resolve => {
      setTimeout(() => resolve('http://jsonplaceholder.typicode.com/posts'), TIMEOUT)
    })
  }
}
