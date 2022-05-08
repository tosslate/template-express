import leancloud from '../utils/leancloud'

export default class UserBookMap extends leancloud.Object {
  get userRef() { return this.get('userRef') }
  set userRef(value) { return this.set('userRef', value) }

  get bookRef() { return this.get('bookRef') }
  set bookRef(value) { return this.set('bookRef', value) }
}
