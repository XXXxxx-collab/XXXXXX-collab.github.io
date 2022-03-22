const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  volume: 0.15,
  autoplay: true,
  audio: [
    {
      name: '哪里都是你',
      artist: '队长',
      url: 'http://music.163.com/song/media/outer/url?id=488249475.mp3',
      cover: 'http://p2.music.126.net/bD6Mc8u993RcXa16-26XsQ==/109951167138581770.jpg?param=177y177',
    },
    {
      name: "Letting Go",
      artist: '蔡健雅',
      url: 'http://music.163.com/song/media/outer/url?id=208891.mp3',
      cover: 'http://p2.music.126.net/VTZde5VdBm_u2WH0Pc9HQQ==/109951165561227373.jpg?param=130y130',
    },
    {
      name: '多远都要在一起',
      artist: 'G.E.M.邓紫棋',
      url: 'http://music.163.com/song/media/outer/url?id=30612793.mp3',
      cover: 'http://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg?param=130y130',
    },
    {
      name: '温柔',
      artist: '五月天',
      url: 'http://music.163.com/song/media/outer/url?id=386538.mp3',
      cover: 'http://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg?param=130y130',
    },
    {
      name: '我用什么把你留住 (Remix)',
      artist: '福禄寿FloruitShow',
      url: 'http://music.163.com/song/media/outer/url?id=1860678388.mp3',
      cover: 'http://p1.music.126.net/-pS9QZROJ4UTSI1Tg2VSyg==/109951163529550258.jpg?param=130y130',
    },
  ]
});

