import { Component } from '@angular/core';
import { Work } from '../../models/work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  works: Work[] = [
    {
      title: '簡易ECサイト',
      description: 'Angularのみで実装した簡易的なECサイト。',
      techStack: ['Angular', 'TypeScript', 'SCSS'],
      image: '/assets/works/ECsite.png',
      githubUrl: 'https://github.com/kazuki-hi/EC',
      demoUrl: '',
      highlights: ['Angularの基礎的な実装', 'コンポーネント分割', 'レスポンシブ対応'],
    },
    // {
    //   title: 'ポートフォリオサイト',
    //   description: 'Angularで構築したSPAポートフォリオ。',
    //   techStack: ['Angular', 'TypeScript', 'SCSS', 'AOS.js'],
    //   image: '/assets/works/portfolio.png',
    //   githubUrl: 'https://github.com/yourname/portfolio',
    //   demoUrl: 'https://your-portfolio.vercel.app/',
    //   highlights: ['ルーティング構成', 'アニメーション実装', 'UI設計を統一'],
    // },
    // {
    //   title: '匿名掲示板アプリ',
    //   description: 'Angular + Apollo GraphQLで実装した匿名投稿掲示板。',
    //   techStack: ['Angular', 'TypeScript', 'GraphQL', 'AWS Amplify'],
    //   image: '',
    //   githubUrl: 'https://github.com/yourname/board-app',
    //   demoUrl: 'https://board-demo.vercel.app/',
    //   highlights: ['JWT認証実装', 'GraphQLスキーマ設計', 'レスポンシブ対応'],
    // },

  ];
}
