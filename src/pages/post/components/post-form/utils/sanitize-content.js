export const sanitizeContent = (text) => {
  return text
    .replace(/<br>/gim, "\n")
    .replace(/<div>/gim, "\n ")
    .replace(/<\/div>/gim, "")
    .replace(/&nbsp;/gim, " ");
};
