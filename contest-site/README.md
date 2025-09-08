# コンペ用デモサイト（株式会社後藤工業）

コンペ提出用の静的トップページ案です。最小テキストとピクトグラム中心のハブ型UIで、主要導線をファーストビュー内に集約しています。

## 構成

- `index.html`: トップページ（レスポンシブ・ハブカード・ニュースバー・信頼要素）
- `assets/styles.css`: 青系テーマ、アクセシビリティ配慮スタイル
- `assets/script.js`: モバイルメニュー、ニュースティッカー、ボトムナビの状態更新
- `assets/icons.svg`: 再利用可能なSVGシンボル（アイコンスプライト）

## 使い方

ローカルでブラウザ表示するだけで動作します。

```bash
# 任意のHTTPサーバで配信（例: Python）
python3 -m http.server -d . 8080 | cat
# もしくは VS Code/Cursor の Live Server を使用
```

ブラウザで `http://localhost:8080/contest-site/` を開いてください。

## カスタマイズ

- カラー: `assets/styles.css` の `:root` で `--color-primary` を貴社の青に変更
- ニュース: `index.html` の `.ticker > li` を編集（自動アニメーション）
- 文言/導線: ヒーローのボタンとハブカードのリンク先IDを変更
- アイコン: `assets/icons.svg` にシンボル追加し、`<use href="...#id">` で参照

## アクセシビリティ

- スキップリンク、フォーカス可視化、コントラスト配慮
- `prefers-reduced-motion` でニュースの自動スクロール停止
- モバイルメニューは `aria-expanded` を更新

## ライセンス

コンペ提出用途に限り自由に編集可。実装移行時は別途ご相談ください。