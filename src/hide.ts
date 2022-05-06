/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from "vscode";
/**
 *updateConfiguration(‘editor’, ‘wordWrap’, ‘on’, vscode.ConfigurationTarget.Workspace);
 * @param cfgName 以点分隔的表示符
 * @param key 配置名称, 支持点式名称
 * @param value 新的值
 * @param configurationTarget
 * true 或者 vscode.ConfigurationTarget.Global： 全局配置, 即设置列表中的User中的配置
 * false 或者 vscode.ConfigurationTarget.Workspace：工作区配置, 即设置列表中的Workspace中的配置
 * vscode.ConfigurationTarget.WorkspaceFolder: 工作区文件夹配置
 * @returns
 */
export function updateConfiguration(
  cfgName: string,
  key: string,
  value: any,
  configurationTarget: vscode.ConfigurationTarget | boolean
) {
  return new Promise((resolve, reject) => {
    let cfg = vscode.workspace.getConfiguration(cfgName);
    if (cfg.has(key)) {
      cfg
        .update(key, value, configurationTarget)
        .then(() => {
          resolve(true);
        })
        .then(undefined, (err) => {
          reject(err);
        });
    } else {
      resolve(false);
    }
  });
}

export const hideFile = {
  "**/*.json": true,
  "**/.*": true,
  "**/*.log": true,
  "**/*.lock": true,
  "**/tsconfig*": true,
};
