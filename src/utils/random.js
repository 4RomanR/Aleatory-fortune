const getElements = (elements) => {
    const phraseRandom = Math.floor(Math.random() * elements.length)
    return elements[phraseRandom]
  }


export { getElements }