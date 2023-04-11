// single card types
export interface Card {
    cardId: string;
    cardImg: string;
    cardName: string;
}

// cardData type
export interface CardData {
    [key: string]: Card[];
}

const card_data: CardData = {
    druid: [
        {
            cardId: "druid_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a4f2f7e412baf3ae27c9d5e5c7babbc00a413bb39dfa7495bf9dcf8ab36a0b50.png",
            cardName: "Free Spirit",
        },
        {
            cardId: "druid_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4e9326c7a9995d8c012b697a1392d6bfc5e5ac04eca882c98ae6e9614ed26695.png",
            cardName: "Peaceful Piper",
        },
        {
            cardId: "druid_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e28c8b00d9f3801491b1bedd8614fcd6968839d6475a0ee80ff1b487a8900d6a.png",
            cardName: "Groovy Cat",
        },
        {
            cardId: "druid_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e4ec01ebba9038c58f54eb773d9a5734b6fe22231c79ea0ca63d4a9ae9d401fb.png",
            cardName: "Harmonic Mood",
        },
        {
            cardId: "druid_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8327c634f46e8308c0ea5358a6274264ec3cdba1b073eb27de74138805feb37a.png",
            cardName: "Rhythm and Roots",
        },
        {
            cardId: "druid_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a6ed17e0dc84adcfa87944350a767d8b758adb775bf4ec36c0d78c530c0494ef.png",
            cardName: "Spread the Word",
        },
        {
            cardId: "druid_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/167f288e424b9c3411a784d26d180e4cc7741bde0c10456a656535cfac528fe5.png",
            cardName: "Timber Tambourine",
        },
        {
            cardId: "druid_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9ff1600bd02ac9a177ce01febd0bdb93a120f319426698d0fb86811b5142dab4.png",
            cardName: "Summer Flowerchild",
        },
        {
            cardId: "druid_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/283b7e281175a8359a3c827df740ec8091a995245903f026410fba752073d7f1.png",
            cardName: "Drum Circle",
        },
        {
            cardId: "druid_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8d11eedad2b1e6451a6f62163f978a786b8ac86e96cdc0318d9dec39436ee06c.png",
            cardName: "Zok Fogsnout",
        },
    ],
    warlock: [
        {
            cardId: "warlock_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/66fb184545c95b2849e8185d790f74189b870eeb1b88db13f0a0d0df1e5472e2.png",
            cardName: "Void Virtuoso",
        },
        {
            cardId: "warlock_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/31022cbbf0fd43aecc7719ab88cbee2e20ea807c0884118732df83c047976c3a.png",
            cardName: "Baritone Imp",
        },
        {
            cardId: "warlock_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2620bce86e9fa1d37c60c3028b936c8b01403b905450a5be544b7739893bfa79.png",
            cardName: "Felstring Harp",
        },
        {
            cardId: "warlock_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/070c7197749c037072322bac46d4b025bd3f921f2f01279b62341879d9b7073f.png",
            cardName: "Crescendo",
        },
        {
            cardId: "warlock_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0ad9f40e42878732828c128b8d7382a62b6263ce01183cb992d9c2e7d9da0210.png",
            cardName: "Demonic Dynamics",
        },
        {
            cardId: "warlock_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a9ff1a6aa2938c308bcea790ba60adc06a0ec80615ab6a52e761628232b3b2d5.png",
            cardName: "Crazed Conductor",
        },
        {
            cardId: "warlock_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7cb97a9743cc4075dcf3891598ff580839eb4ee51ab3a18281d8d8bad6149636.png",
            cardName: "Opera Soloist",
        },
        {
            cardId: "warlock_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3a71ddc29183dc039ddbaec1999b0149dec9662b4e1793b4217089e8250fe786.png",
            cardName: "Rin, Orchestrator of Doom",
        },
        {
            cardId: "warlock_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a20f086cf97bfb96cd0dd1f9ccb76cec1eddbc76b63d8227c5ae05d1fe812d83.png",
            cardName: "Dirge of Despair",
        },
        {
            cardId: "warlock_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/01b3d72a0b0f288561ce334a2a86805696aade21b49772e5a1d09230145dcb69.png",
            cardName: "Symphony of Sins",
        },
    ],
    demon_hunter: [
        {
            cardId: "dh_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/fc687df3dc0697d3c71adbc8938d8a976da83bf2bf740aaa7b2e8ffa1ae3ba21.png",
            cardName: "Taste of Chaos",
        },
        {
            cardId: "dh_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3b676da51d880fdd8193458d5d0a3355ee14d73f6fbbeb230a97f94375f37d12.png",
            cardName: "Eye of Shadow",
        },
        {
            cardId: "dh_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4b5742683d1bb2ec149b2d8c088086ee34aabefcb6b103c85690bbff52c1d38a.png",
            cardName: "SECURITY!!",
        },
        {
            cardId: "dh_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5ff7a0332f3785191515b46de71327732ba1c480ada83c59eb5677bd7515c946.png",
            cardName: "Snakebite",
        },
        {
            cardId: "dh_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/9c0a4d91a6306f73bacb19fbc1aefa5714d796d260786e0e1ce4dd3a29b7d749.png",
            cardName: "Rush the Stage",
        },
        {
            cardId: "dh_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b747344243f368189990b19430b407d7d482774dd4bc1c6e947770458c0ea36c.png",
            cardName: "Glaivetar",
        },
        {
            cardId: "dh_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d5eb7213a77b6efbb2d3ac9a2f3c68fe31f513afe77483aca066098469d0c340.png",
            cardName: "Halveria Darkraven",
        },
        {
            cardId: "dh_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/89a1cf5db487bac7a32c18b753f54e2cd98f3846c7560f68493cadcb7a45a9a4.png",
            cardName: "Instrument Smasher",
        },
        {
            cardId: "dh_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/84a3396f45af01a758788bfb5c936fb2c6256ab29083616961ab5a93e7ebff58.png",
            cardName: "Going Down Swinging",
        },
        {
            cardId: "dh_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/be04ac51f483b76f079baa0487a411cdc311d599de5b0b31535301cdaf2a71a0.png",
            cardName: "Guitar Soloist",
        },
    ],
    hunter: [
        {
            cardId: "hunter_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/040e2b36af46efc3e5634b36da561d1565a96004098f9adccfa6e8d340911039.png",
            cardName: "Bunch of Bananas",
        },
        {
            cardId: "hunter_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0947e3d8fb1a1ce82c12b0d37f71517203b4386f77fc9a13b9d05538e63fa70d.png",
            cardName: "Thornmantle Musician",
        },
        {
            cardId: "hunter_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4c8dfe70642811196b31c918c5e43b198db686b6f748c047297db91c49b1f6fc.png",
            cardName: "Arrow Smith",
        },
        {
            cardId: "hunter_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6a2a8de353a6f2e9855b5488f6c893022e400d025b13b5546f2149a52406d6d0.png",
            cardName: "Barrel of Monkeys",
        },
        {
            cardId: "hunter_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c1046cf0b695b49938ee6d2b128706e123b1d7daad8ac00af124a67476d54e41.png",
            cardName: "Harmonica Soloist",
        },
        {
            cardId: "hunter_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b9aa7d46a2e400aeed1d5f6110108b65edcbfe1e2ad00b8027f7136893c8ac01.png",
            cardName: "Jungle Jammer",
        },
        {
            cardId: "hunter_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4f00f9f893de98da6557de638194db17b80ba451323adf9f625dd36b64cd50ce.png",
            cardName: "Big Dreams",
        },
        {
            cardId: "hunter_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/665312f7cb4a5e0093ac5e9b799677dbfb8b722c1975300431f0aa185474e93b.png",
            cardName: "Mister Mukla",
        },
        {
            cardId: "hunter_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3b5c3b2aa7944134fa58616cde6efe45eb24f69d4bcc546e437c2cf071e24daf.png",
            cardName: "Banjosaur",
        },
        {
            cardId: "hunter_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/784f33f2d03074c39b2b9b19aa670a55a5dd6776fcc3b833233f70b0c02fcd6c.png",
            cardName: "Stranglethorn Heart",
        },
    ],
    shaman: [
        {
            cardId: "shaman_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/17e3a40dd2fe318429c6259cfc722acdc11d259135c82b22c49e3292673c2de7.png",
            cardName: "Melomania",
        },
        {
            cardId: "shaman_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b6d653a86a032f9654d613f10b36a859e286c4bf2d9e48c31e81cb944144bf57.png",
            cardName: "Saxophone Soloist",
        },
        {
            cardId: "shaman_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/199d392e623284d5ee9401cdd467b2326af9f4b64e348dd3c2972e04668a2894.png",
            cardName: "Flowrider",
        },
        {
            cardId: "shaman_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/61f94d185b3cc92ca4be676475d82599ab35a14e33531e2a35d8a69d39e62c6d.png",
            cardName: "Chill Vibes",
        },
        {
            cardId: "shaman_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8e715b0cd9265807152d86d7a524af406011b8156a550006114164194e61ae1a.png",
            cardName: "Jazz Bass",
        },
        {
            cardId: "shaman_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e1b468637a33b0698d967cedbd2b2c654823d89867d1d16083adcc989f94539f.png",
            cardName: "Brass Elemental",
        },
        {
            cardId: "shaman_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/8543f8ab25f31243ec962c38190414a9e661e8ce4ede7e3db67da28d9873b8dc.png",
            cardName: "Altered Chord",
        },
        {
            cardId: "shaman_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3b4c168cd6735448129e91ed6437adfaa97e33eb25a11e253e93ae9b07e3e18b.png",
            cardName: "Inzah",
        },
        {
            cardId: "shaman_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1f24dda0f47ca48c47d4c5f637aad84b31f8d33f470f3caf063c090ba9b855a0.png",
            cardName: "JIVE, INSECT!",
        },
        {
            cardId: "shaman_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a70f2ce8f92048e1e7d736390bdb7d75894bbd257ffcfe99b2f04ead073273b2.png",
            cardName: "Pack the House",
        },
    ],
    warrior: [
        {
            cardId: "warrior_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/38e47ff3a25c26a70c9115ea862349169f702837687867f74bee9391de8153a3.png",
            cardName: "Razorfen Rockstar",
        },
        {
            cardId: "warrior_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e18e90231ecca2f075bf1cfcdf90790c4d9317118a1099970c4e652eeb7dd8c8.png",
            cardName: "Roaring Applause",
        },
        {
            cardId: "warrior_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/06c086dce41c50d77172e23872d2ae450e898ca0ee86ba1b69c17f4b1156dcff.png",
            cardName: "Verse Riff",
        },
        {
            cardId: "warrior_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/fcfc2b8f1e69317fd13afef3e96a218e6f2eca0051a273054b46dbcf4e5332e9.png",
            cardName: "Chorus Riff",
        },
        {
            cardId: "warrior_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/49f4e9b70070291c66451f558e4b2fcf96fb3574e460002a0e0cfeda50fb3638.png",
            cardName: "Power Slider",
        },
        {
            cardId: "warrior_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cf8e23654fdfb8a6cd57878b0be91b1c640ac3ea4e1f065228a6aa1afba5e7d0.png",
            cardName: "Kodohide Drumkit",
        },
        {
            cardId: "warrior_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/54fbaf6e064d97a599fb3722cc5fce199a755abe9f76dbe5a548930a2a39c693.png",
            cardName: "Rock Master Voone",
        },
        {
            cardId: "warrior_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a74b20099404247e422fb465fe3b077abd5c406cc253a19e7289ba2e5135ca6d.png",
            cardName: "Blackrock 'n' Roll",
        },
        {
            cardId: "warrior_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/92f0b77d27338cf4a08cce18307a2c0786908d4066fee017b2e688b6271b9625.png",
            cardName: "Drum Soloist",
        },
        {
            cardId: "warrior_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3a64e270bb5014e4019f6be862d8127fdef437f8a755ad4bcb5d2acf360d0d82.png",
            cardName: "Bridge Riff",
        },
    ],
    death_knight: [
        {
            cardId: "dk_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e6ca50aee0e962223bbbf2dfab32c5236e6cb6d4e2728611324fd54cfbb74210.png",
            cardName: "Death Growl",
        },
        {
            cardId: "dk_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/30337ababbfb6a7c7728a074a0e9c7cdfeef85e828597a8104eaaae535b88847.png",
            cardName: "Mosh Pit",
        },
        {
            cardId: "dk_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5696add99f38ba290fbb361c7c151be97213738185aa8cf07dd5d0db1d8ff4fa.png",
            cardName: "Arcanite Ripper",
        },
        {
            cardId: "dk_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6d4808229a86dbc1823acb361108449d23d65e2e881ff742d27071748da7a556.png",
            cardName: "Death Metal Knight",
        },
        {
            cardId: "dk_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1ad94edba69c8f1831b5c3720d6747526bea3d1d3eaaf8d8170cf281d0209027.png",
            cardName: "Hardcore Cultist",
        },
        {
            cardId: "dk_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/80f9b36d5fa1cf60ee07ac29385149f2c47937e4a41b11d14300c0ff65f24600.png",
            cardName: "Harmonic Metal",
        },
        {
            cardId: "dk_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/45885dfbf9602466f5378b42411ed838ca3c44e427c310cdf12dc8d65c03e3ed.png",
            cardName: "Boneshredder",
        },
        {
            cardId: "dk_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cd7eb4b6358a310d129f2cac25c853ed394b11a2910b4534162b9eafa657ce03.png",
            cardName: "Screaming Banshee",
        },
        {
            cardId: "dk_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7541e08b7e05a898e5e6312c0903e09bc9dc482684111d8324b12f23b58312e9.png",
            cardName: "Cage Head",
        },
        {
            cardId: "dk_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c4260a902f5cd4e7a34372f70844bcde4fdee56ae4aa36b6fedb9238cf3bf98f.png",
            cardName: "Cinematic Necrotic Explosion",
        },
    ],
    rogue: [
        {
            cardId: "rogue_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/266d139a2379d859444218900224f0145b2866032398f958a405dd0d416917e5.png",
            cardName: "Breakdance",
        },
        {
            cardId: "rogue_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b21a65dfd478ec529dee3cb9a1990b16e5788bbb97d6ab7c68574418d84b6605.png",
            cardName: "Mixtape",
        },
        {
            cardId: "rogue_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e603f217103c4d6df2246daf6f42157c79b83de78fdd4b1b530f14b94125c712.png",
            cardName: "Disc Jockey",
        },
        {
            cardId: "rogue_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/646ac70075617266a62dbb5207ca1508aa113b2478719b398d96504cadf70ffc.png",
            cardName: "Harmonic Hip Hop",
        },
        {
            cardId: "rogue_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d8d2493650f32b73d3d7dccce1811aa9f97077476c0fdb7f9b169f51352350ac.png",
            cardName: "Beatboxer",
        },
        {
            cardId: "rogue_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/fc51f34ea572228de6db5f4c48c7ee1a594bde177b57c159e46aac8fd943a4b0.png",
            cardName: "Bounce Around (ft. Garona)",
        },
        {
            cardId: "rogue_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a3840a99740103c2bd28b9b576f0193dded9c4eb547726c09a5f46260648c597.png",
            cardName: "Mic Drop",
        },
        {
            cardId: "rogue_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/94e3dde9e12358017d7a1b343f3729d0e9349ca93d094fe58ea8f5d59aeabe91.png",
            cardName: "Record Scratcher",
        },
        {
            cardId: "rogue_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0d6acb2189777ba990c761954694eadac6b6581d7b18e09201bac17bf9f63d83.png",
            cardName: "Rhyme Spinner",
        },
        {
            cardId: "rogue_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/914ccb2cbc4a379f91c8a0e52a7b6230f8852fac5229a6e6c2d9850c056599df.png",
            cardName: "MC Blingtron",
        },
    ],
    priest: [
        {
            cardId: "priest_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3e1fb97f9426c5f2b0252496c1bff0e47e726de3b1887b6a50ac8c3d5c30e60f.png",
            cardName: "Fan Club",
        },
        {
            cardId: "priest_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2fd9132d8ac199cdd339a4382c4a1811dbba89ee5941500c0afec147209abd59.png",
            cardName: "Idol's Adoration",
        },
        {
            cardId: "priest_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7b9131747bc8c576ac0408f214e9a7bc9cbfa75903978f6bb6377f0bcb1d73f7.png",
            cardName: "Dreamboat",
        },
        {
            cardId: "priest_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/00cd7a8fe39b1699a024b53ee3cc7573804845576656179abc142bb3df78ac0d.png",
            cardName: "Power Chord: Synchronize",
        },
        {
            cardId: "priest_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/72b0712f0200c300e6cc1aecc45e73a31946f68ff4e2ecad72178634275dd35b.png",
            cardName: "Heartthrob",
        },
        {
            cardId: "priest_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4268c2059848db403f011411cf7ee0671fd155ad84999d41c8eeda87c0b65c2e.png",
            cardName: "Love Everlasting",
        },
        {
            cardId: "priest_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/55d4ec700ec2dffcf38cd12197bce50551d8ad68d449ca0557041227ad61fc11.png",
            cardName: "Shadow Chord: Distort",
        },
        {
            cardId: "priest_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d9df419a59bdf8f20f53cac701d53dfa52de0c373e940b1d2e66d9ef4eb39e24.png",
            cardName: "Fight Over Me",
        },
        {
            cardId: "priest_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/84b9e93e63fe2c06c4a166e83e133b4fa2c6b69c0f3db49dc66caaf34aea9fba.png",
            cardName: "Heartbreaker Hedanis",
        },
        {
            cardId: "priest_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1ce162b01663097a45273415677d945aeed56f957839e161c905fb397e737dca.png",
            cardName: "Harmonic Pop",
        },
    ],
    paladin: [
        {
            cardId: "pala_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/da0d855c603a539016adf3a272950a6949c7c477f6b06758e7e64f102faf15a6.png",
            cardName: "Disco Maul",
        },
        {
            cardId: "pala_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cf013b1407c08ebd7a947f6324d5b85b30921332658e07d25867f5f47e07f88c.png",
            cardName: "Spotlight",
        },
        {
            cardId: "pala_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cb96fd4ad7abe25b2322d2df61fa756e944de280ccd9b353c245863444d1a4fa.png",
            cardName: "Boogie Down",
        },
        {
            cardId: "pala_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0b4bac700ff605c9f3ed57e34267888f86bc82613e1219de888577265d33faff.png",
            cardName: "Funkfin",
        },
        {
            cardId: "pala_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2a134eb6dae73393f8a3d04876703f5943686f6fe3308c4ca48e07852aa3938f.png",
            cardName: "Starlight Groove",
        },
        {
            cardId: "pala_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/46b7f27cb39e17f7769f0f25742e593cf5030850c2e42b9451f14e5694cf76ef.png",
            cardName: "Jitterbug",
        },
        {
            cardId: "pala_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e9005a6292b6ec9760a106408219562811f8b8ab8f6ac25647512676733bb346.png",
            cardName: "Harmonic Disco",
        },
        {
            cardId: "pala_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7db46f19be7a81e75b9370537d597a0df6990d0f303193c1dd02a4214cd20c56.png",
            cardName: "Kangor, Dancing King",
        },
        {
            cardId: "pala_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/81f10ebc2e8587184647a81c585ac0d328ebe56b391afbdbb66766abc783de56.png",
            cardName: "Lead Dancer",
        },
        {
            cardId: "pala_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/14f9847b8610322afea5b0055a529603df0a2329851a8fe3cfc5b1db4360a1a1.png",
            cardName: "Annoy-o-Troupe",
        },
    ],
    mage: [
        {
            cardId: "mage_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/60860c8ae48ff095263b687f351b6bf9cec9686f09191e4f8a52a2e965675e8c.png",
            cardName: "Synthesize",
        },
        {
            cardId: "mage_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/da57b0b5184703c1556ea327b93c571ac51c78c7c470314519fa01604e4483cf.png",
            cardName: "Cosmic Keyboard",
        },
        {
            cardId: "mage_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/43edd35578fa93313b7b01a163d6cb9e33ade85be20df48f581116f58d9a5126.png",
            cardName: "Infinitze the Maxitude",
        },
        {
            cardId: "mage_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/20b181591844134462999da822682388c742446b3e43140f3be187ddaccac4eb.png",
            cardName: "Rewind",
        },
        {
            cardId: "mage_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4f55d5147613e67a0de1b2f0c5a0fdc0a419cb34acb4d5d9ea4f2373a096af91.png",
            cardName: "Audio Splitter",
        },
        {
            cardId: "mage_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/51c4096ad05223c8b6e57871c8542f5cffaf4530bfc5d89503ac59d0d17ac7da.png",
            cardName: "Holotechnician",
        },
        {
            cardId: "mage_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/799cce9966b102b90d7aa85284b824f7fb55f5b48407afaaae2471e72fa67981.png",
            cardName: "Lightshow",
        },
        {
            cardId: "mage_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a1dc08a426440726e81583ff3748df3e1aafd3366026c182eb552df26aeec315.png",
            cardName: "Keyboard Soloist",
        },
        {
            cardId: "mage_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b323c86c7e74448c79f6af379e1db326ce1676f3a5ba1a6ed0bc3a757bc3bfc6.png",
            cardName: "Volume Up",
        },
        {
            cardId: "mage_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/38e774abee377f13e091cec5f3479170687859936e69094ccd9bf0d452ca9bcf.png",
            cardName: "DJ Manastorm",
        },
    ],
    neutral: [
        {
            cardId: "neutral_card_id_1",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f50065f17b6e09096473a7be84a118a74986828025826da46d7bccd8752dd440.png",
            cardName: "Hipster",
        },
        {
            cardId: "neutral_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e8d3cc64720d4f6b17edec17572273074a5f423d146dfa26b750b96772d82d1e.png",
            cardName: "Instrument Tech",
        },
        {
            cardId: "neutral_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/997cc04984bda7a47c49fad4d1f36cd0ea8b231478b86c54e3d0f1230da58cbe.png",
            cardName: "Party Animal",
        },
        {
            cardId: "neutral_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2c6f0488d298824143dfa745c590d3c5b54da469a721fe9124ae1ff4ab3ca5ef.png",
            cardName: "Rolling Stone",
        },
        {
            cardId: "neutral_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c500eb476b325dc9ad250aa8501f0dbb2b6f1adec737b32ae1a93570978d3b88.png",
            cardName: "Stereo Totem",
        },
        {
            cardId: "neutral_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/70f9ef19287db15875464aac6b1ae3e9a9fc26fdf1bbae7c49084ced09f37edf.png",
            cardName: "Cowbell Soloist",
        },
        {
            cardId: "neutral_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3c103eb24566d977896ce3bd00736517d0d40bc0386aa98db6d441b33b3ba9d2.png",
            cardName: "Festival Security",
        },
        {
            cardId: "neutral_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3edfc4131b87398e9976bafea626a35d7057aef607cb2d83dc361099f566bfc5.png",
            cardName: "Metrognome",
        },
        {
            cardId: "neutral_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5881395e52ca1416d827d630317a776a4b205bc96b55c807cb12bf27da8ad981.png",
            cardName: "Outfit Tailor",
        },
        {
            cardId: "neutral_card_id_11",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/24e02ceb77b05f0ece8502ec6abf630a83debf3bdc8167b98b6955dcede58e6c.png",
            cardName: "Paparazzi",
        },
        {
            cardId: "neutral_card_id_12",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f43df8b9d849d420906913a6df83af12e95be5ec733c762ce5fd9bb702e0c0ad.png",
            cardName: "Photographer Fizzle",
        },
        {
            cardId: "neutral_card_id_13",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ced23b46db6c4c39eb9230a3fabaa283cc3423a8c095c85bb61847cd7aeb3ce1.png",
            cardName: "Rowdy Fan",
        },
        {
            cardId: "neutral_card_id_14",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c7ecf3012781b0fdecd173a1648298bd3ead79c9fdc1fd1cc8840db0fdc27c18.png",
            cardName: "Static Waveform",
        },
        {
            cardId: "neutral_card_id_15",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/37ff9c15c480f6ae2221a409ad4eab108e8e3b312481a5a34f6394484621c7ba.png",
            cardName: "Worgen Roadie",
        },
        {
            cardId: "neutral_card_id_16",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/6d37d8ae66c228ed856b745e5c6e55d823b77f6ace0a192ced3acd9545232dc9.png",
            cardName: "Candleraiser",
        },
        {
            cardId: "neutral_card_id_17",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/161bb0a448944ec5ac43d271e322885f2b6b60d989ef62eb610fe3ea523dab26.png",
            cardName: "Cover Arist",
        },
        {
            cardId: "neutral_card_id_18",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ca40cf2fd8c7cfc4fbca11e9a004f457c8b8f6aaecf6a543c7681b7e20e4b7ea.png",
            cardName: "E.T.C Band Manager",
        },
        {
            cardId: "neutral_card_id_19",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/35c1c3ab46fe3d66cbd95019224f91c271c589adb8227e033ce4388b448cd7b0.png",
            cardName: "Freebird",
        },
        // ===============
        {
            cardId: "neutral_card_id_20",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f46fa537ae93fa306c0c2cf7dbe0ad5506164a8a7d53407a1c7aa7ea58d4eb09.png",
            cardName: "March Seller",
        },
        {
            cardId: "neutral_card_id_21",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/02a2064473a36beb6d154789f77653f69a8debee1bfb09da2fc457246853431e.png",
            cardName: "Obsessive Fan",
        },
        {
            cardId: "neutral_card_id_22",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/57fa892f2a2220251b6be5b76743a8fb23106f906a93623149a8e495482bf2d8.png",
            cardName: "Pozzik, Audio Engineer",
        },
        {
            cardId: "neutral_card_id_23",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a3202617018f8eeb43ee0898d384fb9a6f1040290879e68c9d867526d6061b39.png",
            cardName: "Pyrotechnician",
        },
        {
            cardId: "neutral_card_id_24",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/50fc2bb2844d7e4ae29398fef489333dd29bc3fdc07e5ac48ee300349e7d8d7b.png",
            cardName: "Ghost Writer",
        },
        {
            cardId: "neutral_card_id_25",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/bbcc85356489397930a2fac30f2ffea4bc18ce706c3387d72acc296c9a82a972.png",
            cardName: "Tony, King of Piracy",
        },
        {
            cardId: "neutral_card_id_26",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b885e3a16ebf5d8c5acf89b0ccdd8398ae20cc1ed24a81be0509cc807deda65e.png",
            cardName: "Unpopular Has-Been",
        },
        {
            cardId: "neutral_card_id_27",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/150d279652e8727bdf4a7ac17e6c5f172a9ff6ddbd48f5edbc5e10a85aa6299a.png",
            cardName: "The One-Amalgam Band",
        },
        {
            cardId: "neutral_card_id_28",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/21ab1396317708013a25899136d1ac29a1d9fa394a86ad8fd05cc07a347593e2.png",
            cardName: "Concert Promo-Drake",
        },
        {
            cardId: "neutral_card_id_29",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b06818003375577a7734ecea7e37c9b4289414f204998cc312481f0daf917ae5.png",
            cardName: "Mish-Mash Mosher",
        },
        {
            cardId: "neutral_card_id_30",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/aa30df85ecf11782d77e13bb57585959c20b4d0f9f0cf2240d68d21fec833c25.png",
            cardName: "Amplified Elekk",
        },
    ]
};

export default card_data;
