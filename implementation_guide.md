# ポートフォリオサイト実装手順書

本ドキュメントは、このポートフォリオサイトと同様の構成・機能を持つアプリケーションをゼロから構築するための手順書です。
Angular v19系を使用した、最新のモダンな構成に基づいています。

## 1. 事前準備 (Prerequisites)

以下の環境がインストールされていることを前提とします。

- **Node.js**: v18以上 (LTS推奨)
- **npm** (Node.jsに同梱)
- **Angular CLI**: `npm install -g @angular/cli` でインストール

## 2. プロジェクト作成 (Project Setup)

ターミナルで以下のコマンドを実行し、新規Angularプロジェクトを作成します。

```bash
ng new my-portfolio --style=scss --ssr=false
```

- `my-portfolio`: プロジェクト名（任意に変更可）
- `--style=scss`: スタイルシートにSCSSを使用
- `--ssr=false`: サーバーサイドレンダリング(SSR)を無効化（静的なSPAとして構築する場合）
  ※ 質問された場合は `y` (Yes) を選択してルーティングを有効にしてください。

プロジェクトディレクトリに移動します。
```bash
cd my-portfolio
```

## 3. ディレクトリ構成の作成

このプロジェクトでは、機能ごとに整理されたフォルダ構成を採用しています。
以下のコマンドで必要なフォルダとコンポーネントを生成します。

### 3.1 ページコンポーネントの作成
各画面（Home, Skills, Works, Contact）に対応するコンポーネントを作成します。

```bash
# ページ用フォルダへの生成
ng g c pages/home
ng g c pages/skills
ng g c pages/works
ng g c pages/contact
```

### 3.2 共通コンポーネントの作成
ヘッダー（ナビゲーション）などの共通部品を作成します。

```bash
ng g c components/navbar
```

### 3.3 その他のフォルダ作成 (手動)
モデルやバリデーター用のフォルダを `src/app` 直下に作成します。

- `src/app/models/` (型定義用)
- `src/app/validators/` (カスタムバリデーション用)
- `src/app/directives/` (カスタム属性・挙動用)

## 4. ルーティングの設定

`src/app/app.routes.ts` を編集し、各ページへのパスを設定します。

```typescript:src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  // ワイルドカード（404）などが不要であれば以上
];
```

## 5. グローバルスタイルの適用

`src/styles.scss` に、サイト全体の共通スタイル（背景色、フォント、共通のリセット設定など）を記述します。ダークモード基調のデザインにする場合の例です。

```scss:src/styles.scss
body {
  background-color: rgb(30, 30, 30);
  color: rgb(245, 225, 225);
  margin: 0;
  font-family: sans-serif;
}

// リンクやボタンの共通スタイルなどをここに追記
```

## 6. 各機能の実装ポイント

### 6.1 モデルの定義
`src/app/models/` 配下にインターフェースを作成し、データの型を定義します。

**例: `src/app/models/skill.model.ts`**
```typescript
export interface Skill {
  name: string;
  level: string;
  icon?: string;
  description: string;
}

export interface Hobby {
  name: string;
  description: string;
}

export interface Certification {
  name: string;
  date: string;
}
```

### 6.2 コンポーネントの実装 (Standalone Components)
Angular v19では `Standalone Components` が標準です。
`imports` 配列に必要なモジュールやコンポーネントを追加します。

**例: `src/app/pages/home/home.component.ts`**
```typescript
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ScrollAnimDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() hobbies: Hobby[] = [];
  // ...
}
```

### 6.3 データの表示 (Control Flow)
HTMLテンプレートでは、新しい制御フロー構文（`@if`, `@for`）を使用します。

**例: `src/app/pages/skills/skills.component.html`**
```html
<div class="skills-grid">
  @for (skill of skills; track skill.name) {
    <div class="skill-card">
      <h3>{{ skill.name }}</h3>
      <!-- ... -->
    </div>
  }
</div>
```

また、データの有無による表示制御も行います。
```html
@if(hobbies.length > 0) {
  <div class="info-section">...</div>
}
```

## 7. 発展的な実装

### 7.1 スクロールアニメーションの実装
`IntersectionObserver` を利用したカスタムディレクティブを作成します。

**例: `src/app/directives/scroll-anim.directive.ts`**
```typescript
@Directive({ selector: '[appScrollAnim]', standalone: true })
export class ScrollAnimDirective implements OnInit {
  // 監視ロジックを実装し、表示領域に入った際にクラスを付与
}
```

**適用方法 (SCSS)**:
```scss
.scroll-anim-hidden { opacity: 0; transform: translateY(30px); }
.scroll-anim-visible { opacity: 1; transform: translateY(0); transition: 0.8s; }
```

## 8. 実行とビルド

### ローカルサーバーの起動
開発中は以下のコマンドでサーバーを起動し、 `http://localhost:4200` で確認します。
```bash
ng serve
```

### 本番用ビルド
公開用にファイルを生成する場合は以下のコマンドを実行します。 `dist/` フォルダに生成されます。
```bash
ng build
```

---
以上が、本ポートフォリオサイトの基本的な構築手順です。
各コンポーネントの詳細なデザインやロジックは、仕様書 (`specifications.md`) を参照しながら肉付けを行ってください。
