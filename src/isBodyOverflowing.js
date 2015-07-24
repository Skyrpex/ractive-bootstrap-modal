export default function isBodyOverflowing() {
  let fullWindowWidth = global.innerWidth;
  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    const rect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = rect.right - Math.abs(rect.left);
  }
  return document.body.clientWidth < fullWindowWidth;
};
