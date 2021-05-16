const slugify = pageTitle => {
  const lowerCaseTitle = pageTitle.toLowerCase()
  const separateTitle = lowerCaseTitle.split(" ")
  const joinUsingHypen = separateTitle.join("-")

  return joinUsingHypen
}

export default slugify
