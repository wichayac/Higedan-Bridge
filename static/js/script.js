const songData = {
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
}

let currentLang = 'jp';

function changeLanguage() {
    const content = document.getElementById('lyric-content');
    const btn = document.getElementById('lang-btn');

    content.classList.add('fade-out');

    setTimeout(() => {
        if (currentLang === 'jp') {
            content.innerText = songData.en;
            btn.innerText = "Switch to Japanese";
            currentLang = 'en';
        } else {
            content.innerText = songData.jp;
            btn.innerText = "英語に切り替える";
            currentLang = 'jp';
    }
    content.classList.remove('fade-out');},400); 
}