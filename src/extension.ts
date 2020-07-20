import * as vscode from 'vscode';
import * as poeditor from '@sylverfox/poeditor';

export function activate(context: vscode.ExtensionContext) {
  const console = vscode.window.createOutputChannel("POEditor");
  console.show();

  const authenticate = vscode.commands.registerCommand('poeditor.authenticate', () => {
    vscode.window
      .showInputBox({
        placeHolder: "api token",
        password: true,
        ignoreFocusOut: true,
      })
      .then((api_token) => {
        if (api_token) {
          poeditor.projects.list(api_token);
        }
      });
  });

  context.subscriptions.push(authenticate);
}

export function deactivate() {
  //
}
