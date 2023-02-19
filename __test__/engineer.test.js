const { test, expect } = require('@jest/globals');
//const Employee = require('../lib/Employee');
// const Intern = require('../lib/Intern');
const Engineer = require('./lib/Engineer');
// const Manager = require('../lib/Manager');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Alec', 2, 'alsoreal@mail.com', 'role','github');

    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('alsoreal@mail.com');
    expect(engineer.role).toBe('role');
    expect(engineer.github).toBe('github');
});