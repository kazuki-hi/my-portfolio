export interface Work {
  /** 作品タイトル */
  title: string;  //（例："Todo管理アプリ"）

  /** 作品の概要・目的 */
  description: string;  //（例："AngularとFirebaseを使ったタスク管理アプリ"）

  /** 使用技術の配列 */
  techStack: string[];  //（例：["Angular", "Firebase", "TypeScript"]）

  /** サムネイル画像のパスまたはURL */
  image?: string;  //（例："assets/images/todo-app.png"）

  /** GitHubリポジトリのURL（任意） */
  githubUrl?: string;

  /** 実際のデモサイトURL（任意） */
  demoUrl?: string;

  /** 特徴・工夫した点のリスト（任意・複数） */
  highlights?: string[];

  /** 画像読み込み失敗時に true にするフラグ */
  loadError?: boolean;
}

// export interface Work {
//   /** 作品タイトル（例："Todo管理アプリ"） */
//   title: string;

//   /** 作品の概要・目的（例："AngularとFirebaseを使ったタスク管理アプリ"） */
//   description: string;

//   /** 使用技術の配列（例：["Angular", "Firebase", "TypeScript"]） */
//   techStack: string[];

//   /** サムネイル画像のパスまたはURL（例："assets/images/todo-app.png"） */
//   image?: string;  // 任意にする（No Image対応のため）

//   /** GitHubリポジトリのURL（任意） */
//   githubUrl?: string;

//   /** 実際のデモサイトURL（任意） */
//   demoUrl?: string;

//   /** 特徴・工夫した点のリスト（任意・複数） */
//   highlights?: string[];

//   /** 作成年月日など（任意） */
//   date?: string;  // "2024-05" や "2024年5月" など表現自由

//   /** カテゴリ（Webアプリ・デザイン・動画など） */
//   category?: 'web' | 'design' | 'video' | 'other';

//   /** 表示順を制御するための優先度（数値が小さいほど上に表示） */
//   order?: number;

//   /** 画像読み込み失敗時のフラグ（UI側で設定される） */
//   loadError?: boolean;

//   /** 任意の追加データ（将来拡張用） */
//   meta?: Record<string, any>;
// }

