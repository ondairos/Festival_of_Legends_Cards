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
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4e9326c7a9995d8c012b697a1392d6bfc5e5ac04eca882c98ae6e9614ed26695.png",
            cardName: "Peaceful Piper",
        },
        {
            cardId: "druid_card_id_4",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4e9326c7a9995d8c012b697a1392d6bfc5e5ac04eca882c98ae6e9614ed26695.png",
            cardName: "Peaceful Piper",
        },
        {
            cardId: "druid_card_id_5",
            cardImg: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4e9326c7a9995d8c012b697a1392d6bfc5e5ac04eca882c98ae6e9614ed26695.png",
            cardName: "Peaceful Piper",
        },
        // add more cards here
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
    ]

    // add more card types here
};

export default card_data;
