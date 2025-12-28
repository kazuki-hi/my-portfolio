import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ScrollAnimDirective } from '../../directives/scroll-anim.directive';
import { Hobby } from '../../models/hobby.model';
import { Certification } from '../../models/certification.model';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ScrollAnimDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Input() hobbies: Hobby[] = [
    { name: 'プログラミング', description: '新しい技術のキャッチアップや個人開発' },
    { name: '読書', description: '技術書やビジネス書を中心に月2〜3冊' },
    { name: 'ゲーム', description: 'FPSやRPGなど、ジャンル問わず' },
  ];
  @Input() certifications: Certification[] = [
    { name: '基本情報技術者', date: '2023年' },
    { name: 'Oracle Certified Java Programmer, Silver', date: '2022年' },
    { name: 'AWS Certified Cloud Practitioner', date: '2024年 (予定)' },
  ];

  name: string = '人見和樹'
  introduction: string =
    `1997年8月生まれで、現在はWebエンジニアとして実務経験を積みながら、さらなるスキルアップを目指して日々学習と実践を重ねています。特にAngularやJavaを中心に、フロントエンドだけでなくバックエンド寄りの技術にも積極的に取り組んでおり、アプリケーション全体を理解した開発ができるエンジニアを目指しています。

これまでの経験では、Javaを用いた研修で基本的なアプリケーション開発の流れを学んだほか、Excel・VBAを活用した業務支援ツールの作成、Oracle SQLからPostgreSQLへの移行作業、AngularによるSPA開発など、幅広い技術領域に携わってきました。

今後も、フロントエンドとバックエンドの両面から価値を提供できるエンジニアとして、技術力とチーム貢献力の向上を目指していきます。`;

}
