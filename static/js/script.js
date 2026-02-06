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
        spotifyID: "3tRgmNTaFYgtbt7XCy6Les",
        jp: `気持ちの整理がつかないままの朝に 散らかったそれを鞄に詰め込んだ
        やっぱり僕は あなたの前の僕は 渡したい言葉なんて渡せないまま

        1人の夜に中身を広げようとして 胸の奥がひりついてたまらなかった
        好きな想いが あなたを好きという想いが あまりにも嵩張ってたから

        近くて遠い日々に眩暈がした 落ち込んで浮かれての寒暖差に
        染められて増えていた この重みを 絶対に離したくないと
        胸は痛いくせに そう叫んでしまっていた
        ♪
        春の中 あなたを見た 見惚れていた 夏模様の中で
        移ろう街と逆に 青のまま募る心
        秋の空 雪が混じった その全てがとても似合っていた
        よそ見する暇もない忙しい世界を 走るように恋をしている
        あなたという季節の中で
        ♪
        足りないものを少しでも減らそうとして
        力んで余計にいくつも増えたりして
        やっぱり僕じゃあなたを好きな僕じゃ 釣り合いたがる資格もないよなあ

        あれだけ用意した伝えたかったこと 色んな自分に邪魔をされた
        鞄の中で揺れ 拗れてさらに膨れ
        傷跡にさえなれずに 隠し持った想いたちが
        溢れることを選んだ日は ちゃんと届けたい
        あなたの心の中へ
        ♪
        春の中 あなたを見た 見惚れていた 夏模様の中で
        移ろう街と逆に 青のまま募る心
        秋の空 雪が混じった その全てがとても似合っていた
        よそ見する暇もない忙しい世界を 走るように恋をしている

        青のまま濁って澄んで 大きな未熟さを背負って
        明日も息を切らしたい あなたの居る目まぐるしい世界で
        あなたという季節の中で`,
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
        jp: `君とのラブストーリー それは予想通り
        いざ始まればひとり芝居だ
        ずっとそばにいたって 結局ただの観客だ

        感情のないアイムソーリー それはいつも通り
        慣れてしまえば悪くはないけど
        君とのロマンスは人生柄 続きはしないことを知った

        もっと違う設定で もっと違う関係で
        出会える世界線 選べたらよかった
        もっと違う性格で もっと違う価値観で
        愛を伝えられたらいいな
        そう願っても無駄だから

        グッバイ
        <ruby>君<rt>きみ</rt></ruby>の<ruby>運命<rt>うんめい</rt></ruby>の<ruby>ヒト<rt>ひと</rt></ruby>は<ruby>僕<rt>ぼく</rt></ruby>じゃない
        <ruby>辛<rt>つら</rt></ruby>いけど<ruby>否<rt>いな</rt></ruby>めない
        でも<ruby>離<rt>はな</rt></ruby>れ<ruby>難<rt>がた</rt></ruby>いのさ
        その<ruby>髪<rt>かみ</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れただけで
        <ruby>痛<rt>いた</rt></ruby>いや いやでも
        <ruby>甘<rt>あま</rt></ruby>いな いやいや

        グッバイ
        それじゃ僕にとって君は何？
        答えは分からない 分かりたくもないのさ
        たったひとつ確かなことがあるとするのならば
        「君は綺麗だ」
        ♪
        誰かが偉そうに 語る恋愛の論理
        何ひとつとしてピンとこなくて
        飛行機の窓から見下ろした 知らない街の夜景みたいだ

        もっと違う設定で もっと違う関係で
        出会える世界線 選べたらよかった
        いたって純な心で 叶った恋を抱きしめて
        「好きだ」とか無責任に言えたらいいな
        そう願っても虚しいのさ

        グッバイ
        繋いだ手の向こうにエンドライン
        引き伸ばすたびに 疼きだす未来には
        君はいない その事実に Cry
        そりゃ苦しいよな
        ♪
        グッバイ
        君の運命のヒトは僕じゃない
        辛いけど否めない でも離れ難いのさ
        その髪に触れただけで 痛いや いやでも
        甘いな いやいや

        グッバイ
        それじゃ僕にとって君は何？
        答えは分からない 分かりたくもないのさ
        たったひとつ確かなことがあるとするのならば
        「君は綺麗だ」

        それもこれもロマンスの定めなら
        悪くないよな
        永遠も約束もないけれど
        「とても綺麗だ」`,
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

function toggleLanguage() {
    const targetLang = (currentLang === 'jp') ? 'en' : 'jp';
    //exists on all pages
    document.getElementById('website-title').innerText = homeData[targetLang].title;
    document.getElementById('nav-home').innerText = homeData[targetLang].home;
    document.getElementById('nav-official').innerText = homeData[targetLang].official;
    document.getElementById('lang-btn').innerText = homeData[targetLang].btn;

    //check for home page elements 
    const welcomeMsg = document.getElementById('welcome-msg');
    const welcomeSub = document.getElementById('welcome-sub');
    if (welcomeMsg) welcomeMsg.innerText = homeData[targetLang].welcome;
    if (welcomeSub) welcomeSub.innerText = homeData[targetLang].sub;

    //check for lyrics page elements
    const lyricContent = document.getElementById('lyric-content');
    const songTitle = document.getElementById('song-title');

    if (lyricContent && songTitle) {
        const currentSong = songData.find(song => song.title === songTitle.innerText);
        if (currentSong) {
            lyricContent.innerHTML = currentSong[targetLang];
        }
    }

    currentLang = targetLang;
    localStorage.setItem('preferredLang', currentLang);
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const songID = urlParams.get('song');

    if (songID) {
        const currentSong = songData.find(song => song.title.toLowerCase().replace(/\s+/g,'-') === songID);
    
        if (currentSong) {
            document.getElementById('song-title').innerText = currentSong.title;
            document.getElementById('lyric-content').innerHTML = currentSong[currentLang];
            applyTheme(songID);

            const spotifyPlayer = document.getElementById('spotify-player');
            if (spotifyPlayer && currentSong.spotifyID) {
                spotifyPlayer.src = `https://open.spotify.com/embed/track/${currentSong.spotifyID}`;
            } 
        }
    }

    if (currentLang === 'en') {
        currentLang = 'jp';
        toggleLanguage();
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

function toggleFurigana() {
    document.body.classList.toggle('show-furigana');

    const furiganaBtn = document.getElementById('furigana-btn');
    if (document.body.classList.contains('show-furigana')) {
        furiganaBtn.innerText = "Furigana: ON"
    } else {
        furiganaBtn.innerText = "Furigana: OFF" 
    }
}