const command = process.argv
const aboutProject = require('./package.json')
const chalk = require('chalk');
const open = require('open');
const request = require('request')

if (command.indexOf('-v') != -1) {

	console.log(`you're using the version ` + chalk.green(aboutProject.version));
	
} else if (command.indexOf('--help') != -1) {

	console.log(`visit this page:\n\n${chalk.blue('https://github.com/Theryston/PDF-creator/blob/master/README.md')}\n`)

	open('https://github.com/Theryston/PDF-creator/blob/master/README.md');

} else if (request) {

	request('https://raw.githubusercontent.com/Theryston/PDF-creator/master/package.json', (error, res) => {
		if (error) {
			console.log(chalk.red('ERROR'))
		} else if (res) {
			const aboutProjectInGithubMaster = JSON.parse(res.body)

			if (aboutProjectInGithubMaster.version !==  aboutProject.version) {

				console.log(chalk.red('\nERROR:')+ ' the version you are using is not the same version currently available! update the PDF-creator\n\n\n   RUN:\n\n'+chalk.green('   |-------------------------------|\n   |				   |\n   |  	npm i -g PDF-creator   	   |\n   | 			   	   |\n   |-------------------------------|\n'))
				
			} else {

				//call robots here

			}
			
		}
	})
	
}
