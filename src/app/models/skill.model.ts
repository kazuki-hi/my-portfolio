export interface Skill {
  /** スキル名 */
  name: string; // (例: "Angular")

  /** スキルレベル */
  level: string; // (例: "中級")

  /** アイコン画像のパス */
  icon: string; // (例: "assets/icons/angular_icon.svg")

  /** スキルの説明文（改行可） */
  description: string; // (例: "SPA構築に使用。\n実務での使用経験あり。")

  /** 画像読み込みエラーフラグ（テンプレート制御用） */
  loadError?: boolean;

  /** 現在試行中のアイコンソース */
  iconSource?: 'simpleicons' | 'devicon';
}
