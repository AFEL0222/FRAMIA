# FRAMIA LP 制作仕様書

Claude Code で FRAMIA の集客用 LP を制作するための統合仕様書。
このファイル1枚で LP 制作に必要な情報が完結する。

---

## 1. ブランドコンセプト

### ブランドステートメント

> 結婚の前も、その先も、あなたらしく。

### ブランド名の由来

> Frame（人生の一場面）に、静かな余韻を残す音を足しました。
> 「結婚は、あなたの人生の一場面。その場面を、あなたらしく残したい。」

### ブランドの読み方

FRAMIA = フレミア（fu-re-mi-a）

### FRAMIA の 3 つの姿勢

| # | 姿勢 | 内容 |
|---|---|---|
| 1 | 否定しない／盛らない | 経験の少なさを「伸びしろ」として捉える。過去を責めない |
| 2 | 整える／その先の暮らしまで | 出会いだけでなく、価値観・印象・関係の築き方まで伴走する |
| 3 | 焦らせない／伴走する | 「早く決めて」は絶対に言わない。あなたのペースを守る |

### コアバリュー（他社との差別化）

- **結婚を「急ぐ場所」ではなく「整える場所」** —— これが FRAMIA の最大の差別化
- **ライフデザイン型の結婚相談** —— 出会いから結婚、その先の暮らしまで伴走
- **元プランナー×ビデオグラファー** —— 13 年間・300 組以上のご夫婦を一番近くで観察した経験に裏打ちされた視点

---

## 2. ターゲットペルソナ

### 男性ペルソナ

- 「出会いがない」「アプリが向いてない気がする」「何を話したらいいか分からない」
- 誠実だからこそ立ち止まってしまうタイプ
- 「モテ」を教える場所ではなく、印象・言葉・振る舞いを「らしく」整える場所を求めている

### 女性ペルソナ

- 「条件で選びきれない」「本当の相性を見てほしい」「安心して話せる場所がない」
- 条件よりも価値観と暮らしの相性を整理したい
- 焦らされない、否定されないペースを求めている

### 共通の不安（LP で先回りして答えるべき 4 つ）

| 不安 | FRAMIA の回答 |
|---|---|
| 経験が少なくて不安 | 恋愛経験の少なさは「伸びしろ」。60 分で言葉を整理する時間から |
| 男性でも大丈夫？ | 男女どちらにも開かれた相談所。男性ならではの整え方にも寄り添う |
| 急かされたくない | 「早く決めてください」とは絶対に言わない |
| その日に入会は？ | 無料相談のその場で入会を迫ることはない。持ち帰って検討 OK |

---

## 3. サービス概要

### 代表プロフィール

| 項目 | 内容 |
|---|---|
| 代表名 | 田中 陣 |
| 経歴 | ウェディングプランナー 3 年 / ウェディングビデオグラファー 10 年 |
| 実績 | 300 組以上のご夫婦を一番近くで見てきた |
| 加盟 | IBJ（日本結婚相談所連盟）正規加盟（agency_id=10307） |

### 法人情報

| 項目 | 内容 |
|---|---|
| 法人名 | AFEL合同会社 |
| 代表 | 田中 陣 |
| 住所 | 東京都世田谷区弦巻5-8-11 |
| 電話番号 | 090-8494-3356 |
| 営業時間 | 平日 11:00〜20:00 / 土日祝 10:00〜19:00 |
| 定休日 | 不定休（事前予約制・ご希望の日時に柔軟に対応） |
| ドメイン | framia.jp |

### 料金プラン

| 項目 | 料金（税込） |
|---|---|
| 入会金 | ¥0 |
| 登録料 | ¥33,000 |
| 活動サポート費 | ¥44,000 |
| 月会費 | ¥11,000 |
| お見合い料（1 回） | ¥0 |
| 成婚料 | ¥220,000 |

> アピールポイント：入会金 ¥0・お見合い料 ¥0 は初心者にとって大きな安心材料。LP ではこの2つを目立たせる。

### 活動サポート内容

- 人生棚卸し面談 → プロフィール作成
- お見合いを組むためのサポート全般
- お見合い後の振り返り
- 面談（対面・オンライン）
- オンライン面談 月 1 回 45 分
- LINE・電話でのサポート（随時無制限）

### 無料相談の仕様

| 項目 | 内容 |
|---|---|
| 時間 | 60 分 |
| 形式 | オンライン／対面 |
| 料金 | 無料 |
| 予約方法 | Google フォーム（https://forms.gle/LyPV4mZ6333pFkVFA） |
| 予約フォーム | LINE 公式は今後追加予定 |

