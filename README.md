# Automatic-Calendar-Addition-Script
## 概要  
他のカレンダーから特定のワードが存在する予定を  
自分のカレンダーに登録するGAS用スクリプト

## 動作
シフトカレンダーから指定の文字列が並ぶ予定を抽出し、自分のカレンダーに内容をコピーします。  
また、予定が変更されることがあるので、更新に対応しています。  
以下流れ  
```
4時間に一回実行
↓
現在の時間を取得
↓
1か月後の日付を取得
↓
実行日から1か月後迄の自分のシフトをシフトカレンダーから抽出
↓
実行日から1か月後迄の自分のシフトを自分のカレンダーから抽出
↓
実行日から1か月後迄の予定を自分のカレンダーから削除
↓
シフトカレンダーから抽出した予定を自分のカレンダーに反映
↓
end
```
