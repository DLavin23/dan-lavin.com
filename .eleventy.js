module.exports = function(eleventyConfig) {

  /* --------------------------------------------------------------------------
  11ty settings
  -------------------------------------------------------------------------- */
  eleventyConfig.addPassthroughCopy({'source/assets/images': 'assets'});
  eleventyConfig.addPassthroughCopy({'source/assets/css': 'assets'});
  eleventyConfig.addPassthroughCopy({'source/assets/js': 'assets'});
  eleventyConfig.addPassthroughCopy({'node_modules/modern-normalize/*.css': 'assets'});

  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "liquid",
    "njk",
  ]);

  return {
    dir: {
      input: 'source',
      output: '_site'
    },
  };
};
