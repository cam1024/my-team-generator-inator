const { test, expect } = require('@jest/globals');
const Employee = require('./Employee');
const Intern = require('./Intern');
// const Engineer = require('../lib/Engineer');
// const Manager = require('../lib/Manager');

test('creates an intern object', () => {
    const intern = new intern('John', 3, 'anotherReal@mail.com', 'role','school');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(3);
    expect(intern.email).toBe('anothorReal@mail.com');
    expect(intern.role).toBe('role');
    expect(intern.school).toBe('2University');
});