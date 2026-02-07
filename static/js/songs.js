/**
 * NOTE: Lyrics data is manually hardcoded with HTML <ruby> tags.
 * We cannot use auto-generation APIs here because song lyrics often use 
 * "Gikun" (artistic readings) that differ from standard dictionary readings.
 * * Example: "忙しい" is sung as "sewashii" (poetic) not "isogashii", 
 * while standard APIs would render "Isogashii".
 */

const songData = [
    {
        title: "Same Blue",
        spotifyID: "3tRgmNTaFYgtbt7XCy6Les",
        jp: `<ruby>気持<rt>きも</rt></ruby>ちの<ruby>整理<rt>せいり</rt></ruby>がつかないままの<ruby>朝<rt>あさ</rt></ruby>に <ruby>散<rt>ち</rt></ruby>らかったそれを<ruby>鞄<rt>かばん</rt></ruby>に<ruby>詰<rt>つ</rt></ruby>め<ruby>込<rt>こ</rt></ruby>んだ
        やっぱり<ruby>僕<rt>ぼく</rt></ruby>は あなたの<ruby>前<rt>まえ</rt></ruby>の<ruby>僕<rt>ぼく</rt></ruby>は <ruby>渡<rt>わた</rt></ruby>したい<ruby>言葉<rt>ことば</rt></ruby>なんて<ruby>渡<rt>わた</rt></ruby>せないまま

        1<ruby>人<rt>ひとり</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>に<ruby>中身<rt>なかみ</rt></ruby>を<ruby>広<rt>ひろ</rt></ruby>げようとして <ruby>胸<rt>むね</rt></ruby>の<ruby>奥<rt>おく</rt></ruby>がひりついてたまらなかった
        <ruby>好<rt>す</rt></ruby>きな<ruby>想<rt>おも</rt></ruby>いが あなたを<ruby>好<rt>す</rt></ruby>きという<ruby>想<rt>おも</rt></ruby>いが あまりにも<ruby>嵩張<rt>かさば</rt></ruby>ってたから

        <ruby>近<rt>ちか</rt></ruby>くて<ruby>遠<rt>とお</rt></ruby>い<ruby>日々<rt>ひび</rt></ruby>に<ruby>眩暈<rt>めまい</rt></ruby>がした <ruby>落<rt>お</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んで<ruby>浮<rt>う</rt></ruby>かれての<ruby>寒暖差<rt>かんだんさ</rt></ruby>に
        <ruby>染<rt>そ</rt></ruby>められて<ruby>増<rt>ふ</rt></ruby>えていた この<ruby>重<rt>おも</rt></ruby>みを <ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>離<rt>はな</rt></ruby>したくないと
        <ruby>胸<rt>むね</rt></ruby>は<ruby>痛<rt>いた</rt></ruby>いくせに そう<ruby>叫<rt>さけ</rt></ruby>んでしまっていた
        ♪
        <ruby>春<rt>はる</rt></ruby>の<ruby>中<rt>なか</rt></ruby> あなたを<ruby>見<rt>み</rt></ruby>た <ruby>見惚<rt>みと</rt></ruby>れていた <ruby>夏模様<rt>なつもよう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で
        <ruby>移<rt>うつ</rt></ruby>ろう<ruby>街<rt>まち</rt></ruby>と<ruby>逆<rt>ぎゃく</rt></ruby>に <ruby>青<rt>あお</rt></ruby>のまま<ruby>募<rt>つの</rt></ruby>る<ruby>心<rt>こころ</rt></ruby>
        <ruby>秋<rt>あき</rt></ruby>の<ruby>空<rt>そら</rt></ruby> <ruby>雪<rt>ゆき</rt></ruby>が<ruby>混<rt>ま</rt></ruby>じった その<ruby>全<rt>すべ</rt></ruby>てがとても<ruby>似合<rt>にあ</rt></ruby>っていた
        よそ<ruby>見<rt>み</rt></ruby>する<ruby>暇<rt>ひま</rt></ruby>もない<ruby>忙<rt>せわ</rt></ruby>しい<ruby>世界<rt>せかい</rt></ruby>を <ruby>走<rt>はし</rt></ruby>るように<ruby>恋<rt>こい</rt></ruby>をしている
        あなたという<ruby>季節<rt>きせつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で
        ♪
        <ruby>足<rt>た</rt></ruby>りないものを<ruby>少<rt>すこ</rt></ruby>しでも<ruby>減<rt>へ</rt></ruby>らそうとして
        <ruby>力<rt>りき</rt></ruby>んで<ruby>余計<rt>よけい</rt></ruby>にいくつも<ruby>増<rt>ふ</rt></ruby>えたりして
        やっぱり<ruby>僕<rt>ぼく</rt></ruby>じゃあなたを<ruby>好<rt>す</rt></ruby>きな<ruby>僕<rt>ぼく</rt></ruby>じゃ <ruby>釣<rt>つ</rt></ruby>り<ruby>合<rt>あ</rt></ruby>いたがる<ruby>資格<rt>しかく</rt></ruby>もないよなあ

        あれだけ<ruby>用意<rt>ようい</rt></ruby>した<ruby>伝<rt>つた</rt></ruby>えたかったこと <ruby>色<rt>いろ</rt></ruby>んな<ruby>自分<rt>じぶん</rt></ruby>に<ruby>邪魔<rt>じゃま</rt></ruby>をされた
        <ruby>鞄<rt>かばん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>揺<rt>ゆ</rt></ruby>れ <ruby>拗<rt>こじ</rt></ruby>れてさらに<ruby>膨<rt>ふく</rt></ruby>れ
        <ruby>傷跡<rt>きずあと</rt></ruby>にさえなれずに <ruby>隠<rt>かく</rt></ruby>し<ruby>持<rt>も</rt></ruby>った<ruby>想<rt>おも</rt></ruby>いたちが
        <ruby>溢<rt>あふ</rt></ruby>れることを<ruby>選<rt>えら</rt></ruby>んだ<ruby>日<rt>ひ</rt></ruby>は ちゃんと<ruby>届<rt>とど</rt></ruby>けたい
        あなたの<ruby>心<rt>こころ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>へ
        ♪
        <ruby>春<rt>はる</rt></ruby>の<ruby>中<rt>なか</rt></ruby> あなたを<ruby>見<rt>み</rt></ruby>た <ruby>見惚<rt>みと</rt></ruby>れていた <ruby>夏模様<rt>なつもよう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で
        <ruby>移<rt>うつ</rt></ruby>ろう<ruby>街<rt>まち</rt></ruby>と<ruby>逆<rt>ぎゃく</rt></ruby>に <ruby>青<rt>あお</rt></ruby>のまま<ruby>募<rt>つの</rt></ruby>る<ruby>心<rt>こころ</rt></ruby>
        <ruby>秋<rt>あき</rt></ruby>の<ruby>空<rt>そら</rt></ruby> <ruby>雪<rt>ゆき</rt></ruby>が<ruby>混<rt>ま</rt></ruby>じった その<ruby>全<rt>すべ</rt></ruby>てがとても<ruby>似合<rt>にあ</rt></ruby>っていた
        よそ<ruby>見<rt>み</rt></ruby>する<ruby>暇<rt>ひま</rt></ruby>もない<ruby>忙<rt>いそが</rt></ruby>しい<ruby>世界<rt>せかい</rt></ruby>を <ruby>走<rt>はし</rt></ruby>るように<ruby>恋<rt>こい</rt></ruby>をしている

        <ruby>青<rt>あお</rt></ruby>のまま<ruby>濁<rt>にご</rt></ruby>って<ruby>澄<rt>す</rt></ruby>んで <ruby>大<rt>おお</rt></ruby>きな<ruby>未熟<rt>みじゅく</rt></ruby>さを<ruby>背負<rt>しょ</rt></ruby>って
        <ruby>明日<rt>あす</rt></ruby>も<ruby>息<rt>いき</rt></ruby>を<ruby>切<rt>き</rt></ruby>らしたい あなたの<ruby>居<rt>い</rt></ruby>る<ruby>目<rt>め</rt></ruby>まぐるしい<ruby>世界<rt>せかい</rt></ruby>で
        あなたという<ruby>季節<rt>きせつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で`,
        en: `In the morning when I couldn't organize my feelings, I stuffed the mess into my bag.
        After all, I, the person I was before you, can't even give me the words I want to give you.

        As I tried to unpack my contents one night alone, I felt an unbearable tingle deep inside my chest.
        Because my feelings of liking you, my feelings of loving you were too overwhelming.

        I was dizzy at the days that were near and far away, feeling depressed and excited at the difference in temperature.
        I never want to let go of this weight that has been dyed and increased.
        Even though my chest hurt, I cried out
        ♪
        I saw you in the spring and fell in love with you in the summer pattern
        Contrary to the ever-changing city, my heart continues to gather while still being blue.
        The autumn sky mixed with snow, everything looked so good together.
        In the season of you
        ♪
        Trying to reduce what is missing as much as possible
        I strained myself and added more and more.
        After all, since I love you, I don't have the right to even want to match you.

        I had prepared so many things that I wanted to say, but I was hindered by many things about myself.
        Shaking inside my bag, it swells even more
        The feelings that I hid without even becoming scars
        On the day I choose to overflow, I want to deliver it properly
        into your heart
        ♪
        I saw you in the middle of spring and fell in love with you in the midst of summer patterns
        Contrary to the ever-changing city, my heart continues to gather while still being blue.
        The autumn sky mixed with snow, everything looked so good together.
        In a busy world where I don't have time to look away, I'm running in love

        Still blue, cloudy and clear, carrying a huge immaturity
        I want to be out of breath again tomorrow in this fast-paced world where you live.
        In the season of you`

    },
    {
        title: "Pretender",
        spotifyID: "1OBAWkIciXl8rmbKtrp9ZG",
        jp: `<ruby>君<rt>きみ</rt></ruby>とのラブストーリー それは<ruby>予想通<rt>よそうどお</rt></ruby>り
        いざ<ruby>始<rt>はじ</rt></ruby>まればひとり<ruby>芝居<rt>しばい</rt></ruby>だ
        ずっとそばにいたって <ruby>結局<rt>けっきょく</rt></ruby>ただの<ruby>観客<rt>かんきゃく</rt></ruby>だ

        <ruby>感情<rt>かんじょう</rt></ruby>のないアイムソーリー それはいつも<ruby>通<rt>どお</rt></ruby>り
        <ruby>慣<rt>な</rt></ruby>れてしまえば<ruby>悪<rt>わる</rt></ruby>くはないけど
        <ruby>君<rt>きみ</rt></ruby>とのロマンスは<ruby>人生柄<rt>じんせいがら</rt></ruby> <ruby>続<rt>つづ</rt></ruby>きはしないことを<ruby>知<rt>し</rt></ruby>った

        もっと<ruby>違<rt>ちが</rt></ruby>う<ruby>設定<rt>せってい</rt></ruby>で もっと<ruby>違<rt>ちが</rt></ruby>う<ruby>関係<rt>かんけい</rt></ruby>で
        <ruby>出会<rt>であ</rt></ruby>える<ruby>世界線<rt>せかいせん</rt></ruby> <ruby>選<rt>えら</rt></ruby>べたらよかった
        もっと<ruby>違<rt>ちが</rt></ruby>う<ruby>性格<rt>せいかく</rt></ruby>で もっと<ruby>違<rt>ちが</rt></ruby>う<ruby>価値観<rt>かちかん</rt></ruby>で
        <ruby>愛<rt>あい</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えられたらいいな
        そう<ruby>願<rt>ねが</rt></ruby>っても<ruby>無駄<rt>むだ</rt></ruby>だから

        グッバイ
        <ruby>君<rt>きみ</rt></ruby>の<ruby>運命<rt>うんめい</rt></ruby>のヒト</ruby>は<ruby>僕<rt>ぼく</rt></ruby>じゃない
        <ruby>辛<rt>つら</rt></ruby>いけど<ruby>否<rt>いな</rt></ruby>めない
        でも<ruby>離<rt>はな</rt></ruby>れ<ruby>難<rt>がた</rt></ruby>いのさ
        その<ruby>髪<rt>かみ</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れただけで
        <ruby>痛<rt>いた</rt></ruby>いや いやでも
        <ruby>甘<rt>あま</rt></ruby>いな いやいや

        グッバイ
        それじゃ<ruby>僕<rt>ぼく</rt></ruby>にとって<ruby>君<rt>きみ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>？
        <ruby>答<rt>こた</rt></ruby>えは<ruby>分<rt>わ</rt></ruby>からない <ruby>分<rt>わ</rt></ruby>かりたくもないのさ
        たったひとつ<ruby>確<rt>たし</rt></ruby>かなことがあるとするのならば
        「<ruby>君<rt>きみ</rt></ruby>は<ruby>綺麗<rt>きれい</rt></ruby>だ」
        ♪
        <ruby>誰<rt>だれ</rt></ruby>かが<ruby>偉<rt>えら</rt></ruby>そうに <ruby>語<rt>かた</rt></ruby>る<ruby>恋愛<rt>れんあい</rt></ruby>の<ruby>論理<rt>ろんり</rt></ruby>
        <ruby>何<rt>なに</rt></ruby>ひとつとしてピンとこなくて
        <ruby>飛行機<rt>ひこうき</rt></ruby>の<ruby>窓<rt>まど</rt></ruby>から<ruby>見下<rt>みお</rt></ruby>ろした <ruby>知<rt>し</rt></ruby>らない<ruby>街<rt>まち</rt></ruby>の<ruby>夜景<rt>やけい</rt></ruby>みたいだ

        もっと<ruby>違<rt>ちが</rt></ruby>う<ruby>設定<rt>せってい</rt></ruby>で もっと<ruby>違<rt>ちが</rt></ruby>う<ruby>関係<rt>かんけい</rt></ruby>で
        <ruby>出会<rt>であ</rt></ruby>える<ruby>世界線<rt>せかいせん</rt></ruby> <ruby>選<rt>えら</rt></ruby>べたらよかった
        いたって<ruby>純<rt>じゅん</rt></ruby>な<ruby>心<rt>こころ</rt></ruby>で <ruby>叶<rt>かな</rt></ruby>った<ruby>恋<rt>こい</rt></ruby>を<ruby>抱<rt>だ</rt></ruby>きしめて
        「<ruby>好<rt>す</rt></ruby>きだ」とか<ruby>無責任<rt>むせきにん</rt></ruby>に<ruby>言<rt>い</rt></ruby>えたらいいな
        そう<ruby>願<rt>ねが</rt></ruby>っても<ruby>虚<rt>むな</rt></ruby>しいのさ

        グッバイ
        <ruby>繋<rt>つな</rt></ruby>いだ<ruby>手<rt>て</rt></ruby>の<ruby>向<rt>む</rt></ruby>こうにエンドライン
        <ruby>引<rt>ひ</rt></ruby>き<ruby>伸<rt>の</rt></ruby>ばすたびに <ruby>疼<rt>うず</rt></ruby>きだす<ruby>未来<rt>みらい</rt></ruby>には
        <ruby>君<rt>きみ</rt></ruby>はいない その<ruby>事実<rt>じじつ</rt></ruby>に Cry
        そりゃ<ruby>苦<rt>くる</rt></ruby>しいよな
        ♪
        グッバイ
        <ruby>君<rt>きみ</rt></ruby>の<ruby>運命<rt>うんめい</rt></ruby>のヒト</ruby>は<ruby>僕<rt>ぼく</rt></ruby>じゃない
        <ruby>辛<rt>つら</rt></ruby>いけど<ruby>否<rt>いな</rt></ruby>めない でも<ruby>離<rt>はな</rt></ruby>れ<ruby>難<rt>がた</rt></ruby>いのさ
        その<ruby>髪<rt>かみ</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れただけで <ruby>痛<rt>いた</rt></ruby>いや いやでも
        <ruby>甘<rt>あま</rt></ruby>いな いやいや

        グッバイ
        それじゃ<ruby>僕<rt>ぼく</rt></ruby>にとって<ruby>君<rt>きみ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>？
        <ruby>答<rt>こた</rt></ruby>えは<ruby>分<rt>わ</rt></ruby>からない <ruby>分<rt>わ</rt></ruby>かりたくもないのさ
        たったひとつ<ruby>確<rt>たし</rt></ruby>かなことがあるとするのならば
        「<ruby>君<rt>きみ</rt></ruby>は<ruby>綺麗<rt>きれい</rt></ruby>だ」

        それもこれもロマンスの<ruby>定<rt>さだ</rt></ruby>めなら
        <ruby>悪<rt>わる</rt></ruby>くないよな
        <ruby>永遠<rt>えいえん</rt></ruby>も<ruby>約束<rt>やくそく</rt></ruby>もないけれど
        「とても<ruby>綺麗<rt>きれい</rt></ruby>だ」`,
        en: `Love story with you, just as expected
        Once it starts, it's just a one-man show
        Even though I was always by your side. In the end, I was just an audience
        
        "I'm sorry" without any feeling, that's just like always
        It's not that bad once you get used to it
        A romance with you, given my way of life
        I knew it wouldn’t continue

        In a different setting,
        in a different kind of relationship,
        in a worldline where we could meet
        I wish I could have chosen that
        With a different personality,
        with different values,
        I wish I could have conveyed my love to you.
        But I know it's pointless

        Goodbye
        I'm not the one you're meant to be with
        It hurts, but I can't deny it, and yet I can't let go
        Just touching your hair, it hurts
        No... it's sweet though, no no

        Goodbye
        So, what are you to me?
        I don't know the answer, I don't even want to know 
        If there's just one thing I know that's true, it's that
        "You're beautiful"
        ♪
        Some self-important person lecturing about love
        But nothing makes any sense
        It's like seeing the nightscape of an unknown city from an airplane window

        In a different setting,
        in a different kind of relationship,
        in a worldline where we could meet
        I wish I could have chosen that
        If I had an utterly pure heart,
        if I were holding a love that actually came true,
        then maybe I could say something like “I love you” freely.
        But it's an empty wish

        Goodbye
        There's an end line beyond the hand I hold
        Every time I try to make it last
        the future starts to ache
        You're not there, and I cry at that truth
        That just hurts
        ♪
        Goodbye
        I'm not the one you're meant to be with
        It hurts, but I can't deny it, and yet I can't let go
        Just touching your hair, it hurts
        No... it's sweet though, no no

        Goodbye
        So, what are you to me?
        I don't know the answer, I don't even want to know 
        If there's just one thing I know that's true, it's that
        "You're beautiful"
        
        If that's what romance is all about
        It's not that bad, right?
        There's no promise of eternity, but
        It's very beautiful.
        `
    }
];