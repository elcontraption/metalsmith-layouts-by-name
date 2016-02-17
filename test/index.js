const layouts = require('metalsmith-layouts');
const layoutsByName = require('../src');
const Metalsmith = require('metalsmith');
const should = require('should');
const swig = require('swig');

describe('metalsmith-layouts-by-name', function () {

    it('should allow error if layout is not found', function (done) {
        Metalsmith('test/fixtures')
            .clean(true)
            .source('missing')
            .use(layoutsByName())
            .use(layouts({
                engine: 'swig'
            }))
            .build(function (err) {
                err.should.be.an.Object();
                done();
            });
    });

    it('should find non-nested layout', function (done) {
        Metalsmith('test/fixtures')
            .clean(true)
            .source('non-nested')
            .destination('expected')
            .use(layoutsByName())
            .use(layouts({
                engine: 'swig'
            }))
            .build(function (err) {
                should.not.exist(err);
                done();
            });
    });

    it('should find nested layout', function (done) {
        Metalsmith('test/fixtures')
            .clean(true)
            .source('nested')
            .destination('expected')
            .use(layoutsByName())
            .use(layouts({
                engine: 'swig'
            }))
            .build(function (err) {
                should.not.exist(err);
                done();
            });
    });

});