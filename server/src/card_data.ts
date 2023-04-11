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
        // add more cards here
        {
            cardId: "warlock_card_id_3",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/2620bce86e9fa1d37c60c3028b936c8b01403b905450a5be544b7739893bfa79.png",
            cardName: "Felstring Harp",
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
    ]

    // add more card types here
};

export default card_data;
