# shop-review

![udemy-firebase-banner_400](https://user-images.githubusercontent.com/7026785/90077348-e0f2b480-dd3c-11ea-99e7-f0826ceeb091.png)

Udemy講座 **「React NativeとFirebaseで作るiOS/Androidアプリ：お店レビューアプリ開発編」** のサンプルコードです。


## 構成

```
├── assets  // サンプルデータで使う画像置き場(実際のアプリでは使用しません)
├── shop-review-app  // React Nativeのプロジェクト
└── shop-review-firebase  // Firebase Cloud Function
```

## セクション3で使うFirestoreサンプルデータ

ドキュメントID | name (string) | place (string) | imageUrl (string) | score (number) |
-- | -- | -- | -- | -- |
10000 | 有楽町カフェ | 有楽町 | https://raw.githubusercontent.com/takahi5/shop-review/master/assets/cafe01.jpg | 3 |
10001 | 新橋パスタ | 新橋 | https://raw.githubusercontent.com/takahi5/shop-review/master/assets/pasta01.jpg | 4 |
10002 | ピッツア浜松町 | 浜松町 | https://raw.githubusercontent.com/takahi5/shop-review/master/assets/pizza01.jpg | 3.5 |
10003 | 田町ラーメン | 田町 | https://raw.githubusercontent.com/takahi5/shop-review/master/assets/ramen01.jpg | 4.5 |
10004 | ビストロ品川 | 品川 | https://raw.githubusercontent.com/takahi5/shop-review/master/assets/meat01.jpg | 2 |

## 各レクチャーの途中のコード

本リポジトリのコードは最終的な完成形になっています。

各レクチャーの途中経過のコードについては、ブランチを切って置いていますので、適宜参考にして下さい。

例：セクション4 AppNavigatorの導入 → https://github.com/takahi5/shop-review/tree/sec4/app-navigator

**ブランチ一覧**    
https://github.com/takahi5/shop-review/branches/active
