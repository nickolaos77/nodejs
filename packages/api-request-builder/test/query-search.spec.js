import * as querySearch from '../src/query-search'
import { getDefaultSearchParams } from '../src/default-params'

describe('querySearch', () => {
  let service

  beforeEach(() => {
    service = { params: getDefaultSearchParams(), ...querySearch }
  })

  it('should set the text param', () => {
    service.text('Foo Bar', 'en')
    expect(service.params.search.text).toEqual({
      lang: 'en',
      value: encodeURIComponent('Foo Bar'),
    })
  })

  it('should throw if text params are missing', () => {
    expect(() => service.text()).toThrowError(
      /Required arguments for `text` are missing/
    )
    expect(() => service.text('Foo Bar')).toThrowError(
      /Required arguments for `text` are missing/
    )
  })

  it('should set the fuzzy param', () => {
    service.fuzzy()
    expect(service.params.search.fuzzy).toBeTruthy()
  })

  it('should set the fuzzy level', () => {
    service.fuzzyLevel(2)
    expect(service.params.search.fuzzyLevel).toBe(2)
  })

  it('should throw if fuzzy level is missing', () => {
    expect(() => service.fuzzyLevel()).toThrowError(
      /Required argument for `fuzzyLevel` is missing/
    )
  })

  it('should set the markMatchingVariants parameter', () => {
    service.markMatchingVariants()
    expect(service.params.search.markMatchingVariants).toBeTruthy()
  })

  it('should set the facet param', () => {
    service.facet('categories.id:"123"')
    expect(service.params.search.facet).toEqual([
      encodeURIComponent('categories.id:"123"'),
    ])
  })

  it('should throw if facet is missing', () => {
    expect(() => service.facet()).toThrowError(
      /Required argument for `facet` is missing/
    )
  })

  it('should set the filter param', () => {
    service.filter('categories.id:"123"')
    expect(service.params.search.filter).toEqual([
      encodeURIComponent('categories.id:"123"'),
    ])
  })

  it('should throw if filter is missing', () => {
    expect(() => service.filter()).toThrowError(
      /Required argument for `filter` is missing/
    )
  })

  it('should set the filterByQuery param', () => {
    service.filterByQuery('categories.id:"123"')
    expect(service.params.search.filterByQuery).toEqual([
      encodeURIComponent('categories.id:"123"'),
    ])
  })

  it('should throw if filterByQuery is missing', () => {
    expect(() => service.filterByQuery()).toThrowError(
      /Required argument for `filterByQuery` is missing/
    )
  })

  it('should set the filterByFacets param', () => {
    service.filterByFacets('categories.id:"123"')
    expect(service.params.search.filterByFacets).toEqual([
      encodeURIComponent('categories.id:"123"'),
    ])
  })

  it('should throw if filterByFacets is missing', () => {
    expect(() => service.filterByFacets()).toThrowError(
      /Required argument for `filterByFacets` is missing/
    )
  })
})
