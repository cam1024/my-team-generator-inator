const { test, expect } = require('@jest/globals');
//const Employee = require('../lib/Employee');
// const Intern = require('../lib/Intern');
// const Engineer = require('../lib/Engineer');
const Manager = require('./Manager');

test('creates an manager object', () => {
    const manager = new manager('Jared', 1, 'alsoanotherReal@mail.com', 'role');

    expect(manager.name).toBe('Jared');
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe('alsoanotherReal@mail.com');
    expect(manager.role).toBe('role');
    expect(manager.officeNumber).toBe('202');
});