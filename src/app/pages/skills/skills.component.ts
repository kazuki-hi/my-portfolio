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
    {
      name: '',
      level: '',
      icon: '',
      description: ''
    },
    // {
    //   name: '',
    //   level: '',
    //   icon: '',
    //   description: ''
    // },
  ];

  /** アイコンのURLを返す（local > CDN優先） */
  getIconUrl(skill: Skill): string {
    return skill.icon && skill.icon.trim() !== ''
      ? skill.icon
      : `https://cdn.simpleicons.org/${encodeURIComponent(skill.name.toLowerCase())}`;
  }

}
