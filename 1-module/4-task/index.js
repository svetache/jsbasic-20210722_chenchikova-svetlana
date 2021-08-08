function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');