### Google フォーム埋め込み

セクション11にお問い合わせフォームとして以下を埋め込む：

```html
<iframe
  src="https://forms.gle/LyPV4mZ6333pFkVFA"
  width="100%"
  height="800"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="FRAMIA 無料相談予約フォーム">
  読み込んでいます…
</iframe>
```

> ※Google フォームの埋め込み URL は `https://forms.gle/LyPV4mZ6333pFkVFA` を iframe の src に指定する。
> ※レスポンシブ対応のため、iframe をラッパー div で囲み幅 100% にする。
> ※フォームの高さは内容に応じて調整（初期値 800px）。

### 無料相談で聞くこと

- 今、婚活で疲れていること
- 過去に感じてきた違和感
- 結婚に対して大切にしたい価値観
- 結婚後の暮らしのイメージ
- 今のお仕事や、休日の過ごし方

### 無料相談で聞かないこと

- 年収・身長・家柄を最初から詰めること
- 過去の恋愛の「失敗理由」を責める形で聞くこと
- その場で入会を決めさせること

### 相談後の流れ

1. 24 時間以内に LINE またはメールで日程確定の連絡
2. 事前ヒアリングフォーム（10 問前後）に回答
3. オンライン／対面で 60 分の無料相談
4. 当日、入会のご案内はするが決断は後日で構わない
5. 「今は違う」という判断も歓迎

### 無料相談で「持ち帰れること」（60 分チェックリスト）

1. 今のあなたにとっての「結婚」を、言葉にできる
2. 婚活が止まっている「本当の理由」が見えてくる
3. あなたに合う相談所／合わない相談所の見分け方がわかる
4. 「次の一歩」が、無理のない形で 1 つ決まる

---

## 4. デザインシステム

### カラーパレット

| トークン | HEX | 用途 |
|---|---|---|
| ivory | `#f7f3ea` | 背景・余白 |
| charcoal | `#2b2b2b` | テキスト・CTA 背景 |
| camel | `#c9a96e` | アクセント・番号・ラベル・仕切り線 |
| white | `#fafaf6` | タブ背景・カード |

### タイポグラフィ

| 用途 | フォント | CSS class |
|---|---|---|
| 見出し・本文 | Shippori Mincho（明朝体） | `font-mincho` |
| 英字・数字 | Inter または system-ui | `font-sans` |

### レイアウト原則

- **余白第一** —— gener whitespace、呼吸するレイアウト
- **縦長を許容** —— スマホファースト、テキストが詰まらない
- **薄い金の二重枠** —— ブランドシグネチャー（FRAMIA = "frame"）
- **柔らかい光グラデ** —— 左上からの拡散光で暖かさを演出

### CTA デザイン

| 種類 | スタイル | 用途 |
|---|---|---|
| cta-primary | チャコール背景・アイボリー文字・丸角 | メイン CTA（無料相談予約） |
| cta-secondary | チャコール文字・下線のみ | セクション末尾の控えめ CTA |
| floating-cta | モバイルのみ画面下固定 | スクロール追従 CTA |

### 写真・画像の方向性

- 柔らかい自然光、アイボリー系の背景
- 過度なフィルター NG（肌の質感を残す）
- カッコ良いより安心感・親しみ
- プロフィール写真3枚あり（紺ブレザー＋白インナー＋タン系スカーフ）

---

## 5. LP 構成案（全12セクション）

上から順に読者を無料相談 CTA へ導く設計。

### セクション一覧

| # | セクション | 目的 | 状態 |
|---|---|---|---|
| 1 | ヒーロー | 世界観を一瞬で伝える | ◯ |
| 2 | 不安の代弁（タブ切替） | 「自分のことだ」と共感させクリック | ◯ |
| 3 | FRAMIA とは | 差別化コンセプトを伝える | ◯ |
| 4 | 代表紹介 | 経歴で信頼を構築 | ◯ |
| 5 | うまくいく人の共通点 | 「知見」を示し期待値を高める | ◯ |
| 6 | 無料相談で聞くこと・聞かないこと | 安心感を与える | ◯ |
| 7 | 60 分で持ち帰れること | 相談の価値を 6 秒で伝える | ◯ |
| 8 | 料金プラン | 透明性を示す | ◯ |
| 9 | お客様の声 | 社会的証明 | 準備中 |
| 10 | FAQ | 残る疑問を解消 | ◯ |
| 11 | お問い合わせ（CTA） | 無料相談予約へ導く | ◯ |
| 12 | フッター | 法人情報・信頼性 | ◯ |

