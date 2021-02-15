module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.addPassthroughCopy({'_source/_assets/images': 'assets'});

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "liquid",
    "njk",
  ]);

  return {
    dir: {
      input: '_source',
      output: '_site'
    },
  };
};
