const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2021-09-06 20:08:03');
    expect(format_date(date)).toBe('9/6/2021');
});