---

### セクション1：ヒーロー

- ブランドステートメント：「結婚の前も、その先も、あなたらしく。」
- サブテキスト：「FRAMIA｜ライフデザイン型の結婚相談」
- メイン CTA：「まずは 60 分、話を聞いてもらう」
- 背景：アイボリー／柔らかい光グラデ／薄い金の二重枠

### セクション2：不安の代弁（タブ切替）

ヒーロー直下に配置。4 つのタブで初訪問者の不安に即答。

**タブ1：経験が少なくて不安**

> 恋愛経験の少なさは、FRAMIA では"伸びしろ"として捉えます。
> まずは 60 分、あなたの言葉を整理する時間から始めましょう。

**タブ2：男性でも大丈夫？**

> 男性のご相談も、大歓迎です。
> FRAMIA は男女どちらにも開かれた相談所で、
> 男性ならではの整え方（印象・言葉・振る舞い）にも寄り添います。

**タブ3：急かされたくない**

> 「早く決めてください」とは、絶対に言いません。
> FRAMIA は、あなたのペースを守るための場所です。

**タブ4：その日に入会は？**

> 無料相談のその場で、入会を迫ることはありません。
> 持ち帰って、じっくり検討していただけます。

**実装HTML：**

```html
<section id="worry" class="py-20 md:py-28 bg-white">
  <div class="max-w-5xl mx-auto px-5 md:px-10">
    <p class="text-sm tracking-widest text-charcoal/60 mb-4">FOR YOU</p>
    <h2 class="font-mincho text-2xl md:text-3xl leading-relaxed text-charcoal mb-10">
      よくある、4 つの不安に先にお答えします。
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8" role="tablist">
      <button class="worry-tab active" data-tab="w1">経験が少なくて不安</button>
      <button class="worry-tab" data-tab="w2">男性でも大丈夫？</button>
      <button class="worry-tab" data-tab="w3">急かされたくない</button>
      <button class="worry-tab" data-tab="w4">その日に入会は?</button>
    </div>

    <div class="worry-panel" id="w1">
      <p class="font-mincho leading-loose text-charcoal">
        恋愛経験の少なさは、FRAMIA では"伸びしろ"として捉えます。
        まずは 60 分、あなたの言葉を整理する時間から始めましょう。
      </p>
    </div>
    <div class="worry-panel hidden" id="w2">
      <p class="font-mincho leading-loose text-charcoal">
        男性のご相談も、大歓迎です。
        FRAMIA は男女どちらにも開かれた相談所で、
        男性ならではの整え方（印象・言葉・振る舞い）にも寄り添います。
      </p>
    </div>
    <div class="worry-panel hidden" id="w3">
      <p class="font-mincho leading-loose text-charcoal">
        「早く決めてください」とは、絶対に言いません。
        FRAMIA は、あなたのペースを守るための場所です。
      </p>
    </div>
    <div class="worry-panel hidden" id="w4">
      <p class="font-mincho leading-loose text-charcoal">
        無料相談のその場で、入会を迫ることはありません。
        持ち帰って、じっくり検討していただけます。
      </p>
    </div>

    <div class="mt-10 text-center">
      <a href="#contact" class="cta-primary">まずは 60 分、話を聞いてもらう</a>
    </div>
  </div>
</section>
```

**CSS：**

```css
.worry-tab {
  padding: 12px 16px;
  border: 1px solid rgba(43, 43, 43, 0.15);
  background: #fafaf6;
  color: #2b2b2b;
  font-family: 'Shippori Mincho', serif;
  font-size: 14px;
  transition: all .2s ease;
}
.worry-tab.active {
  background: #2b2b2b;
  color: #f7f3ea;
  border-color: #2b2b2b;
}
.worry-panel {
  background: #f7f3ea;
  padding: 28px 24px;
  border-radius: 4px;
}
```

**JS：**

```js
document.querySelectorAll('.worry-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.worry-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.worry-panel').forEach(p => p.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.remove('hidden');
  });
});
```

### セクション3：FRAMIA とは

- 3 つの姿勢（否定しない／盛らない、整える／その先の暮らしまで、焦らせない／伴走する）
- 「結婚を急ぐ場所ではなく、整える場所」というコアメッセージ
- 男性向けメッセージ：「"モテ"を教える場所ではありません。印象・言葉・振る舞いをあなたらしいまま、整えていく場所です。」
- 女性向けメッセージ：「条件よりも、価値観と暮らしの相性を一緒に整理していきます。」

