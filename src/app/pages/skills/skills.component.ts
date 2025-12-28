import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: '中級',
      icon: 'assets/icons/angular_icon.svg',
      description: 'SPA構築に使用。\n実務での使用経験あり。'
    },
    {
      name: 'Java',
      level: '中級',
      icon: '',
      description: '複数の成果物を通じて、\n簡単な業務アプリケーションの\n設計・開発を経験。'
    },
    // 必要に応じて追加
    // {
    //   name: '',
    //   level: '',
    //   icon: '',
    //   description: ''
    // },
    // {
    //   name: '',
    //   level: '',
    //   icon: '',
    //   description: ''
    // },
  ];

  /** アイコンのURLを返す（local > Simple Icons > Devicon 優先） */
  getIconUrl(skill: Skill): string {
    if (skill.icon && skill.icon.trim() !== '') {
      return skill.icon;
    }

    const name = skill.name.toLowerCase().trim();

    // 1. Simple Icons (デフォルト)
    if (!skill.iconSource || skill.iconSource === 'simpleicons') {
      const slugMap: { [key: string]: string } = {
        'java': 'java',
        'c#': 'csharp',
        'c++': 'cplusplus',
        'node.js': 'nodedotjs',
        'vue.js': 'vuedotjs',
        'next.js': 'nextdotjs',
        'sql server': 'microsoftsqlserver',
        'postgresql': 'postgresql',
        'mysql': 'mysql',
        'oracle': 'oracle',
        'aws': 'amazonaws',
        'azure': 'microsoftazure',
        'gcp': 'googlecloud',
        'google cloud': 'googlecloud',
        'visual studio code': 'visualstudiocode',
        'vscode': 'visualstudiocode',
        'ruby on rails': 'rubyonrails',
        'rails': 'rubyonrails'
      };

      const slug = slugMap[name] || name
        .replace(/\+/g, 'plus')
        .replace(/#/g, 'sharp')
        .replace(/\./g, 'dot')
        .replace(/\s+/g, '');

      return `https://cdn.simpleicons.org/${slug}/ffffff`;
    }

    // 2. Devicon (Simple Iconsが失敗した場合のバックアップ)
    if (skill.iconSource === 'devicon') {
      // Devicon用の簡易マッピング
      const deviconSlugMap: { [key: string]: string } = {
        'angular': 'angularjs',
        'spring': 'spring',
        'vue.js': 'vuejs',
        'node.js': 'nodejs'
      };
      const slug = deviconSlugMap[name] || name.replace(/\./g, '').replace(/\+/g, 'plus').replace(/#/g, 'sharp').replace(/\s+/g, '');
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
    }

    return '';
  }

  /** アイコンの読み込みエラー時の処理 */
  handleIconError(skill: Skill): void {
    if (!skill.iconSource || skill.iconSource === 'simpleicons') {
      console.log(`[IconFallback] Simple Icons failed for ${skill.name}. Trying Devicon...`);
      skill.iconSource = 'devicon';
    } else if (skill.iconSource === 'devicon') {
      console.log(`[IconFallback] Devicon also failed for ${skill.name}. Falling back to placeholder.`);
      skill.loadError = true;
    }
  }
}
