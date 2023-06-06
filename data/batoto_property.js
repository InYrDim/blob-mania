const contentType = {
  name: "type",
  filters: [
    "artbook",
    "cartoon",
    "doujinshi",
    "manhua",
    "western",
    "manhwa",
    "imageset",
    "comic",
    "manga",
    "webtoon",
    "_4_koma",
    "full_color",
    "fan_colored",
  ],
};

const dataGenres = {
  name: "genres",
  filters: [
    {
      name: "explicit",
      filters: [
        "ecchi",
        "smut",
        "gore",
        "violence",
        "hentai",
        "adult",
        "bloody",
        "mature",
        "sm_bdsm",
      ],
    },
    {
      name: "safe",
      filters: [
        "action",
        "adventure",
        "drama",
        "comedy",
        "horror",
        "sports",
        "romance",
        "fantasy",
        "slice_of_life",
        "supernatural",
        "sci_fi",
      ],
    },
    {
      name: "demographics",
      filters: [
        "shoujo",
        "seinen",
        "shounen",
        "yuri",
        "bara",
        "yaoi",
        "josei",
        "kids",
        "futa",
        "loli",
        "shota",
        "shounen_ai",
        "shoujo_ai",
      ],
    },
    {
      name: "themes",
      filters: [
        "cooking",
        "bodyswap",
        "delinquents",
        "wuxia",
        "yakuzas",
        "villainess",
        "isekai",
        "mecha",
        "superhero",
        "revenge",
        "military",
        "martial_arts",
        "ninja",
        "police",
        "oneshot",
        "regression",
        "royal_family",
        "school_life",
        "music",
        "time_travel",
        "reverse_harem",
        "super_power",
        "psychological",
        "philosophical",
        "survival",
        "tower_climbing",
        "transmigration",
        "video_games",
        "xianxia",
        "xuanhuan",
        "virtual_reality",
        "traditional_games",
        "thriller",
        "vampires",
        "space",
        "showbiz",
        "samurai",
        "omegaverse",
        "netorare",
        "monsters",
        "medical",
        "magical_girls",
        "harem",
        "genderswap",
        "adaptation",
        "aliens",
        "beasts",
        "cheating_infidelity",
        "crime",
        "dungeons",
        "game",
        "ghosts",
        "harlequin",
        "incest",
        "college_life",
        "dementia",
        "contest_winning",
        "crossdressing",
        "emperor_daughte",
        "fetish",
        "gender_bender",
        "gyaru",
        "historical",
        "magic",
        "monster_girls",
        "mystery",
        "office_workers",
        "parody",
        "post_apocalyptic",
        "reincarnation",
        "reverse_isekai",
        "royalty",
        "college_life",
        "cars",
        "anthology",
        "age_gap",
        "tragedy",
        "animals",
        "childhood_friends",
      ],
    },
  ],
};

