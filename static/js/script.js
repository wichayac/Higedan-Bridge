let currentLang = localStorage.getItem('preferredLang') || 'jp';

const homeData = {
    jp: {
        title: `ヒゲダンの架け橋`,
        home: `ホーム`,
        official: "オフィシャルサイト",
        welcome: `こんにちは！ここは J-POPバンド Official髭男dism のファンサイトです。`,
        sub: `このサイトでは、髭男の歌詞と翻訳で、日本語を学べます！
                どうぞごゆっくりお楽しみください！`,
        btn: `English`
    },
    en: {
        title: "Higedan Bridge",
        home: "Home",
        official: "Official Site",
        welcome: `Hello! Welcome to this fan site dedicated to the J-POP band Official HIGE DANdism.`,
        sub: `Here, you can find song lyrics, translations and enjoy learning Japanese through their music.
            Feel free to explore!`,
        btn: `日本語`
    }
}

function toggleLanguage() {
    const targetLang = (currentLang === 'jp') ? 'en' : 'jp';
    //exists on all pages
    /* const heroText = document.getElementById('hero-text'); fix because lyrics.html doesn't have hero-text so it can't find*/
    const heroText = document.getElementById('hero-text');
    if (heroText) {
        heroText.innerText = homeData[targetLang].title;
    } 
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
            document.title = `${currentSong.title} | Higedan Bridge`;
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

const container = document.getElementById('song-list');
if (container) {
    //loop for every song title in songData
    songData.forEach((song) => {
        const songLink = document.createElement('a'); //create <a>
        const slug = song.title.replace(/\s+/g, '-').toLowerCase(); //such as Same Blue to same-blue
        songLink.href = `lyrics.html?song=${slug}`;

        songLink.innerText = song.title; //song title
        songLink.classList.add('song-link');
        container.appendChild(songLink);
        
    });
} 