### セクション4：代表紹介

- 田中陣の経歴：プランナー 3 年・ビデオグラファー 10 年・300 組以上
- プロフィール写真あり（profile_01.jpg をメインで使用）
- メッセージ：「13 年、結婚式の現場にいて気づいたこと」

### セクション5：うまくいく人の共通点

- ① 相手のことを、自分の言葉で説明できる（条件ではなく「この人のこういう所が好き」と語れる人）
- ② 自分のことを、ちゃんと言語化できている（譲れない軸を持っている人ほど、相手を受け止められる）
- ③ 結婚"後"の暮らしを、2 人でイメージできている（家、休日、家族との距離。生活の解像度が高いご夫婦ほど、強い）
- クロージング：「婚活で必要なのは、テクニックより「言葉」です。FRAMIA は、その言葉づくりから伴走します。」

### セクション6：無料相談で聞くこと・聞かないこと

**聞くこと5項目：**
- 今、婚活で疲れていること
- 過去に感じてきた違和感
- 結婚に対して大切にしたい価値観
- 結婚後の暮らしのイメージ
- 今のお仕事や、休日の過ごし方

**聞かないこと3項目：**
- 年収、身長、家柄を最初から詰めること
- 過去の恋愛の「失敗理由」を責める形で聞くこと
- その場で入会を決めさせること

### セクション7：60 分で持ち帰れること

**実装HTML：**

```html
<section id="benefit" class="py-16 md:py-24 bg-ivory">
  <div class="max-w-3xl mx-auto px-5 md:px-10">
    <p class="text-sm tracking-widest text-charcoal/60 mb-4">60 MINUTES</p>
    <h2 class="font-mincho text-2xl md:text-3xl leading-relaxed text-charcoal mb-10">
      あなたと話す 60 分で、持ち帰れること。
    </h2>

    <ul class="space-y-6 font-mincho text-charcoal">
      <li class="flex gap-4">
        <span class="text-camel">01</span>
        <span>今のあなたにとっての「結婚」を、言葉にできる。</span>
      </li>
      <li class="flex gap-4">
        <span class="text-camel">02</span>
        <span>婚活が止まっている"本当の理由"が見えてくる。</span>
      </li>
      <li class="flex gap-4">
        <span class="text-camel">03</span>
        <span>あなたに合う相談所／合わない相談所の見分け方がわかる。</span>
      </li>
      <li class="flex gap-4">
        <span class="text-camel">04</span>
        <span>「次の一歩」が、無理のない形で 1 つ決まる。</span>
      </li>
    </ul>

    <p class="mt-10 text-charcoal/70 leading-loose text-sm">
      ※ 無料相談のその場で、入会を決めていただく必要はありません。
      持ち帰って、じっくり検討していただけます。
    </p>
  </div>
</section>
```

### セクション8：料金プラン

| 項目 | 料金（税込） |
|---|---|
| 入会金 | ¥0 |
| 登録料 | ¥33,000 |
| 活動サポート費 | ¥44,000 |
| 月会費 | ¥11,000 |
| お見合い料（1 回） | ¥0 |
| 成婚料 | ¥220,000 |

活動サポート内容：
- 人生棚卸し面談 → プロフィール作成
- お見合いを組むためのサポート全般
- お見合い後の振り返り
- 面談（対面・オンライン）
- オンライン面談 月 1 回 45 分
- LINE・電話でのサポート（随時無制限）

### セクション9：お客様の声

開業直後のため「準備中」とする。以下のテキストを配置：

> FRAMIA は開業したての相談所です。
> だからこそ、一人ひとりにかける時間に、限界を作りません。
> 成婚者の声は、順次公開していきます。

### セクション10：FAQ

**Q1：入会したら絶対結婚しないといけないですか？**
> いいえ、退会は自由です。いつでもご自分のタイミングで。

**Q2：高圧的に条件を詰められますか？**
> FRAMIA はしません。あなたの言葉を丁寧に受け取ることが最優先です。

**Q3：何歳くらいの人が多いですか？**
> 20〜30 代が中心ですが、どの年代の方でも歓迎しています。

**Q4：マッチングアプリから切り替える時、どうすればいいですか？**
> アプリに疲れたと感じたら、それが切り替えのタイミングです。まずは無料相談でお話を聞かせてください。

