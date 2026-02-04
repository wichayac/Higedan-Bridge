let currentLang = localStorage.getItem('preferredLang') || 'jp';

const homeData = {
    jp: {
        title: `ヒゲダンの架け橋`,
        home: `ホーム`,
        official: "オフィシャルサイト",
        welcome: `こんにちは! ここはJ-POPバンドOfficial髭男dismというのファンサイトです！`,
        sub: `歌詞の翻訳をここにポストします！ よろしくお願いします！❤️`,
        btn: `Switch to English`
    },
    en: {
        title: "Higedan Bridge",
        home: "Home",
        official: "Official Site",
        welcome: `Hello! This is a fan site for the J-POP band Official HIGE DANdism!`,
        sub: `I will post lyrics and translations here!❤️`,
        btn: `日本語に切り替える`
    }
}

const songData = [
    {
        title: "Same Blue",
        jp: `気持ちの整理がつかないままの朝に 散らかったそれを鞄に詰め込んだ
        やっぱり僕は あなたの前の僕は 渡したい言葉なんて渡せないまま
        1人の夜に中身を広げようとして 胸の奥がひりついてたまらなかった
        好きな想いが あなたを好きという想いが あまりにも嵩張ってたから
        近くて遠い日々に眩暈がした 落ち込んで浮かれての寒暖差に
        染められて増えていた この重みを 絶対に離したくないと
        胸は痛いくせに そう叫んでしまっていた
        春の中 あなたを見た 見惚れていた 夏模様の中で
        移ろう街と逆に 青のまま募る心
        秋の空 雪が混じった その全てがとても似合っていた
        よそ見する暇もない忙しい世界を 走るように恋をしている
        あなたという季節の中で
        足りないものを少しでも減らそうとして
        力んで余計にいくつも増えたりして
        やっぱり僕じゃあなたを好きな僕じゃ 釣り合いたがる資格もないよなあ
        あれだけ用意した伝えたかったこと 色んな自分に邪魔をされた
        鞄の中で揺れ 拗れてさらに膨れ
        傷跡にさえなれずに 隠し持った想いたちが
        溢れることを選んだ日は ちゃんと届けたい
        あなたの心の中へ
        春の中 あなたを見た 見惚れていた 夏模様の中で
        移ろう街と逆に 青のまま募る心
        秋の空 雪が混じった その全てがとても似合っていた
        よそ見する暇もない忙しい世界を 走るように恋をしている
        青のまま濁って澄んで 大きな未熟さを背負って
        明日も息を切らしたい あなたの居る目まぐるしい世界で
        あなたという季節の中で`,
        en: `This morning when my thoughts
        And my emotions were still a whole mess
        I have stuffed everything all into my bag
        No more, no less
        Still, I just cannot be myself when I am in front of you
        I wish I could but I cannot give you the words that I want to

        During this night alone, I spread everything out as I unpack
        But this painful feeling in my heart just kept stabbing me back
        This love I feel inside, all of this love that I feel inside for you
        It is too heavy, but this is all I can do

        Our days seem so close yet so far, making me all dizzy
        Temperature difference had my mind in a tizzy
        My heart’s filled with growing feelings for you inside of me
        I wish I could but I just can’t lеt them go
        As much as I am in pain, I still want to scream out to you

        During this springtime, I am watching you shinе
        I am mesmerized, with this summer pattern and design
        As this world that we live is changing
        My heart stayed blue, this feeling only grew
        In this autumn sky, with this snow combined
        Every little thing around you fits you perfectly fine
        I am totally deep in love like
        As if I’m running around this busy life, no break to be free
        We’re spending this season named under you as we see

        I’m trying my best to reduce the number of things I lack
        For some reason, they increase the more I’m trying to do that
        It seems that I, who loves you from the bottom of my heart
        Will never have the right to match your part
        Words that I prepared to say
        All the things that are in the way
        They are being blocked by different me always
        Everything shaking in this bag
        They will just swell and they sway
        It can’t even be left as a scar
        Feelings I’m trying to hide so far
        On the day my heart overflows
        Just wanna let you know
        Straight to your heart
        Where my love for you belong

        During this springtime, I am watching you shine
        I am mesmerized, with this summer pattern and design
        As this world that we live is changing
        My heart stayed blue, this feeling only grew
        In this autumn sky, with this snow combined
        Every little thing around you fits you perfectly fine
        I am totally deep in love like
        As if I’m running around this busy life, with no break to arise
        Tainted but still blue, yet clear as can be
        Carry immaturity, heavily


        Tomorrow, I’ll still try to gasp for air
        In this spinning world that you live in without a single care
        We’re spending this season named under you as declared`

    },
    {
        title: "Pretender",
        jp: `君とのラブストーリー
        それは予想通り
        いざ始まればひとり芝居だ
        ずっとそばにいたって
        結局ただの観客だ
        感情のないアイムソーリー
        それはいつも通り
        慣れてしまえば悪くはないけど
        君とのロマンスは人生柄
        続きはしないことを知った
        もっと違う設定で
        もっと違う関係で
        出会える世界線
        選べたらよかった
        もっと違う性格で
        もっと違う価値観で
        愛を伝えられたらいいな
        そう願っても無駄だから
        グッバイ
        君の運命のヒトは僕じゃない
        辛いけど否めない
        でも離れ難いのさ
        その髪に触れただけで
        痛いや いやでも
        甘いな いやいや
        グッバイ
        それじゃ僕にとって君は何？
        答えは分からない
        分かりたくもないのさ
        たったひとつ確かなことがあるとするのならば
        君は綺麗だ
        誰かが偉そうに
        語る恋愛の論理
        何ひとつとしてピンとこなくて
        飛行機の窓から見下ろした
        知らない街の夜景みたいだ
        もっと違う設定で
        もっと違う関係で
        出会える世界線
        選べたらよかった
        いたって純な心で
        叶った恋を抱きしめて
        好きだとか無責任に言えたらいいな
        そう願っても虚しいのさ
        グッバイ
        繋いだ手の向こうにエンドライン
        引き伸ばすたびに
        疼きだす未来には
        君はいない
        その事実に Cry
        そりゃ苦しいよな
        グッバイ
        君の運命のヒトは僕じゃない
        辛いけど否めない
        でも離れ難いのさ
        その髪に触れただけで
        痛いや いやでも
        甘いな いやいや
        グッバイ
        それじゃ僕にとって君は何？
        答えは分からない
        分かりたくもないのさ
        たったひとつ確かなことがあるとするのならば
        君は綺麗だ
        それもこれもロマンスの定めなら
        悪くないよな
        永遠も約束もないけれど
        とても綺麗だ`,
        en: `Our love story, just as expected
        When it starts, it's just a one-man show
        Even though I was always by your side, I'm just in the audience
        An apology without emotion, just like always
        It's not so bad once you get used to it

        My romance with you is how life goes
        I knew it would never last

        I wish I had chosen a different setting, a different relation
        A different world-line where I could meet you
        I wish I had been able to show my love in a different personality
        With different values
        But I know it's pointless

        Goodbye
        I'm not your soulmate
        It hurts, but I can't deny it, but it's still hard to let go
        It hurts just to touch your hair, but
        It feels so sweet, no no

        Goodbye
        So, what are you to me?
        I don't know the answer, I don't want to know the answer
        If there's just one thing I know that's true, it's that
        "You're beautiful"

        Some self-important person lecturing about love
        But nothing makes any sense
        It's like seeing the nightscape of an unknown city from an airplane window

        I wish I had chosen a different setting, a different relation
        A different world-line where I could meet you
        I wish I could have had that love come true, and told you "I love you" without any responsibility
        With a pure heart
        But it's an empty wish

        Goodbye
        There's an end line beyond the hand I hold
        Every time it's prolonged, at the end of a tingling future
        You're not there, and I cry at that truth
        It's just too painful

        Goodbye
        I'm not your soulmate
        It hurts, but I can't deny it, but it's still hard to let go
        It hurts just to touch your hair, but
        It feels so sweet, no no

        Goodbye
        So, what are you to me?
        I don't know the answer, I don't want to know the answer
        If there's just one thing I know that's true, it's that
        "You're beautiful"`
    }
];

