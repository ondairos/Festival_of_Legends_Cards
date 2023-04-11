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
        // add more cards here
        {
            cardId: "dh_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4b5742683d1bb2ec149b2d8c088086ee34aabefcb6b103c85690bbff52c1d38a.png",
            cardName: "SECURITY!!",
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
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cd7eb4b6358a310d129f2cac25c853ed394b11a2910b4534162b9eafa657ce03.png",
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
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/266d139a2379d859444218900224f0145b2866032398f958a405dd0d416917e5.png",
            cardName: "Breakdance",
        },
        {
            cardId: "priest_card_id_2",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/b21a65dfd478ec529dee3cb9a1990b16e5788bbb97d6ab7c68574418d84b6605.png",
            cardName: "Mixtape",
        },
        {
            cardId: "priest_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/e603f217103c4d6df2246daf6f42157c79b83de78fdd4b1b530f14b94125c712.png",
            cardName: "Disc Jockey",
        },
        {
            cardId: "priest_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/646ac70075617266a62dbb5207ca1508aa113b2478719b398d96504cadf70ffc.png",
            cardName: "Harmonic Hip Hop",
        },
        {
            cardId: "priest_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d8d2493650f32b73d3d7dccce1811aa9f97077476c0fdb7f9b169f51352350ac.png",
            cardName: "Beatboxer",
        },
        {
            cardId: "priest_card_id_6",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/fc51f34ea572228de6db5f4c48c7ee1a594bde177b57c159e46aac8fd943a4b0.png",
            cardName: "Bounce Around (ft. Garona)",
        },
        {
            cardId: "priest_card_id_7",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/a3840a99740103c2bd28b9b576f0193dded9c4eb547726c09a5f46260648c597.png",
            cardName: "Mic Drop",
        },
        {
            cardId: "priest_card_id_8",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/94e3dde9e12358017d7a1b343f3729d0e9349ca93d094fe58ea8f5d59aeabe91.png",
            cardName: "Record Scratcher",
        },
        {
            cardId: "priest_card_id_9",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/0d6acb2189777ba990c761954694eadac6b6581d7b18e09201bac17bf9f63d83.png",
            cardName: "Rhyme Spinner",
        },
        {
            cardId: "priest_card_id_10",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/914ccb2cbc4a379f91c8a0e52a7b6230f8852fac5229a6e6c2d9850c056599df.png",
            cardName: "MC Blingtron",
        },
    ]

    // add more card types here
};

export default card_data;