**Q5：無料相談でその場で入会を迫られますか？**
> 絶対にしません。持ち帰って、じっくり検討していただけます。

**Q6：お見合いのシステムはどうなっていますか？**
> IBJ（日本結婚相談所連盟）のシステムを利用します。全国約11万名の会員の中から、あなたに合う方を探せます。

**Q7：プロフィール写真はどうすればいいですか？**
> 撮影のサポートも行っています。まずはご相談ください。

**Q8：オンライン相談は可能ですか？**
> はい。全国どこからでもオンラインでご相談いただけます。

### セクション11：お問い合わせ

**Google フォーム埋め込み：**

```html
<iframe
  src="https://forms.gle/LyPV4mZ6333pFkVFA"
  width="100%"
  height="800"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="FRAMIA 無料相談予約フォーム">
  読み込んでいます…
</iframe>
```

> ※レスポンシブ対応のため、iframe をラッパー div で囲み幅 100% にする。
> ※フォームの高さは内容に応じて調整（初期値 800px）。

**相談後の流れブロック：**

```html
<div class="max-w-2xl mx-auto mt-16 px-5 md:px-10">
  <h3 class="font-mincho text-xl text-charcoal mb-6">相談後の流れ</h3>
  <ol class="space-y-4 font-mincho text-charcoal leading-loose text-sm">
    <li>1. 24 時間以内に、LINE またはメールで日程確定のご連絡をします。</li>
    <li>2. 事前ヒアリングフォーム（10 問前後）にお答えください。</li>
    <li>3. オンライン／対面で、60 分の無料相談を実施します。</li>
    <li>4. 当日、入会のご案内はしますが、決断は後日で構いません。</li>
    <li>5. 「今は違う」というご判断も、歓迎します。</li>
  </ol>

  <div class="mt-10 p-6 bg-ivory rounded">
    <p class="font-mincho text-charcoal/80 leading-loose text-sm">
      FRAMIA は、その場で入会を迫ることを、絶対にしません。
      あなたのペースを守るために、この相談所を作りました。
    </p>
  </div>
</div>
```

予約フォームは「ご希望の日時」を自由記述にする（固定曜日を示さない）。

### セクション12：フッター

- 法人名：AFEL合同会社
- 代表者：田中 陣
- 住所：東京都世田谷区弦巻5-8-11
- 電話番号：090-8494-3356
- 営業時間：平日 11:00〜20:00 / 土日祝 10:00〜19:00
- 定休日：不定休（事前予約制）
- IBJ 加盟情報：agency_id=10307
- ドメイン：framia.jp
- 特商法に基づく表示

---

## 6. スクロール追従 CTA とセクション末尾 CTA

### フローティング CTA（モバイルのみ）

```html
<div id="floating-cta" class="fixed bottom-0 inset-x-0 md:hidden z-50 px-4 pb-4 pointer-events-none">
  <a href="#contact"
     class="pointer-events-auto block text-center bg-charcoal text-ivory font-mincho py-4 rounded-full shadow-lg">
    無料相談を予約する
  </a>
</div>
```

### セクション末尾 CTA（各セクションに共通挿入）

```html
<div class="text-center mt-16">
  <a href="#contact" class="cta-secondary">続きを、無料相談で話す →</a>
</div>
```

### CTA CSS

```css
.cta-primary {
  display: inline-block;
  background: #2b2b2b;
  color: #f7f3ea;
  padding: 18px 40px;
  border-radius: 999px;
  font-family: 'Shippori Mincho', serif;
  font-size: 16px;
  letter-spacing: .1em;
}
.cta-secondary {
  display: inline-block;
  color: #2b2b2b;
  border-bottom: 1px solid #2b2b2b;
  padding-bottom: 4px;
  font-family: 'Shippori Mincho', serif;
  font-size: 15px;
}
```

### フローティング CTA 表示制御 JS

```js
const floating = document.getElementById('floating-cta');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) floating.classList.add('is-visible');
  else floating.classList.remove('is-visible');
});
```

---

## 7. 技術スタック

| 項目 | 指定 |
|---|---|
| フレームワーク | 静的 HTML + Tailwind CSS（CDN） |
| フォント | Shippori Mincho（Google Fonts CDN）+ Inter |
| レスポンシブ | モバイルファースト |
| デプロイ | Vercel（GitHub リポジトリ連携・自動デプロイ） |
| ドメイン | framia.jp（ムームードメイン取得済み） |
| SSL | Vercel が自動発行（無料） |

