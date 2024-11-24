import { expect } from 'vitest'
import  { groupBy, groupByKeys } from './groupBy'

describe('groupBy', () => {
  test('should group objects by organizationId and projectId', () => {
    const data = [
      { organizationId: 1, projectId: 101, name: 'Task A' },
      { organizationId: 1, projectId: 102, name: 'Task B' },
      { organizationId: 2, projectId: 201, name: 'Task C' },
      { organizationId: 1, projectId: 101, name: 'Task D' },
      { organizationId: 2, projectId: 202, name: 'Task E' },
      { organizationId: 1, projectId: 102, name: 'Task F' },
    ]

    const expected = {
      1: {
        101: [
          { organizationId: 1, projectId: 101, name: 'Task A' },
          { organizationId: 1, projectId: 101, name: 'Task D' },
        ],
        102: [
          { organizationId: 1, projectId: 102, name: 'Task B' },
          { organizationId: 1, projectId: 102, name: 'Task F' },
        ],
      },
      2: {
        201: [{ organizationId: 2, projectId: 201, name: 'Task C' }],
        202: [{ organizationId: 2, projectId: 202, name: 'Task E' }],
      },
    }

    expect(groupBy(data)).toEqual(expected)
  })

  test('should handle empty data', () => {
    const data = []
    expect(groupBy(data)).toEqual({})
  })

  test('should handle data with only one organization and project', () => {
    const data = [{ organizationId: 1, projectId: 101, name: 'Task A' }]
    const expected = {
      1: {
        101: [{ organizationId: 1, projectId: 101, name: 'Task A' }],
      },
    }
    expect(groupBy(data)).toEqual(expected)
  })
})

// INFO: Need node.js >= v22 
describe('groupByKeys', () => {
  test('should group objects by organizationId and projectId', () => {
    const data = [
      { organizationId: 1, projectId: 101, name: 'Task A' },
      { organizationId: 1, projectId: 102, name: 'Task B' },
      { organizationId: 2, projectId: 201, name: 'Task C' },
      { organizationId: 1, projectId: 101, name: 'Task D' },
      { organizationId: 2, projectId: 202, name: 'Task E' },
      { organizationId: 1, projectId: 102, name: 'Task F' },
    ]

    const expected = {
      1: {
        101: [
          { organizationId: 1, projectId: 101, name: 'Task A' },
          { organizationId: 1, projectId: 101, name: 'Task D' },
        ],
        102: [
          { organizationId: 1, projectId: 102, name: 'Task B' },
          { organizationId: 1, projectId: 102, name: 'Task F' },
        ],
      },
      2: {
        201: [{ organizationId: 2, projectId: 201, name: 'Task C' }],
        202: [{ organizationId: 2, projectId: 202, name: 'Task E' }],
      },
    }

    expect(groupByKeys(data)).toEqual(expected)
  })

  test('should handle empty data', () => {
    const data = []
    expect(groupByKeys(data)).toEqual({})
  })

  test('should handle data with only one organization and project', () => {
    const data = [{ organizationId: 1, projectId: 101, name: 'Task A' }]
    const expected = {
      1: {
        101: [{ organizationId: 1, projectId: 101, name: 'Task A' }],
      },
    }
    expect(groupByKeys(data)).toEqual(expected)
  })
})
