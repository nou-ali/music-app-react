import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Tropical Midnight",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/7c943e75ba2e1017052e03444366c79445b43195-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31516",
      color: ["#183718", "#9DB1BF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Solar Cove",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
      color: ["#FBCE99", "#882D42"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Everyday",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/6b1cd792e2d88c65108a3c3b7ed48407b6f65bf8-1024x1024.jpg",
      artist: "chromonicci",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30339",
      color: ["#DCD2B8", "#404768"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ending",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg",
      artist: "sadtoi, Relyae",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
      color: ["#413667", "#2E4379"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;