const dataLanguage = {
  name: "language",
  filters: [
    {
      name: "English",
      emoji: "🇬🇧",
    },
    {
      name: "Afrikaans",
      emoji: "🇿🇦",
    },
    {
      name: "Albanian",
      emoji: "🇦🇱",
    },
    {
      name: "Amharic",
      emoji: "🇪🇹",
    },
    {
      name: "Arabic",
      emoji: "🇸🇦",
    },
    {
      name: "Armenian",
      emoji: "🇦🇲",
    },
    {
      name: "Azerbaijani",
      emoji: "🇦🇿",
    },
    {
      name: "Belarusian",
      emoji: "🇧🇾",
    },
    {
      name: "Bengali",
      emoji: "🇧🇩",
    },
    {
      name: "Bosnian",
      emoji: "🇧🇦",
    },
    {
      name: "Bulgarian",
      emoji: "🇧🇬",
    },
    {
      name: "Burmese",
      emoji: "🇲🇲",
    },
    {
      name: "Cambodian",
      emoji: "🇰🇭",
    },
    {
      name: "Catalan",
      emoji: "🇦🇩",
    },
    {
      name: "Cebuano",
      emoji: "🇵🇭",
    },
    {
      name: "Chinese",
      emoji: "🇨🇳",
    },
    {
      name: "Chinese (繁)",
      emoji: "🇹🇼",
    },
    {
      name: "Chinese (粵)",
      emoji: "🇭🇰",
    },
    {
      name: "Croatian",
      emoji: "🇭🇷",
    },
    {
      name: "Czech",
      emoji: "🇨🇿",
    },
    {
      name: "Danish",
      emoji: "🇩🇰",
    },
    {
      name: "Dutch",
      emoji: "🇳🇱",
    },
    {
      name: "English",
      emoji: "🇬🇧",
    },
    {
      name: "Estonian",
      emoji: "🇪🇪",
    },
    {
      name: "Faroese",
      emoji: "🇫🇴",
    },
    {
      name: "Filipino",
      emoji: "🇵🇭",
    },
    {
      name: "Finnish",
      emoji: "🇫🇮",
    },
    {
      name: "French",
      emoji: "🇫🇷",
    },
    {
      name: "Georgian",
      emoji: "🇬🇪",
    },
    {
      name: "German",
      emoji: "🇩🇪",
    },
    {
      name: "Greek",
      emoji: "🇬🇷",
    },
    {
      name: "Guarani",
      emoji: "🇵🇾",
    },
    {
      name: "Gujarati",
      emoji: "🇮🇳",
    },
    {
      name: "Haitian Creole",
      emoji: "🇭🇹",
    },
    {
      name: "Hausa",
      emoji: "🇳🇪",
    },
    {
      name: "Hebrew",
      emoji: "🇮🇱",
    },
    {
      name: "Hindi",
      emoji: "🇮🇳",
    },
    {
      name: "Hungarian",
      emoji: "🇭🇺",
    },
    {
      name: "Icelandic",
      emoji: "🇮🇸",
    },
    {
      name: "Igbo",
      emoji: "🇳🇬",
    },
    {
      name: "Indonesian",
      emoji: "🇮🇩",
    },
    {
      name: "Irish",
      emoji: "🇮🇸",
    },
    {
      name: "Italian",
      emoji: "🇮🇹",
    },
    {
      name: "Japanese",
      emoji: "🇯🇵",
    },
    {
      name: "Javanese",
      emoji: "🇮🇩",
    },
    {
      name: "Kannada",
      emoji: "🇮🇳",
    },
    {
      name: "Kazakh",
      emoji: "🇰🇿",
    },
    {
      name: "Korean",
      emoji: "🇰🇷",
    },
    {
      name: "Kurdish",
      emoji: "🇮🇶",
    },
    {
      name: "Kyrgyz",
      emoji: "🇰🇬",
    },
    {
      name: "Laothian",
      emoji: "🇱🇦",
    },
    {
      name: "Latvian",
      emoji: "🇱🇻",
    },
    {
      name: "Lithuanian",
      emoji: "🇱🇹",
    },
    {
      name: "Luxembourgish",
      emoji: "🇱🇺",
    },
    {
      name: "Macedonian",
      emoji: "🇲🇰",
    },
    {
      name: "Malagasy",
      emoji: "🇲🇬",
    },
    {
      name: "Malay",
      emoji: "🇲🇾",
    },
    {
      name: "Malayalam",
      emoji: "🇮🇳",
    },
    {
      name: "Maltese",
      emoji: "🇲🇹",
    },
    {
      name: "Maori",
      emoji: "🇳🇿",
    },
    {
      name: "Marathi",
      emoji: "🇮🇳",
    },
    {
      name: "Moldavian",
      emoji: "🇲🇩",
    },
    {
      name: "Mongolian",
      emoji: "🇲🇳",
    },
    {
      name: "Nepali",
      emoji: "🇳🇵",
    },
    {
      name: "Norwegian",
      emoji: "🇳🇴",
    },
    {
      name: "Nyanja",
      emoji: "🇲🇼",
    },
    {
      name: "Pashto",
      emoji: "🇦🇫",
    },
    {
      name: "Persian",
      emoji: "🇮🇷",
    },
    {
      name: "Polish",
      emoji: "🇵🇱",
    },
    {
      name: "Portuguese",
      emoji: "🇵🇹",
    },
    {
      name: "Portuguese (BR)",
      emoji: "🇧🇷",
    },
    {
      name: "Romanian",
      emoji: "🇷🇴",
    },
    {
      name: "Romansh",
      emoji: "🇨🇭",
    },
    {
      name: "Russian",
      emoji: "🇷🇺",
    },
    {
      name: "Samoan",
      emoji: "🇼🇸",
    },
    {
      name: "Serbian",
      emoji: "🇷🇸",
    },
    {
      name: "Serbo-Croatian",
      emoji: "🇷🇸",
    },
    {
      name: "Sesotho",
      emoji: "🇱🇸",
    },
    {
      name: "Shona",
      emoji: "🇿🇼",
    },
    {
      name: "Sindhi",
      emoji: "🇵🇰",
    },
    {
      name: "Sinhalese",
      emoji: "🇱🇰",
    },
    {
      name: "Slovak",
      emoji: "🇸🇰",
    },
    {
      name: "Slovenian",
      emoji: "🇸🇮",
    },
    {
      name: "Somali",
      emoji: "🇸🇴",
    },
    {
      name: "Spanish",
      emoji: "🇪🇸",
    },
    {
      name: "Spanish (LA)",
      emoji: "🇲🇽",
    },
    {
      name: "Swahili",
      emoji: "🇰🇪",
    },
    {
      name: "Swedish",
      emoji: "🇸🇪",
    },
    {
      name: "Tajik",
      emoji: "🇹🇯",
    },
    {
      name: "Tamil",
      emoji: "🇱🇰",
    },
    {
      name: "Telugu",
      emoji: "🇮🇳",
    },
    {
      name: "Thai",
      emoji: "🇹🇭",
    },
    {
      name: "Tigrinya",
      emoji: "🇪🇷",
    },
    {
      name: "Tonga",
      emoji: "🇹🇴",
    },
    {
      name: "Turkish",
      emoji: "🇹🇷",
    },
    {
      name: "Turkmen",
      emoji: "🇹🇲",
    },
    {
      name: "Ukrainian",
      emoji: "🇺🇦",
    },
    {
      name: "Urdu",
      emoji: "🇵🇰",
    },
    {
      name: "Uzbek",
      emoji: "🇺🇿",
    },
    {
      name: "Vietnamese",
      emoji: "🇻🇳",
    },
    {
      name: "Yoruba",
      emoji: "🇳🇬",
    },
    {
      name: "Zulu",
      emoji: "🇿🇦",
    },
  ],
};

const dataOrders = {
  name: "order",
  filters: [
    { name: "score", filters: "field_score" },
    { name: "follow", filters: "field_follow" },
    { name: "review", filters: "field_review" },
    { name: "comment", filters: "field_comment" },
    { name: "chapter", filters: "field_chapter" },
    { name: "upload", filters: "field_upload" },
    { name: "public", filters: "field_public" },
    { name: "name", filters: "field_name" },
    { name: "views", filters: "views_d000" },
  ],
};

const dataStatus = {
  name: "status",
  filters: ["completed", "pending", "ongoing", "hiatus", "cancelled"],
};

export const comicProps = {
  contentType,
  domain: "https://battwo.com",
  orders: dataOrders,
  genres: dataGenres,
  status: dataStatus,
  originaLanguage: dataLanguage,
  translatedLanguage: dataLanguage,
};
