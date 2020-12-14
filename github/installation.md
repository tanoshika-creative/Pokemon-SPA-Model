# インストール (git cloneから、ローカルWebサーバでブラウザ表示まで)

## [手順1]
#### git clone

~~~sh

~~~


## [手順2]
#### node_modulesのインストール 

- npmのserveパッケージでローカルWebサーバを立てる準備  
- npmのvue-cliがつかえるようになる。

~~~sh
npm install
~~~



## [手順3] 
#### ホットリロードを用いて開発

~~~sh
npm run serve
~~~


## [オプション A] 
#### ESlintを用いる
```
npm run lint
```

## [オプション B] 
#### Production用に、ファイル圧縮とコンパイルを行う
```
npm run build
```


### 設定のカスタマイズは以下を参照
[Configuration Reference](https://cli.vuejs.org/config/).
