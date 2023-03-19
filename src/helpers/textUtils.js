// words capitalized
export const capitalizedText = (text) => {
    const splitStr = text?.toLowerCase().split(' ')
    for (let i = 0; i < splitStr?.length; i++) {
      splitStr[i] =
              splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    text = splitStr?.join(' ')
    return text
  }

// first word capitalized
export const capitalizedWord = (text) => {
  const newText = text.charAt(0).toUpperCase() + text.substring(1)
  return newText
}