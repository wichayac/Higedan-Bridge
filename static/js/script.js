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

    // find currentSong by using URL to get songID instead of using songTitle.innerText
    if (lyricContent && songTitle) {
        const currentSong = songData.find(song => getSongSlug(song.title) === getCurrentSongID());
        if (currentSong) {
            lyricContent.innerHTML = currentSong[targetLang];
            /* document.title = `${currentSong.title} | Higedan Bridge`; update title when toggle language */
        }
    }

    currentLang = targetLang;
    localStorage.setItem('preferredLang', currentLang);
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

let songData = [];
const container = document.getElementById('song-list');

function getSongSlug(title) {
    return title.replace(/\s+/g, '-').toLowerCase();
}

function getCurrentSongID() {
    return new URLSearchParams(window.location.search).get('song');
}

function findCurrentSong() {
    const songID = getCurrentSongID();
    return songData.find(song => getSongSlug(song.title) === songID);
}

function renderSongList() {
    if (!container) return;
    container.innerHTML = '';

    songData.forEach((song) => {
        const songLink = document.createElement('a');
        const slug = getSongSlug(song.title);
        songLink.href = `lyrics.html?song=${slug}`;
        songLink.innerText = song.title;
        songLink.classList.add('song-link');
        container.appendChild(songLink);
    });
}

async function loadSongData() {
    try {
        const response = await fetch('songs.json');
        if (!response.ok) {
            throw new Error(`Failed to load songs.json: ${response.status}`);
        }
        songData = await response.json();
        renderSongList();
    } catch (error) {
        console.error(error);
    }
}

window.onload = async function () {
    await loadSongData();

    const songID = getCurrentSongID();

    if (songID) {
        const currentSong = findCurrentSong();

        if (currentSong) {
            document.title = `${currentSong.title} | Higedan Bridge`;
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