import * as vscode from "vscode";
import { updateConfiguration } from "./hide";

// 识别到pkgm项目再去执行
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "BFS" is now active!');

  hideFactary();

  let disposable = vscode.commands.registerCommand("BFS.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from PKGM!");
  });

  context.subscriptions.push(disposable);
}

/**
 * 隐藏工作区文件
 */
function hideFactary() {
  const hideFile = vscode.workspace.getConfiguration("PKGM.excludes");
  updateConfiguration("files", "exclude", hideFile, 2);
}

export function deactivate() {}
