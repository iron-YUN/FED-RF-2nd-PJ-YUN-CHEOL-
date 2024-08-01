// 서브 1 파트 데이터 JS


/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.개요 : subintro
    4.동영상코드 : mvid
*************************************/
const clipData = [
    {
      idx: "1",
      title: "Trailers",
      subintro: `Ever wonder what toys do when people aren't around?
      Toy Story answers that question with a fantastic fun-filled journey, viewed mostly through the eyes of two rival toys - Woody, the lanky, likable cowboy, and Buzz Lightyear, the fearless space ranger. Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. 
      But when circumstances separate Buzz and Woody from their owner,
      the comically-mismatched duo eventually learn to put aside their differences, and they find themselves on a hilarious adventure-filled mission where the only way they can survive is to form an uneasy alliance.`,
      mvid01: "https://www.youtube.com/embed/T_BXsjiFa0M",
      mvid02: "https://www.youtube.com/embed/QqIRLEg521Y",
    },
  ];

  const designData = [
    {
      idx: "1",
      title01: "Design - Character",
      subintro01: `The filmmakers assembled the Toy Story cast from a wealth of childhood memories.
      But for the story to work, the two main characters needed to have their own chemistry.
      Early versions of Woody included a ventriloquist's dummy and an ill-tempered cowboy before he became the affable hero seen on screen. Buzz Lightyear offered a different challenge : inventing a brand-new toy that instantly felt familiar`,
      mvid01: "https://www.youtube.com/embed/4n6u2CqlGPY",
      mvid02: "https://www.youtube.com/embed/z_FYmhkOf4Q",
    },
  ];
  const designBData = [
    {
        idx: "2",
        title02: "Design - Background",
        subintro02: ``,
        mvid03: "https://www.youtube.com/embed/LZN0WLWhuAI",
        mvid04: "https://www.youtube.com/embed/wpwVRDrSrMU",
      },
  ];

/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2. 캐릭이름 : chaname
    3. 캐릭개요 : chaintro
*************************************/
const chaData = [
    {
    idx: "1",
    chaname: "Woody",
    chaintro: `
    Woody is a traditional kind of toy, with his pull-string voice box and cowboy detailing.
    He has long enjoyed a place of honor as the favorite among six-year-old Andy's toys—until Buzz Lightyear crash-lands and shakes up his world.`,
    },
    {
    idx: "2",
    chaname: "Buzz Lightyear",
    chaintro: `
    This space ranger action figure has it all: a laser beam, karate-chop action, pop-out wings, and a belief that he's on a secret mission for Star Command.
    Much to Woody's chagrin, Buzz monopolizes Andy's attention and becomes an instant favorite with his toymates.`,
    },
    {
    idx: "3",
    chaname: "Andy",
    chaintro: `
    Able to create elaborate gold-mining towns with boxes and crayons, Andy can dream up any prop for a good vs.
    evil scenario that stars all of his toys. With Andy in charge, good always triumphs.`,
    },
    {
    idx: "4",
    chaname: "Sid",
    chaintro: `
    Every neighborhood has a bully, and Sid's it on Andy's block.
    He's a malicious and overactive kid who loves to torture, torment, and blow up toys all in the name of fun.`,
    },
    {
    idx: "5",
    chaname: "Hamm",
    chaintro: `
    The piggy bank in the window knows everything.
    Or at least that's what Hamm would have everyone believe when he's sticking his snout into the day's affairs.`,
    },
    {
    idx: "6",
    chaname: "Mr. Potato Head",
    chaintro: `
    Mr. Potato Head has a chip on his shoulder, but you would too if your face kept falling off.
    His cynical take on life makes him the toy to question Woody's authority.`,
    },
    {
    idx: "7",
    chaname: "Rex",
    chaintro: `
    Rex is a neurotic and insecure 12-inch plastic dinosaur with a small-roar complex and limited upper-arm movement.
    With his tender heart and weak spine, this Tyrannosaurus is one of the most lovable toys of the bunch.`,
    },
    {
    idx: "8",
    chaname: "Slinky",
    chaintro: `
    A dog is man's best friend, and the saying rings true for those of the vinyl variety, too.
    Slinky is Woody's trusted friend and partner in playing checkers—and the one who "stretches" the most in the friendship.`,
    },
];



  // 데이터 공개하기
export { clipData, chaData, designData, designBData  };