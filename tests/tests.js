/**
 * Numbers
 */
QUnit.test("numbers", function(assert) {

    var p = Percentage.num(28, 87);
    assert.equal(p, 32.18, "Percentage.num(28, 87) > result: " + p);

    var p = Percentage.num(28, 87, 10);
    assert.equal(p, 32.183908046, "Percentage.num(28, 87, 10) > result: " + p);
});

/**
 * Dates
 */
QUnit.test("dates", function(assert) {

    var p = Percentage.dates("2013-04-05", "2013", "2014");
    assert.equal(p, 25.80, 'Percentage.dates("2013-04-05", "2013", "2014") > result: ' + p);

    var p = Percentage.dates("2013-04-05 18:36:32", "2013-01-31", "2014-01-01 12:00");
    assert.equal(p, 19.29, 'Percentage.dates("2013-04-05 18:15:05", "2013-01-31", "2015-01-01 12:00") > result: ' + p);
});

/**
 * Times
 */
QUnit.test("times", function(assert) {

    var p = Percentage.times("1h", "1d");
    assert.equal(p, 4.17, 'Percentage.times("1h", "1d") > result: ' + p);

    var p = Percentage.times("3h2min30sec", "1d12h");
    assert.equal(p, 8.45, 'Percentage.times("3h2min30sec", "1d12h") > result: ' + p);

    var p = Percentage.times("1d", "1w");
    assert.equal(p, 14.29, 'Percentage.times("1d", "1w") > result: ' + p);

    var p = Percentage.times("2:00", "12:00");
    assert.equal(p, 16.67, 'Percentage.times("2:00", "12:00") > result: ' + p);

    var p = Percentage.times("5:35:22", "10:00:00");
    assert.equal(p, 55.89, 'Percentage.times("5:35:22", "10:00:00") > result: ' + p);

});

/**
 * Filesize
 */
QUnit.test("filesize", function(assert) {

    var p = Percentage.filesize("11.15 MB", "15 mb");
    assert.equal(p, 74.33, 'Percentage.filesize("11.15 mb", "15 mb") > result: ' + p);

    var p = Percentage.filesize("300mb", "1gb");
    assert.equal(p, 29.3, 'Percentage.filesize("300mb", "1gb") > result: ' + p);

});