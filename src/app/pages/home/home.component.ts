import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  // imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name: string = '人見和樹'
  introduction: string =
    `1997年8月生まれで、現在はWebエンジニアとして実務経験を積みながら、さらなるスキルアップを目指して日々学習と実践を重ねています。特にAngularやJavaを中心に、フロントエンドだけでなくバックエンド寄りの技術にも積極的に取り組んでおり、アプリケーション全体を理解した開発ができるエンジニアを目指しています。

これまでの経験では、Javaを用いた研修で基本的なアプリケーション開発の流れを学んだほか、Excel・VBAを活用した業務支援ツールの作成、Oracle SQLからPostgreSQLへの移行作業、AngularによるSPA開発など、幅広い技術領域に携わってきました。

今後も、フロントエンドとバックエンドの両面から価値を提供できるエンジニアとして、技術力とチーム貢献力の向上を目指していきます。`;

}
