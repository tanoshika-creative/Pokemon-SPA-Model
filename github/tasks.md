# タスク分け

## [1] まず、本家にはどんな機能が備わっているかを分析

- 本当に、PokeAPIを叩いているのか？
  - => 疑念を持った理由は、src/assets/imagesに151匹のポケモン画像あり。

## [2] すぐに実現可能なものとそうでないものに選別

- (すぐにできそうなもの)
  - CSSの改善 (これをやりながら、徐々に内部構造を把握していくのはアリ。)


- (時間を要するもの)
  - フロントエンド特有の概念の理解 (Vue.js)
    - (1) Vue Routerでのルーティングの書き方
    - (2) Vuexでの状態管理の仕方
    - (3) axiosでHTTP通信、非同期通信を行う書き方。
    - (4) anime.jsがどの挙動に使われているのか？
    - (5) vuex-persistedstateによりLocalStorageへ保存する方法の書き方。
    - (6) Poke APIへHTTPリクエストを送っている箇所の特定
- この辺りは、vuesplashを見直しながらするのが正確かもしれない。



