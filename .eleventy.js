const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPlugin(syntaxHighlight,{
  	templateFormats: ["*"], // default
  });
  return {
    passthroughFileCopy: true
  }
}