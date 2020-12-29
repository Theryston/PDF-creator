const command = process.argv
const aboutProject = require('./package.json')
const chalk = require('chalk');
const open = require('open');
const axios = require('axios')


if (command.indexOf('-v') != -1 || command.indexOf('--version') != -1) {
	console.log(`you're using the version: ` + chalk.green(aboutProject.version));

} else if (command.indexOf('--help') != -1) {

	console.log(`visit this page:\n\n${chalk.blue('https://github.com/Theryston/PDF-creator/blob/master/README.md')}\n`)

	open('https://github.com/Theryston/PDF-creator/blob/master/README.md');

} else {

	void async function() {
		try {
			var { data: aboutProjectHosted } = await axios('https://raw.githubusercontent.com/Theryston/PDF-creator/master/package.json')
		} catch (error) {
			var aboutProjectHosted = {
				error: `${chalk.red('ERROR:')} I could not see the available version and there is no way for me to know if your version is stable!`
			}
		}


		if (aboutProjectHosted.error != undefined) {
			console.log(aboutProjectHosted.error)
		} else {

			if (aboutProjectHosted.version !== aboutProject.version) {

				console.log(chalk.red('\nERROR:')+ ' the version you are using is not the same version currently available! update the PDF-creator\n\n\n   RUN:\n\n'+chalk.green('   |-------------------------------|\n   |				   |\n   |  	npm i -g PDF-creator   	   |\n   | 			   	   |\n   |-------------------------------|\n'))
				console.log('\n your version is: '+chalk.red(aboutProject.version) + ' and the available version is: ' + chalk.green(aboutProjectHosted.version)+ '\n')

			} else {

				console.log('alright!')
				//call robots here

			}

		}

	}()

}