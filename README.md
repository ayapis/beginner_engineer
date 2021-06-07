#概要
デザインからhtmlコーディングするための検証環境です<br><br>
Railsのリポジトリはこちらです<br>
https://github.com/wyasu/job_engineer

# 検証環境
devlopブランチのデータをアップロードしてます <br>
http://board.beginner-engineer.ga/<br>
<br>
<br>

# ブランチ運用

devlopからブランチを切る。ブランチ名は「担当者名_backlogの番号（tanaka_RAISETECH02-38）」<br>
↓<br>
ローカルで開発<br>
↓<br>
自分が作ったブランチをリモートにプッシュ。※devlopブランチ、masterブランチにはpushしない事<br>
↓<br>
devlopブランチをターゲットにpull requestsを出す。 画面右側「Reviewers」でレビューして欲しい人を選択<br>
↓<br>
レビュー担当者がレビュー。レビューOKの場合は「Approve」をチェック<br>
<br>
<br>
※マージはレビュー担当者が行います<br>
<br>
※検証環境にdevlopブランチをアップしたタイミングで該当リモートブランチを削除します<br>
<br>
<br>

# Backlog運用
<br>
１、課題に着手したら「処理中」に変更 <br>
<br>
２、課題が終わったり、プルリクを出したら「処理済み」<br>
<br>
３、「完了」はミーティングの際に変更します<br>
<br>
<br>
課題の担当者は変更しないでください<br>
<br>
必要な課題は各自追加してください
<br>
<br>

# コーディング規約
未定<br>
<br>


# 技術選定
|  | 技術 |
| --- | --- |
| OS | Linux |
| フロントエンド | JavaScript/React/TypeScript |
| バックエンド | Ruby/Ruby on Rails |
| DB | MySQL |
| 仮想環境 | Docker |
| サーバー | AWS（VPC、EC2、CloudWatch） |
| バージョン管理 | Git/Github |
| CI/CD | Github Actions |
| タスク管理 | Backlog |