### Tailwind カスタムカラー設定

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ivory: '#f7f3ea',
        charcoal: '#2b2b2b',
        camel: '#c9a96e',
      },
      fontFamily: {
        mincho: ['Shippori Mincho', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

### Google Fonts 読み込み

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## 8. 計測設定

### GA4 イベント

| イベント名 | トリガー | 重要度 |
|---|---|---|
| `form_submit_success` | 無料相談フォーム送信成功 | **主要イベント** |
| `worry_tab_click` | セクション2のタブクリック | 補助指標 |
| `cta_floating_click` | フローティング CTA クリック | 補助指標 |
| `cta_section_click` | セクション末尾 CTA クリック | 補助指標 |

### 目標 CVR

- 改修前（想定）：0.8〜1.5%
- 目標：**2.0〜3.0%**

---

## 9. 営業時間と定休日の表記方針

### 記載内容

> 営業時間：平日 11:00〜20:00 / 土日祝 10:00〜19:00
> 定休日：不定休（事前予約制・ご希望の日時に柔軔に対応します）

### 補足テキスト（LP 内に配置）

> FRAMIA は、一人ひとりに寄り添う少人数制の相談所です。
> あなたの暮らしに合わせた日時で、ご相談をお受けします。

### 予約フォームの設計

「ご希望の日時」を自由記述にし、固定曜日の制約を見せない：

> ご希望の日時：（例：平日夕方、土日午前 等）
> ※対応可能日時はご相談後ご案内します

---

## 10. Claude Code プロンプト

以下のプロンプトで Claude Code に LP 制作を指示する：

```
FRAMIA の集客用 LP を制作してください。
この仕様書（FRAMIA_LP_Spec.md）に記載された全セクション・デザインシステム・コンテンツを実装してください。

技術スタック：
- 静的 HTML + Tailwind CSS（CDN）
- Shippori Mincho（Google Fonts CDN）+ Inter
- レスポンシブ（モバイルファースト）
- デプロイ先：Vercel（GitHub リポジトリ連携）

デザインシステム：
- 背景：#f7f3ea（アイブリー）
- テキスト：#2b2b2b（チャコール）
- アクセント：#c9a96e（キャメル）
- フォント：Shippori Mincho + Inter
- CTA：チャコール背景・アイブリー文字・丸角
- 薄い金の二重枠をブランドシグネチャーとして使用

セクション構成（12セクション）：
1. ヒーロー（ブランドステートメント「結婚の前も、その先も、あなたらしく。」+ CTA）
2. 不安の代弁（タブ切替 4 つ）
3. FRAMIA とは（3 つの姿勢）
4. 代表紹介（田中陣：プランナー3年・ビデオグラファー10年・300組以上 + プロフィール写真）
5. うまくいく人の共通点（3 つ）
6. 無料相談で聞くこと・聞かないこと
7. 60 分で持ち帰れること（チェックリスト 4 項目）
8. 料金プラン（入会金¥0／登録料¥33,000／活動サポート費¥44,000／月会費¥11,000／お見合い料¥0／成婚料¥220,000 + サポート内容6項目）
9. お客様の声（準備中）
10. FAQ（Q1〜Q8）
11. お問い合わせ（無料相談予約 CTA + 相談後の流れ + 勧誘しない明文化）
12. フッター（AFEL合同会社／代表 田中陣／東京都世田谷区弦巻5-8-11／090-8494-3356／営業時間／不定休・事前予約制／IBJ加盟）

特徴：
- スクロール追従 CTA（モバイルのみ、600px 以降で表示）
- 各セクション末尾に控えめな CTA リンク
- GA4 イベント：worry_tab_click / cta_floating_click / cta_section_click / form_submit_success
- 予約フォームは「ご希望の日時」を自由記述に（固定曜日を示さない）
```

---

## 11. IBJ 自己紹介文（他相談所宛・200文字以内・139文字）

> FRAMIA代表の田中陣です。プランナー3年・ビデオグラファー10年で、300組以上のご夫婦を一番近くで見てきました。「結婚を急ぐ場所ではなく、整える場所」を掲げ、出会いからその先の暮らしまで伴走するライフデザイン型の相談所です。誠実な方とのご縁を大切に、連携も歓迎いたします。

---

## 12. IBJ 相談所特徴ページ用キャッチコピー（30文字以内・18文字）

> 結婚を急ぐ場所ではなく、整える場所。
