export default (value: string) => {
  if (value.length > 40) {
    return value.substring(0, 40) + "..."
  }
  return value
}
