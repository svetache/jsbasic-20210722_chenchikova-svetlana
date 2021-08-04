function ucFirst(str) {
  if (!str) return str;
  let newString = str[0].toUpperCase() + str.slice(1)
  return newString
}

ucFirst('вася');
