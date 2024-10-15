# VSCODE 用のユーティリティ

## 開発 Tips

### 雛形の作成

node.js 環境をインストールして、以下を実行する。

```ps1
npm install -g yo generator-code
yo code
```

これで対話形式で拡張機能の名前とかを入力すると、
拡張機能開発用のディレクトリが生成される。

この中の extensions.js が拡張機能を書く部分になり、
package.json をその内容に合わせて編集する。

### 拡張機能のテスト

1. 拡張機能開発中のディレクトリをワークスペースとして vscode を開く。
2. F5 を押すとデバッグ用の vscode が開く。
3. crtl+shift+p とかでコマンド入力を開き、
   * package.json
   * → contributes
   * → commands
   * → title のコマンドを探して実行する。
4. このとき、実行結果が見やすいように、右下にメッセージ等を表示しておくと便利。
5. エラーが起きた場合は、**元の vscode の出力コンソール** に
    console.print 等の内容が出力されるので注意。


### 拡張機能のパッケージング

```ps1
npm install -g @vscode/vsce
cd $project_root # package.json や src のあるディレクトリ
vsce package
```

これでローカルに `my-exetension-x.x.x.vsix` ファイルができるので、
これを共有する。

### 拡張機能のインストール

各実行環境 (PC) で以下のようにインストールする。

1. (vscode 上で) `ctrl+shift+p`
2. `> Extensions: Install from VSIX...` を選択。
3. 生成した .vsix ファイルを選択し、インストール。

### ショートカットキーの登録

keybindings.json で以下のように設定する。
(以下は toggle-md2html-on-save の例)

```json
{
    "key": "ctrl+shift+j",
    "command": "extension.switchMyMdCss",
    "when": "editorLangId == markdown"
}
```

### 他環境での開発

依存関係にあるパッケージは node_modules にあるが、
git では共有されない。 

別環境で git clone した後に開発したい場合は、
`npm ci` で必要なモジュールをインストールする。


## ユーティリティ郡

### toggle-md2html-on-save

ショートカットキー (`ctrl+shift+j`) で
markdown の HTML 自動出力の ON/OFF を切り替える拡張機能。