function toggleLanguage() {
    const targetLang = (currentLang === 'jp') ? 'en' : 'jp';
    //exists on all pages
    document.getElementById('website-title').innerText = homeData[targetLang].title;
    document.getElementById('nav-home').innerText = homeData[targetLang].home;
    document.getElementById('nav-official').innerText = homeData[targetLang].official;
    document.getElementById('lang-btn').innerText = homeData[targetLang].btn;

    const welcomeMsg = document.getElementById('welcome-msg');
    const welcomeSub = document.getElementById('welcome-sub');
    const lyricContent = document.getElementById('lyric-content');
    //update only if they are on the page
    if (welcomeMsg) welcomeMsg.innerText = homeData[targetLang].welcome;
    if (welcomeSub) welcomeSub.innerText = homeData[targetLang].sub;
    if (lyricContent) lyricContent.innerText = songData[targetLang];

    currentLang = targetLang;
    localStorage.setItem('preferredLang', currentLang);
}

window.onload = function() {
    if (currentLang === 'en') {
        currentLang = 'jp';
        toggleLanguage();
    }

    const lyricElement = document.getElementById('lyric-content');
    if (lyricElement) {
        const songName = document.title.trim().toLowerCase().replace(/\s+/g, '-'); /* Such as Same Blue to same-blue */
        applyTheme(songName);
    } else {
        applyTheme(); // Default for Home
    }
}

function applyTheme(themeName) {
    const classes = document.body.classList;
    const themeClasses = Array.from(classes).filter(c => c.startsWith('theme-'));

    themeClasses.forEach(c => document.body.classList.remove(c));

    if (themeName) {
        document.body.classList.add(`theme-${themeName}`);
    }
}