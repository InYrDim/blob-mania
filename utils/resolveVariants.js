// return string of variants names
// used for *.module.css classname
// example input: ["varints1" , "variants2"] -> output string: "varints1 variants2"

export function resolveVariants({ style, variant = [] }) {
  if (typeof variant === typeof "") {
    return style[variant];
  }
  return variant.reduce((total, val) => {
    // check for classes inside style.module.css, only add if it exists
    if (style[val] === undefined) return total;
    return `${total} ${style[val]}`;
  }, "");
}
