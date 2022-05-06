import * as vscode from "vscode";
import { hideFile, updateConfiguration } from "./hide";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "BFS" is now active!');

  updateConfiguration("files", "exclude", hideFile, 1);
  let disposable = vscode.commands.registerCommand("BFS.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from PKGM!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
