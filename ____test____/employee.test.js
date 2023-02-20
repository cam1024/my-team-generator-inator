const { test, expect } = require('@jest/globals');
const Employee = require('./Employee');

test('creates an Employee object', () => {
    const employee = new Employee('tammmer', 1, 'real@mail.com', 'role');

    expect(employee.name).toBe('tammmer');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('real@mail.com');
    expect(employee.role).toBe('role');
});