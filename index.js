const fs = require('fs');
const inquirer = require('inquirer');
// const generateSite = require('./utils/generate-site.js');
// const pageTemplate = require('./src/page-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamArr = [];

function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is this engineer's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        } else {
          return "Please provide an engineer name";
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this engineer's ID number?",
      validate: answer => {
        if (answer !== null) {
          return true;
        } else {
          return "Please enter an ID number";
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is this engineer's email address?",
      validate: emailInput => {
        if (emailInput !== "") {
          return true;
        } else {
          return "Please submit an email address";
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is this engineer's github username?",
      validate: githubInput => {
        if (githubInput !== "") {
          return true;
        } else {
          return "Do you really not know your employee's well enough to answer this?";
        }
      }
    }
  ]).then(answer => {
    let engineer = new Engineer(answer.name, answer.id, answer.email, "Engineer", answer.github);
    teamArr.push(engineer);
    createTeam();
  })
};

function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is this intern's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        } else {
          "Please provide an intern name";
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this intern's ID number?",
      validate: answer => {
        if (answer !== null) {
          return true;
        } else {
          return "Please enter an ID number";
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is this intern's email address?",
      validate: emailInput => {
        if (emailInput !== "") {
          return true;
        } else {
          return "Please submit an email address";
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is this intern's school name?",
      validate: schoolInput => {
        if (schoolInput !== "") {
          return true;
        } else {
          return "Do you really not know your employee's well enough to answer this?";
        }
      }
    }
  ]).then(answer => {
    let intern = new Intern(answer.name, answer.id, answer.email, "Intern", answer.school);
    teamArr.push(intern);
    createTeam();
  })
}

function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is this manager's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        } else {
          "Please provide an manager name";
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this manager's ID number?",
      validate: answer => {
        if (answer !== null) {
          return true;
        } else {
          return "Please enter an ID number";
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is this manager's email address?",
      validate: emailInput => {
        if (emailInput !== "") {
          return true;
        } else {
          return "Please submit an email address";
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          return "Please add an office Number";
        }
      }
    }
  ]).then(answer => {
    let manager = new Manager(answer.name, answer.id, answer.email, "Manager", answer.officeNumber);
    teamArr.push(manager);
    createTeam();
  })
}

const writeToFile = data => {
  const generatedHTML = generateHTML(data);
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generated.html', generatedHTML, err => {
      if (err) {
        reject(err);
      }

      resolve({
        ok: true,
        message: 'Page generated!'
      });
    });
  });
};

function teamArrToHTML() {
  const cardArr = teamArr.map(o => {
    switch (o.role) {
      case 'Manager':
        return `
                <div class="col-md-6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='manager-card'>
                            <div class='card-header bg-dark text-light'> 
                                <h2><i class="fas fa-mug-hot"></i> Manager</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class=list-group-item"><h3>Name: ${o.getName()}</h3></li>
                                <li class=list-group-item">Id: ${o.getId()}</li>
                                <li class=list-group-item">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class=list-group-item">OfficeNumber: ${o.getOffice()}</li>
                            </ul>
                        </div>
                    </div> 
                </div>
                `

      case 'Engineer':
        return `
                <div class="col-md=6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='engineer-card'>
                            <div class='card-header bg-dark text-light'>
                                <h2><i class="fas fa-glasses"></i> Engineer</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class=list-group-item"><h3>Name: ${o.getName()}</h3></li>
                                <li class=list-group-item">Id: ${o.getId()}</li>
                                <li class=list-group-item">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class=list-group-item">Github: <a href="https://github.com/${o.getGithub()}" target="_blank">${o.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
                `

      case 'Intern':
        return `
                <div class="col-md-6 col-lg-4">
                    <div class='card employee-card'>
                        <div class='intern-card'>
                            <div class='card-header bg-dark text-light'>
                                <h2><i class="fas fa-user-graduate"></i> Intern</h2>
                            </div>
                            <ul class="list-group list-group-flush list-unstyled">
                                <li class=list-group-item"><h3>Name: ${o.getName()}<h3></li>
                                <li class=list-group-item">Id: ${o.getId()}</li>
                                <li class=list-group-item">Email: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
                                <li class=list-group-item">School: ${o.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
      default:
        console.log('cardArr finished?')
        return results
    }
  });
  return cardArr;
}

const generateHTML = () => {
  const results = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet" />
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
        </div>
      </header>
      <main class="container my-5">
        <div class="row">
            ${teamArrToHTML().join('')}
        </div>
      </main>
    </body>
    </html>
    `;

  return results;
}




function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What type of employee would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "Manager",
        "None"
      ]
    }
  ]).then(answer => {
    switch (answer.role) {
      case "Engineer":
        addEngineer();
        break;

      case "Intern":
        addIntern();
        break;

      case "Manager":
        addManager();
        break;

      default:
        console.log(teamArr);
        writeToFile(teamArr);
    };
  });

}

createTeam();