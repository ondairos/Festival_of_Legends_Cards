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
            cardImg: "warlock_card_img_url_1",
            cardName: "Warlock Card Name 1",
        },
        {
            cardId: "warlock_card_id_2",
            cardImg: "warlock_card_img_url_2",
            cardName: "Warlock Card Name 2",
        },
        // add more cards here
        {
            cardId: "warlock_card_id_10",
            cardImg: "warlock_card_img_url_10",
            cardName: "Warlock Card Name 10",
        },
    ],
    // add more card types here
};

export default card_data;
