type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;

const engLead: TeamLead = {
    name: 'Alice',
    startDate: new Date(),
    department: 'Engineering'
}

console.log(typeof engLead); // object