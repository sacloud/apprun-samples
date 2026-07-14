# container-sample

さくらのクラウド AppRun 向けサンプルコンテナイメージのソースコードです。

## 概要

`tutorial/` に Node.js + Express の最小アプリケーションを含みます。
`GET /` で `hello` を返し、`8080` ポートで待ち受けます。

- AppRun マニュアル: https://manual.sakura.ad.jp/cloud/apprun/getting_started.html

## 関連ファイル

- `tutorial/app.js`: アプリ本体
- `tutorial/Dockerfile`: コンテナイメージ定義
- `.github/workflows/cd.yml`: GHCR へのビルド/Push

## License

This project is published under [Apache 2.0 License](LICENSE).