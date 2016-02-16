const defaults = require('lodash/defaults');
const fs = require('fs');
const path = require('path');

module.exports = plugin;

/**
 * Rewrites layout attribute to
 *
 * - sees `layout: name`:
 *     - first checks for `layouts/name.html`.
 *     - then checks for `layouts/name/index.html`.
 * - replaces layout attribute accordingly.
 */
function plugin(opts) {

    var opts = defaults(opts || {}, {
        directory: 'layouts'
    });

    return function (files, metalsmith, done) {

        for (file in files) {
            if (files[file].layout) {
                findAndSetLayout(files, file, files[file]);
            }
        }

        done();
    };

    function findAndSetLayout(files, filepath, file) {
        var layout;

        // Check if the given layout exists
        if (layoutExists(file.layout)) {

            // Layout exists, do nothing
            return;
        }

        // Check for `[layout].html`
        if (layoutExists(file.layout + '.html')) {
            file.layout = file.layout + '.html';
            return;
        }

        // Check for `[layout]/index.html`
        if (layoutExists(path.join(file.layout, 'index.html'))) {
            file.layout = path.join(file.layout, 'index.html');
        }

        // Allow error if no layout was found
    }

    /**
     * Check if a layout exists
     *
     * @param  {String} layout
     * @return {Boolean}
     */
    function layoutExists(layout) {
        try {
            var stat = fs.statSync(path.join(opts.directory, layout));
            return stat.isFile();
        }
        catch (e) {
            return false;
        }
    }
}
