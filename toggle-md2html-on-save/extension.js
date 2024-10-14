// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

function toggleMd2HtmlOnSave() {
	const config = vscode.workspace.getConfiguration('markdown.extension.print');
	const currentValue = config.get('onFileSave');
	const newValue = !currentValue;

	config.update('onFileSave', newValue, vscode.ConfigurationTarget.Workspace).then(() => {
		vscode.window.showInformationMessage(`markdown.extension.print.onFileSave is now ${newValue}`);
	}, (error) => {
		vscode.window.showErrorMessage(`Failed to update setting: ${error}`);
	});
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "toggle-md2html-on-save" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand(
		'toggle-md2html-on-save.toggle', toggleMd2HtmlOnSave
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
