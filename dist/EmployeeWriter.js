"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'shaun', salary: 50000, role: 'web developer' },
    { id: 2, name: 'jay', salary: 250000, role: 'web developer' },
    { id: 3, name: 'toad', salary: 100000, role: 'web developer' },
]);
employeeWriter.save('data/employees.csv');
