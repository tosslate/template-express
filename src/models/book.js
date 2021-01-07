import leancloud from '../utils/leancloud'

export default class Book extends leancloud.Object {
  get title() { return this.get('title') }
  set title(value) { return this.set('title', value) }

  get subtitle() { return this.get('subtitle') }
  set subtitle(value) { return this.set('subtitle', value) }

  get summary() { return this.get('summary') }
  set summary(value) { return this.set('summary', value) }

  get author() { return this.get('author') }
  set author(value) { return this.set('author', value) }

  get translator() { return this.get('translator') }
  set translator(value) { return this.set('translator', value) }

  get isbn10() { return this.get('isbn10') }
  set isbn10(value) { return this.set('isbn10', value) }

  get isbn13() { return this.get('isbn13') }
  set isbn13(value) { return this.set('isbn13', value) }

  get images() { return this.get('images') }
  set images(value) { return this.set('images', value) }

  get publisher() { return this.get('publisher') }
  set publisher(value) { return this.set('publisher', value) }

  get pubdate() { return this.get('pubdate') }
  set pubdate(value) { return this.set('pubdate', value) }

  get price() { return this.get('price') }
  set price(value) { return this.set('price', value) }
}
