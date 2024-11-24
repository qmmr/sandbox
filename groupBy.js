function groupBy(data) {
  return data.reduce((result, item) => {
    const { organizationId, projectId } = item

    // Initialize the organization group if it doesn't exist
    if (!result[organizationId]) {
      result[organizationId] = {}
    }

    // Initialize the project group within the organization if it doesn't exist
    if (!result[organizationId][projectId]) {
      result[organizationId][projectId] = []
    }

    // Add the item to the appropriate group
    result[organizationId][projectId].push(item)

    return result
  }, {})
}

function groupByKeys(data) {
  const groupedByOrganization = Object.groupBy(data, (item) => item.organizationId)

  // Group each organization by projectId
  for (const organizationId in groupedByOrganization) {
    groupedByOrganization[organizationId] = Object.groupBy(
      groupedByOrganization[organizationId],
      (item) => item.projectId
    )
  }

  return groupedByOrganization
}

export { groupBy, groupByKeys }
