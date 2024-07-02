// 제품 카테고리별 분류
// 메인분류 : 유형별
// 서브분류 : 사용목적별
// https://www.bose.com/c/headphones

const headphones = [
  {
    idx: "0",
    name: "Bose QuietComfort Ultra Headphones",
    // 서브페이지에 들어갈 정보들
    infoText:
      "World-class noise cancellation, quieter than ever before. Breakthrough spatialized audio for immersive listening, no matter the content or source. Elevated design and luxe materials for unrivaled comfort. It’s everything music makes you feel taken to new highs. Bose Immersive Audio pushes the boundary of what it means to listen by taking what you’re hearing out of your head and placing it in front of you. It sounds so real it’s almost like you could reach out and touch it.",
    infoIcon: [
      "Breakthrough Bose Immersive Audio",
      "World-class noise cancellation",
      "Sound tailored to you",
      "Unrivaled comfort",
      "Plays up to 24 hours**",
      "Modes for any musical mood",
      "Amazingly clear calls",
      "Customize with Bose Music app",
    ],
    Box: [
      "Bose QuietComfort Ultra Headphones",
      "Carry case",
      "3.5 mm to 2.5 mm audio cable",
      'USB-C® (A to C) cable (20")',
      "Safety sheet",
    ],
    Specifications: {
      "Headphone Fit": "	Around Ear Circumaural",
      Headband: "	On Head Adjustable",
      Cushions: "	Removable Cushion",
      Microphones: "	Built-in Microphone",
      "Noise Cancelling": "	Yes",
      "Noise Control Type":
        "	Active Noise Cancelling, Echo Reduction, Adjustable Noise Cancelling",
      "Audio cable included": "	Yes",
      Case: "	Carry",
      Headphone: '	7.7" H x 5.5" W x 2.0" D (0.56 lb) ',
      "Product Material": "	Plastic, Aluminum, Leather (Protein)",
      "Product Case Material": "	Plastic (Hard)",
      "Ear Cushion Material": "	Protein Leather",
      Rechargeable: "	Yes",
      "Battery Life": "	24 hours",
      "Battery Charge Time": "	3 hours",
      "Charging Accessory included": "	Yes",
      "Charging Interface(s)": "	USB C PORT",
      "Wireless Connectivity":
        "	Bluetooth, A2DP Bluetooth Audio Streaming, HFP Bluetooth, AVRCP Bluetooth, Bluetooth Low Energy",
      "Bluetooth Version": "	5.3",
      "Bluetooth Range": "	30'",
      "Bose App": "	Bose Music App",
    },
  },
  {
    idx: "1",
    name: "Bose QuietComfort 45 headphones",
    // 서브페이지에 들어갈 정보들
    infoText:
      "There’s comfort in quiet. You can feel it the minute you put them on. The soft, plush cushions seal you in. You press the button and whoosh — the world fades, the music starts, and it’s love at first listen. That’s the power of our QuietComfort 45 Headphones with signature active noise cancelling technology and premium comfort. Bose QuietComfort 45 Headphones also deliver proprietary acoustic technology for deep, clear audio with adjustable EQ so you can tune your music to your liking. They're wireless headphones with a perfect balance of quiet, comfort, and sound you’ll enjoy all day long.",
    infoIcon: [
      "Acclaimed noise cancellation",
      "Comfort that keeps up",
      "Multiple modes to match your moment",
      "Up to 22 hours of battery life",
      "Clearer conversations",
      "Reliable Bluetooth® connectivity",
      "High-fidelity audio",
      "Active and adjustable EQ",
    ],
    Box: [
      "Bose QuietComfort 45 headphones",
      "Carry case",
      '12" USB-C charging cable',
      "3.5 mm to 2.5 mm audio cable",
    ],
    Specifications: {
      "Headphone Fit": "Around Ear Circumaural",
      Headband: "On Head Adjustable",
      Cushions: "Removable Cushion",
      Microphones: "Built-in Microphone",
      "Noise Cancelling": "Yes",
      "Noise Control Type":
        "Active Noise Cancelling, Echo Reduction, Adjustable Noise Cancelling",
      "Audio cable included": "Yes",
      Case: "Carry",
      Headphone: '7.7" H x 5.5" W x 2.0" D (0.56 lb)',
      "Product Material": "Plastic, Aluminum, Leather (Protein)",
      "Product Case Material": "Plastic (Hard)",
      "Ear Cushion Material": "Protein Leather",
      Rechargeable: "Yes",
      "Battery Life": "20 hours",
      "Battery Charge Time": "3 hours",
      "Charging Accessory included": "Yes",
      "Charging Interface(s)": "USB C PORT",
      "Wireless Connectivity":
        "Bluetooth, A2DP Bluetooth Audio Streaming, HFP Bluetooth, AVRCP Bluetooth, Bluetooth Low Energy",
      "Bluetooth Version": "5.3",
      "Bluetooth Range": "30'",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "2",
    name: "Bose QuietComfort Headphones",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Take charge of your music and stride along to the beat. High-fidelity audio and legendary noise cancellation work their magic by sealing you in, eliminating distractions, and letting you dive deep into your own rhythm. Toggle between Quiet and Aware Modes, or create a Custom Mode and adjust outside sound to the moment. The design is iconic and the comfort lasting, while an optional audio cable with an in-line microphone plugs you into sound as bold as you, even without a Bluetooth® connection.",
    infoIcon: [
      "Legendary noise cancellation",
      "Modes for any musical moment",
      "High-fidelity audio",
      "All-day comfort",
      "Up to 24 hours of battery life*",
      "Adjustable EQ",
      "Audio cable with in-line mic",
      "Customize with Bose Music app",
    ],
    Box: [
      "Bose QuietComfort Headphones",
      "Carry Case",
      "3.5 mm to 2.5 mm audio cable",
      'USB-C® (A to C) cable (12")',
      "Safety Sheet",
    ],
    Specifications: {
      "Headphone Fit": "Around Ear Circumaural",
      Headband: "On Head",
      Cushions: "Removable Cushion",
      Microphones: "Built-in Microphone",
      "Noise Cancelling": "Yes",
      "Noise Control Type": "Active Noise Cancelling",
      "Audio cable included": "Yes",
      Case: "Carry, Storage",
      Headphone: '7.68" H x 6.18" W x 3.15" D (0.520 lb)',
      "Product Material": "Metal, Plastic, Leather (Protein)",
      "Product Case Material": "Leather (Hard)",
      "Ear Cushion Material": "Protein Leather",
      Rechargeable: "Yes",
      "Battery Life": "24 hours",
      "Battery Charge Time": "2.5 hours",
      "Charging Accessory included": "Yes",
      "Charging Interface(s)": "USB",
      "Wireless Connectivity": "Bluetooth",
      "Bluetooth Version": "5.1",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "3",
    name: "Bose A30 Aviation Headset",
    // 서브페이지에 들어갈 정보들
    infoText:
      "What happens when all the distractions — everything that’s standing in your way — are stripped away? You’re left with the pure, indescribable feeling of the freedom of flight.",
    infoIcon: [
      "Lightweight design",
      "Active noise cancellation",
      "FAA TSO and EASA E/TSO-C139a certified",
      "Audio clarity with active equalization",
      "Noise cancelling microphone",
      "Side swappable cable and mic",
    ],
    Box: [
      "Headset",
      "1/8 Connector stereo input cable",
      "2X Alkaline AA batteries",
      "Control module holder",
      "2X Cable clips",
      "Quick Start Guide",
      "Owner's guide",
      "Warranty Card",
    ],
    Specifications: {
      "Headphone Fit": "Around Ear Circumaural",
      Headband: "Circumaural",
      "Noise Cancelling": "Yes",
      "Noise Control Type":
        "Noise Cancelling, Echo Reduction, Adjustable Noise Cancelling",
      "Audio cable included": "No",
      Headphone: '8.27" H x 6.69" W x 3.15" D (1.96 lb)',
      "Product Material": "Metal, Plastic, Fabric",
      "Wireless Connectivity": "Bluetooth",
    },
  },
  {
    idx: "4",
    name: "ProFlight Series 2 Aviation Headset",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Tailored for jet pilots, the ProFlight Series 2 combines cutting-edge features with exceptional comfort, setting a new standard for in-flight communication. Customization is at your fingertips with multiple connector configurations, including Bluetooth® and non-Bluetooth variants in dual-plug and 5-pin options. Effortlessly connect to mobile devices, audio systems, and electronic flight bags using the Bose Connect app, enjoying the freedom of movement without compromising audio quality. Enhanced audio prioritization lets you effortlessly mix Bluetooth audio with intercom transmissions or temporarily mute Bluetooth to focus on critical communications, giving you unmatched control and convenience in the cockpit.",
    infoIcon: [
      "Engineered for jet aircrafts",
      "Ultra-lightweight design",
      "Tap Control For Talk-Through Communication",
      "Bluetooth and non-Bluetooth",
      "Three noise cancellation modes",
      "FAA TSO & E/TSO-C139A certified",
      "Adjustable mic and cable",
    ],
    Box: [
      "ProFlight Series 2 Aviation Headset",
      "Carry case",
      "Carry case hook",
      "2 AA batteries",
      "Control module holder",
      "3 sizes of StayHear+ eartips (S, M, L)",
      "Owner’s guide",
    ],
    Specifications: {
      "Headphone Fit": "In Ear",
      Headband: "On Head Adjustable",
      Cushions: "Removable Cushion",
      "Noise Cancelling": "Yes",
      "Noise Control Type": "Noise Cancelling",
      "Audio cable included": "No",
      "Entire Product System": '8.43" H x 6.34" W x 3.15" D (1.99 lb)',
      "Product Material":
        "Leather (Protein), Plastic, Metal, Silicone, Stainless Steel",
      "Battery Life": "45 hours",
      "Wireless Connectivity": "Bluetooth",
      "Bose App": "Bose Connect App",
    },
  },
  /////
  {
    idx: "5",
    name: "A20 Aviation Headset with Bluetooth",
    // 서브페이지에 들어갈 정보들
    infoText:
      "The A20 headset gives you 30% more noise reduction than conventional aviation headsets, so you’ll enjoy a peaceful flight from short stops to long hauls. And at just 12 ounces, with sheepskin cushions and minimal clamping force, it's one of the lightest and most comfortable aviation headsets you’ll find. All designed to let you focus on what matters — flying.",
    infoIcon: [
      "Acclaimed noise reduction",
      "Comfortable fit",
      "Active equalization",
      "Bluetooth® connectivity",
      "FAA TSO and E/TSO-C139",
      "Swap the mic to your best side",
      "Up to 45 hours of battery",
    ],
    Box: [
      "A20 Aviation Headset",
      "In-line clothing clip",
      "Control module",
      "2 AA batteries",
      "Aux-in cable adapter",
      "Carrying case",
      "Owner’s guide",
    ],
    Specifications: {
      "Headphone Fit": "In Ear",
      Headband: "On Head Adjustable",
      Cushions: "Removable Cushion",
      "Noise Cancelling": "Yes",
      "Noise Control Type": "Noise Cancelling",
      "Audio cable included": "No",
      "Entire Product System": '8.43" H x 6.34" W x 3.15" D (1.99 lb)',
      "Product Material":
        "Leather (Protein), Plastic, Metal, Silicone, Stainless Steel",
      "Battery Life": "45 hours",
      "Wireless Connectivity": "Bluetooth",
      "Bose App": "Bose Connect App",
    },
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const earbuds = [
  {
    idx: "0",
    name: "Bose QuietComfort Ultra Earbuds",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Breakthrough spatialized audio for more immersive listening that makes your music feel realer than ever before — no matter the content or source. World-class noise cancellation and sound tailored to you. And a design that feels so good to wear. Say less. (Listen more.) QuietComfort Ultra Earbuds are the ultimate wireless noise cancelling earbud experience. Bose Immersive Audio pushes the boundary of what it means to listen by taking what you’re hearing out of your head and placing it in front of you. It sounds so real it’s almost like you could reach out and touch it.",
    infoIcon: [
      "Breakthrough Bose Immersive Audio",
      "World-class noise cancellation",
      "Sound and silence tailored to you",
      "Superior comfort",
      "Plays up to 6 hours¹",
      "Modes for any musical mood",
      "Simple touch controls",
      "Customize with Bose Music app",
    ],
    Box: [
      "2 Bose QuietComfort Ultra Earbuds",
      "Bose Fit Kit:",
      "3 pairs of ear tips (small, medium, large)",
      "3 pairs of stability bands (1, 2, 3)",
      "Charging case",
      'USB-C® (A to C) cable (12")',
      "Safety sheet",
    ],
    Specifications: {
      "Headphone Fit": "In Ear",
      Microphones: "Built-in Microphone",
      "Noise Cancelling": "Yes",
      "Noise Control Type": "Adjustable Noise Cancelling",
      "Water Resistant": "IPX4",
      Case: "Charging",
      "Bud Single": '1.23" H x 0.79" W x 0.96" D (0.017 lb)',
      Case: '2.61" H x 2.34" W x 1.05" D (0.132 lb)',
      "Product Material": "Plastic (PC-ABS), Silicone, Metal",
      "Product Case Material": "Plastic (Hard)",
      Rechargeable: "Yes",
      "Battery Charge Time": "2 hours",
      "Charging Accessory included": "Yes",
      "Charging Interface(s)": "USB C PORT",
      "Wireless Connectivity": "A2DP Bluetooth Audio Streaming, HFP Bluetooth",
      "Bluetooth Version": "5.3",
      "Bluetooth Range": "30'",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "1",
    name: "Bose Ultra Open Earbuds",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Introducing Ultra Open Earbuds. Their cuff-like fit leaves your ears totally open so you can still hear the world around you, while OpenAudio technology provides you with rich, private sound. Listen to your music and life — at the same time, all the time.",
    infoIcon: [
      "Open-ear design",
      "Immersive Audio",
      "Surprisingly private",
      "All-day comfort",
      "Auto volume",
      "Up to 7.5 hours of play time¹",
      "Simple, satisfying button controls.",
      "IPX4 rating for water resistance",
    ],
    Box: [
      "2 Bose Ultra Open Earbuds",
      "Charging case",
      'USB-C® (A to C) cable (12")',
      "Safety sheet",
    ],
    Specifications: {
      "Headphone Fit": "Open Ear",
      Microphones: "Built-in Microphone",
      "Noise Cancelling": "No",
      "Water Resistant": "IPX4",
      Case: "Charging, Protection",
      "Bud Single": '0.73" H x 0.67" W x 1.07" D (0.0140 lb)',
      Case: '1.65" H x 2.56" W x 1.04" D (0.0966 lb)',
      "Product Material": "Plastic (PC-ABS), Metal, Silicone, Gold Plating",
      "Product Case Material": "Plastic (Hard)",
      Rechargeable: "Yes",
      "Battery Life": "7.5 hours",
      "Battery Charge Time": "1 hour",
      "Charging Accessory included": "Yes",
      "Charging Interface(s)": "USB C PORT",
      "Wireless Connectivity":
        "A2DP Bluetooth Audio Streaming, Bluetooth, Bluetooth Low Energy, HFP Bluetooth, Wireless Connectivity, AAC Bluetooth, SBC Bluetooth",
      "Bluetooth Version": "5.3",
      "Bluetooth Range": "30 feet",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "2",
    name: "Bose Ultra Open Earbuds Silicone Case Cover",
    // 서브페이지에 들어갈 정보들
    infoText:
      "When music fuels your day — a playlist in the park or favorite song for shopping — protect your earbuds and always keep them close by with the Bose Ultra Open Earbuds Silicone Case Cover. It’s soft to the touch and defends against scratches and scuffs. And an aluminum carabiner lets you clip your buds to your bag for convenient carrying. So you can bring them everywhere for music anywhere.",
    infoIcon: ["Protects against scratches", "Attaches to your bag"],
    Box: ["Bose Ultra Open Earbuds Silicone Case Cover"],
    Specifications: {},
  },
  {
    idx: "3",
    name: "Bose Ultra Open Earbuds Wireless Charging Case Cover",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Power up wirelessly with the Bose Ultra Open Earbuds Wireless Charging Case Cover. Soft-touch silicone defends against scratches and scuffs. An aluminum carabiner clips to your bag or belt loop, so you can keep your earbuds close by. And the convenience of it all puts you in charge.",
    infoIcon: [
      "Charges wirelessly",
      "Protects against scratches",
      "Attaches to your bag",
      "Charges earbuds in 3 – 4 hours",
    ],
    Box: ["Case Cover", "Carabiner", "Quick Start Guide"],
    Specifications: {},
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const speakers = [
  {
    idx: "0",
    name: "Bose SoundLink Max Portable Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Introducing SoundLink Max Speaker. Epic stereo sound and deep bass turn good times to the max, letting you feel the music from your head to your toes. And with its compact design and removable handle, you can take the party anywhere you are.",
    infoIcon: [
      "Epic stereo sound",
      "Deep bass",
      "Grab-and-go portability",
      "Plays up to 20 hours¹",
      "Charge phone while you listen",
      "Built to handle some bruising",
      "Bose app control",
      "SimpleSync compatibility",
    ],
    Box: [
      "Bose SoundLink Max Portable Speaker",
      "USB-C (C to C) cable",
      "USB-C power supply (US only. Not available in all regions)",
      "Safety sheet",
    ],
    Specifications: {
      Microphones: "No Microphone",
      "Sound Options": "Stereo, SimpleSync, Full Range Speakers",
      "Audio cable included": "No",
      "Water Resistant": "IP67",
      Speaker: '4.73" H x 10.42" W x 4.13" D (4.900 lb)',
      "Product Material": "Aluminum, Fabric, Nylon, Plastic, Silicone, Steel",
      "Battery Life": "20 hours",
      "Battery Charge Time": "5 hours",
      "Charging Interface(s)": "USB-C In/Out",
      "Bluetooth Version": "5.4",
      "Bluetooth Range": "30ft",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "1",
    name: "Bose SoundLink Flex Bluetooth Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Sound for any all-day runway. The SoundLink Flex Bluetooth® speaker is the perfect chic musical sidekick, with a waterproof, dustproof, life-proof design that can handle whatever comes your way — with dazzling sound and deep bass. So whether you're storming the city, hanging by the beach, or just having friends over for dinner, the powerful SoundLink Flex helps you elevate the moment.",
    infoIcon: [
      "Big sound, small package.",
      "Weather, dust, & life proof",
      "Up to 12 hours battery per charge",
      "PositionIQ technology",
      "Built to handle some bruising",
    ],
    Box: ["Bose SoundLink Flex Bluetooth speaker", "USB Type-C cable"],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options":
        "Shielded Speakers, Speakerphone, SimpleSync, Full Range Speakers, Party Mode (When Enabling Two Speakers), PositionIQ, Stereo Mode (When Enabling Two Speakers)",
      "Noise Control Type": "Echo Reduction",
      "Audio cable included": "No",
      "Water Resistant": "IP67",
      "Entire Product System": '3.56" H x 7.93" W x 2.06" D (1.300 lb)',
      "Product Material": "Aluminum, Fabric, Nylon, Plastic, Silicone, Steel",
      "Battery Life": "12 hours",
      "Battery Charge Time": "4 hours",
      "Charging Interface(s)": "USB C PORT",
      "Wireless Connectivity": "Bluetooth, Wireless Connectivity",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "Up to 30 ft (9 m)",
      "Bose App": "Bose Connect App",
    },
  },
  {
    idx: "2",
    name: "Bose SoundLink Mini II Special Edition",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Live Big. Go Mini. The SoundLink Mini II Special Edition delivers full, natural sound with dramatically deeper bass than you’d expect from a Bluetooth mini speaker that fits in the palm of your hand. It also features a built-in microphone for taking calls and makes easy wireless connections anytime, anywhere. Now with 20% more battery life, a USB-C charging port, and two special edition colors — Luxe Silver or Triple Black.",
    infoIcon: [
      "Small, portable package.",
      "Up to 12 hours battery per charge",
      "Take control using voice assistants",
      "Built-in speakerphone",
      "Get connected with Bluetooth®",
    ],
    Box: ["SoundLink Mini II Special Edition", "USB-C to USB-A cable"],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options": "Speakerphone",
      "Audio cable included": "No",
      "Entire Product System": '2" H x 7.06" W x 2.31" D (1.44 lb)',
      "Product Material": "Aluminum, Plastic, Steel, Metal, Silicone",
      "Battery Life": "12 hours",
      "Charging Interface(s)": "USB C PORT",
      "Wireless Connectivity": "Bluetooth, Wireless Connectivity",
      "Bluetooth Version": "3",
      "Bluetooth Range": "Up to 30 ft (9 m)",
    },
  },
  {
    idx: "3",
    name: "Bose SoundLink Micro Bluetooth Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Take bold sound on the go. Our SoundLink Micro Bluetooth® Speaker is portable and rugged enough for any adventure. It delivers sound that packs a punch — crisp and balanced, with surprisingly deep bass. Plus, it's IP67-rated as waterproof, dustproof, and extreme temperature proof. Its tear-resistant strap means you can bring your music anywhere, or pair with other Bose speakers for more sound.",
    infoIcon: [
      "Big sound, small package.",
      "Weather, dust, & life proof",
      "Tear-resistant strap for on the go",
      "Up to 6 hours battery per charge",
      "Boasting a deep bass",
    ],
    Box: ["SoundLink Micro Bluetooth speaker", "Micro-B USB charging cable"],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options":
        "Shielded Speakers, Speakerphone, SimpleSync, Party Mode (When Enabling Two Speakers), Stereo Mode (When Enabling Two Speakers)",
      "Noise Control Type": "Echo Reduction",
      "Audio cable included": "No",
      "Water Resistant": "IP67",
      "Entire Product System": '3.87" H x 3.87" W x 1.37" D (0.68 lb)',
      "Product Material": "Metal, Plastic, Silicone, Steel",
      "Battery Life": "6 hours",
      "Charging Interface(s)": "USB MICRO PORT",
      "Wireless Connectivity":
        "A2DP Bluetooth Audio Streaming, AVRCP Bluetooth, Wireless Connectivity",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "up to 30 ft (9 m)",
      "Bose App": "Bose Connect App",
    },
  },
  {
    idx: "4",
    name: "Bose Portable Smart Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Meet the home speaker you won’t want to leave home without. The Portable Smart Speaker is a wireless Wi-Fi® home speaker, a portable Bluetooth® speaker, and a voice-controlled speaker, all in one. Move it with you from room to room, or take it with you when you head out. Control it with your voice and stream music over Wi-Fi when you're home. On the go? Listen via Bluetooth to anything you can play on your device. And no matter what, you’ll hear it all in 360 degrees of astonishing Bose sound.",
    infoIcon: [
      "360-degree sound, powerful bass.",
      "Don't sweat the wet",
      "Up to 12 hours battery per charge",
      "Control with voice, touch, or app.",
      "Wi-Fi and Bluetooth connectivity",
      "Apple Airplay 2 enabled",
      "Quality materials and durable build",
    ],
    Box: [
      "Bose Portable Smart Speaker",
      "Power cord",
      "AC power adapter",
      "Quick start guide",
    ],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options": "Multiroom, SimpleSync",
      "Audio cable included": "No",
      "Water Resistant": "IPX4",
      "Entire Product System": '7.54" H x 4.69" W x 4.09" D (2.34 lb)',
      "Product Material":
        "Aluminum, Fabric, Paint, Plastic, Plastic (Hard), Plastic (Soft)",
      "Battery Life": "12 hours",
      "Charging Interface(s)": "USB C PORT",
      "Wireless Connectivity":
        "Apple AirPlay 2, Bluetooth, Network (WiFi Enabled), Wireless Connectivity",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "Up to 30 ft (9 m)",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "5",
    name: "Bose SoundLink Revolve+ II Bluetooth Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Experience the full 360° with the SoundLink Revolve+ II — one of our best-performing portable Bluetooth® speakers. It was engineered to spread deep, jaw-dropping sound in every direction, so when everyone stands around it, everyone gets the same experience. If you set it near a wall, sound will radiate and reflect around the room, immersing you in that same feeling you felt at your favorite concert. And with a flexible handle, it’s designed to go wherever you want to bring the music.",
    infoIcon: [
      "Siri & Google voice commands",
      "Water and dust resistant",
      "Up to 17 hours battery per charge",
      "Design that keeps up with you",
    ],
    Box: [
      "SoundLink Revolve+ II Speaker",
      "USB power supply",
      "USB cable (micro-B to USB A)",
      "AC power adapters (not available in all countries)",
    ],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options":
        "Full Range Speakers, Speakerphone, Stereo, SimpleSync, Party Mode (When Enabling Two Speakers), Stereo Mode (When Enabling Two Speakers)",
      "Noise Control Type": "Echo Reduction",
      "Audio cable included": "No",
      "Water Resistant": "IP55",
      "Entire Product System": '7.25" H x 4.13" W x 4.13" D (2 lb)',
      "Product Material": "Aluminum, Plastic, Silicone, Metal, Fabric",
      "Battery Life": "17 hours",
      "Charging Interface(s)": "USB MICRO B PORT",
      "Wireless Connectivity":
        "Bluetooth, NFC Connectivity, Wireless Connectivity",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "Up to 30 ft (9 m)",
      "Bose App": "Bose Connect App",
    },
  },
  {
    idx: "6",
    name: "Bose SoundLink Revolve II Bluetooth Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Be the center of attention from any direction. Meet SoundLink Revolve II, one of our best-performing portable Bluetooth speakers yet. It delivers true 360-degree sound for consistent, uniform coverage. Place it in the center of the room and everyone gets the same experience. Or set it near a wall and sound will radiate and reflect around the room. Indoors or out, it’s meant to go where you go.",
    infoIcon: [
      "Shout out with Siri & Google voice commands",
      "Water and dust resistant",
      "Up to 13 hours battery per charge",
      "Built to keep up with you",
    ],
    Box: ["SoundLink Revolve II Speaker", "USB cable (micro-B to USB A)"],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options":
        "Full Range Speakers, Speakerphone, Stereo, SimpleSync, Party Mode (When Enabling Two Speakers), Stereo Mode (When Enabling Two Speakers)",
      "Noise Control Type": "Echo Reduction",
      "Audio cable included": "No",
      "Water Resistant": "IP55",
      "Entire Product System": '5.97" H x 3.24" W x 3.24" D (1.46 lb)',
      "Product Material": "Aluminum, Plastic, Silicone",
      "Battery Life": "13 hours",
      "Charging Interface(s)": "USB MICRO B PORT",
      "Wireless Connectivity":
        "Bluetooth, NFC Connectivity, Wireless Connectivity",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "Up to 30 ft (9 m)",
      "Bose App": "Bose Connect App",
    },
  },
  {
    idx: "7",
    name: "251® environmental speakers",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Take it all in with these wall-mount outdoor speakers. You'll experience balanced stereo sound that's guaranteed to withstand harsh weather, spread over a much wider area than most conventional outdoor speakers. They deliver a refined sound that adds a touch of elegance to your outdoor spaces.",
    infoIcon: [
      "Easy mounting for any outdoor setup",
      "Impressive sound tested for extreme weather",
      "Lifelike sound. Even outdoors.",
    ],
    Box: [
      "2 251 speakers",
      "Mounting hardware (8 screws and 8 plastic anchors)",
      "Self-adhesive rubber feet",
      "4 Knobs",
      "2 Brackets",
      "Owner’s guide",
    ],
    Specifications: {
      "Sound Options": "Stereo",
      "Audio cable included": "No",
      "Entire Product System": "17.031 lb",
      "Product Material": "Metal, Plastic",
    },
  },
  {
    idx: "8",
    name: "Bose Smart Speaker 500",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Experience the widest sound of any smart speaker. It’s powerfully simple. Fill any room with wall-to-wall stereo sound, while built-in voice control puts millions of songs at the tip of your tongue.",
    infoIcon: [
      "Sound that fills the room",
      "Take control with voice, touch, or app.",
      "Get connected with Wi-Fi® and Bluetooth®",
      "Personalize with the Bose Music app",
      "Sync up with Apple Airplay 2",
    ],
    Box: ["Bose Smart Speaker 500", "Power cord"],
    Specifications: {
      Microphones: "8 Microphones, Built-in Microphone",
      "Sound Options": "Multiroom, SimpleSync",
      "Audio cable included": "No",
      "Entire Product System": '8" H x 6.7" W x 4.3" D (4.75 lb)',
      "Product Material": "Aluminum, Paint, Plastic",
      "Wireless Connectivity":
        "A2DP Bluetooth Audio Streaming, Apple AirPlay 2, Network (Dual-Band WiFi Enabled), Network (WiFi Enabled), Wireless Connectivity",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "Up to 30 ft (9 m)",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "9",
    name: "Bose Music Amplifier",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Your music, amplified. The Bose Music Amplifier connects multiple sources to bring your home to life. Part of our smart family of products, it powers new or existing speakers and streams music over Wi-Fi® from your favorite services.",
    infoIcon: [
      "Power up to two pairs of passive speakers",
      "125 watts per channel",
      "Whole-home audio capability",
      "Stream music wirelessly",
      "Control with Bose Music app",
      "AirPlay 2, Spotify® Connect, Chromecast",
    ],
    Box: [
      "Bose Music Amplifier",
      "Power cord",
      "3 rack screws for rack mounting",
      "3 connecting screws for rack mount",
      "Mounting bracket",
      "Rack bracket",
      "Quick start guide",
    ],
    Specifications: {
      "Audio cable included": "No",
      Speaker: '2.9" H x 8.3" W x 8.3" D (5.1 lb)',
      "Product Material": "Plastic, Glass",
      "Wireless Connectivity": "Bluetooth, Network (WiFi Enabled)",
      "Bose App": "Bose Music App",
    },
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const homeTheater = [
  {
    idx: "0",
    name: "Bose Smart Ultra Soundbar",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Meet the top-of-the-line soundbar that’s here to pull you deep into the heart of all your favorite content. Bose Smart Ultra Soundbar with Dolby Atmos® and Bose TrueSpace technology separates instruments, dialogue, and effects, and places them in different parts of a room for a truly immersive spatial audio experience like you’ve never heard it before. Having a hard time hearing what your favorite characters are saying? A.I. Dialogue Mode automatically balances voice and surround sound for ultra-crisp vocal clarity. Plus, two upward firing dipole speakers work with Bose technologies to make it feel like your space is filled with sound from every direction — even overhead.",
    infoIcon: [
      "Supercharged and immersive",
      "Supports Dolby Atmos",
      "Immersion with proprietary TrueSpace",
      "A.I. Dialogue Mode for vocal clarity",
      "Control: Voice, remote, or app.",
      "Wi-Fi®, Bluetooth®",
      "AirPlay 2, Chromecast, Spotify Connect",
    ],
    Box: [
      "Bose Smart Ultra Soundbar",
      "HDMI™ eARC cable",
      "Optical cable",
      "ADAPTiQ headset",
      "Power cord",
      "Remote control (battery included)",
      "Quick start guide",
    ],
    Specifications: {
      Microphones: "Built-in Microphone",
      "Sound Options":
        "Surround Sound Configuration, 5.1.2 Speakers, Multiroom",
      Controls:
        "Remote Control, In App Control, In App Volume Control, Source Switching",
      "Entire Product System": '2.29" H x 41.14" W x 4.21" D (12.68 lb)',
      "Product Material": "Plastic, Metal",
      "Wireless Connectivity": "Bluetooth, Network (WiFi Enabled)",
      "Bluetooth Version": "5",
      "Bluetooth Range": "33'",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "1",
    name: "Bose Smart Soundbar 600",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Full immersion. For everything you play. When movies, TV, and music are your passion — you don’t want to just watch. That’s why there’s Smart Soundbar 600 with Dolby Atmos® and proprietary technologies for a captivating sound experience for all your entertainment.",
    infoIcon: [
      "Fully immersive sound",
      "Bose TrueSpace",
      "Control: Voice, remote, or app.",
      "Dolby Atmos",
      "Wireless music streaming",
      "Whole home audio family",
    ],
    Box: [
      "Bose Smart Soundbar 600",
      "Remote control with battery included",
      "Optical cable",
      "HDMI cable",
      "Power cord",
      "Quick start guide",
      "Global safety sheet",
      "Roku ready insert sheet",
    ],
    Specifications: {
      Microphones: "2 Microphones for Voice",
      "Sound Options": "Surround Sound Configuration",
      Controls:
        "Microphone Off, Remote Control (Infrared), In App Control, In App Volume Control",
      Speaker: '2.21" H x 27.34" W x 4.09" D (6.91 lb)',
      "Product Material": "Metal, Plastic",
      "Wireless Connectivity": "Bluetooth, Network (WiFi Enabled)",
      "Bluetooth Version": "5",
      "Bluetooth Range": "up to 30 ft (9 m)",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "2",
    name: "Bose TV Speaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Hear clearer with the Bose TV Speaker — a one-step, simple solution for better TV sound. It’s small but powerful, delivering a balanced, natural-sounding audio experience that enhances dialogue and bass performance.",
    infoIcon: [
      "Hear more clearly with Dialogue Mode",
      "One-connection setup",
      "Get connected with Bluetooth®",
      "Feel the bass on demand",
    ],
    Box: [
      "Bose TV Speaker",
      "Remote control with battery pre-installed",
      "Optical cable",
      "Power cord",
      "Quick Start Guide",
    ],
    Specifications: {
      Controls:
        "Auto Off, Auto On, Remote Control, Remote Control (Infrared), Auto Standby, AUX Connector, Bass, Low Power Standby, Volume",
      "Entire Product System": '2.21" H x 23.38" W x 4.02" D (4.34 lb)',
      "Remote Control": '4.1" H x 1.6" W x 0.5" D (0.07 lb)',
      "Product Material": "Metal, Plastic",
      "Wireless Connectivity": "Bluetooth",
      "Bluetooth Version": "4.2",
      "Bluetooth Range": "Up to 30 ft (9 m)",
    },
  },
  {
    idx: "3",
    name: "Bose Bass Module 500",
    // 서브페이지에 들어갈 정보들
    infoText:
      "This is sound you can feel. If you’re looking to amp up your sound performance, just add the Bose Bass Module 500 to take your music, movie, and content library to a whole new level.  It’s thunderous bass packed into a compact, 10-inch cube with wireless connectivity, making it easy to hide, and even easier to hear. Who says you need a big box for big bass? Not us.",
    infoIcon: [
      "Stay connected wirelessly",
      "Beautiful finish to accent your space",
      "Feel the beat with bigger bass",
      "Generously sized port",
    ],
    Box: ["Bose Bass Module 500", "Power cord"],
    Specifications: {
      Controls:
        "Auto On, Auto Standby, Buttons, In App Control, In App Volume Control, Pairing, Bass",
      "Entire Product System": '9.5" H x 10" W x 10" D (11.53 lb)',
      "Product Material": "Plastic",
      "Wireless Connectivity": "Wireless Connectivity",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "4",
    name: "Bose Bass Module 700",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Thunderous bass, wireless connectivity. The Bose Bass Module 700 is the best wireless bass module we’ve ever designed for our home theater systems. This subwoofer offers a sophisticated look and delivers a dynamic range of bass. Plus, the generously sized port virtually eliminates distortion.",
    infoIcon: [
      "Stay connected wirelessly",
      "Beautiful finish to accent your space",
      "Feel the beat with bigger bass",
      "Generously sized port",
    ],
    Box: ["Bose Bass Module 700", "Power cord"],
    Specifications: {
      Controls:
        "Auto On, Auto Standby, Buttons, In App Control, In App Volume Control, Pairing, Bass",
      "Entire Product System": '12.9" H x 11.6" W x 11.6" D (30 lb)',
      "Product Material": "Plastic, Glass",
      "Wireless Connectivity": "Wireless Connectivity",
    },
  },
  {
    idx: "5",
    name: "Bose Surround Speakers",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Hear sound that stands out. Designed exclusively to pair with the Bose Smart Soundbars, the Bose Surround Speakers are unobtrusive rear surround speakers that provide sweeping sound for all your movies, sports, and TV shows.",
    infoIcon: [
      "Surround sound made for any room",
      "Compact size",
      "Simple to set up",
      "Connected wirelessly",
    ],
    Box: [
      "2 Surround Speakers",
      "2 wireless receivers",
      "2 AC2 adapters",
      "2 power cords",
      "2 two-pin speaker cables",
      "Phillips-head screwdriver",
    ],
    Specifications: { Speaker: '15" H x 8" W x 5" D (6.6 lb)' },
  },
  {
    idx: "6",
    name: "Bose Surround Speakers 700",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Don’t just hear your entertainment. Experience it. The Bose Surround Speakers 700 deliver our most premium surround sound. They connect wirelessly to your soundbar. All you have to do is plug the included adapters into a power source and pair the surround speakers with your soundbar for instant entertainment.",
    infoIcon: [
      "Experience our best surround sound",
      "Simple to set up",
      "Connected wirelessly",
      "Refined design",
    ],
    Box: [
      "2 Surround speakers",
      "2 Wireless receiver",
      "2 Surround speaker base",
      "2 Speaker cables",
      "2 Power cord",
      "Phillips-head screwdriver",
    ],
    Specifications: { Speaker: '5" H x 1" W x 1" D (0.78 lb)' },
  },
]; ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const paSystems = [
  {
    idx: "0",
    name: "Bose S1 Pro+ Portable Bluetooth Speaker System",
    // 서브페이지에 들어갈 정보들
    infoText:
      "It’s a pro move to bring big sound wherever you want music. Versatile, portable, powerful — the S1 Pro+ Wireless Speaker is your go-to for adding vibes to the backyard, bar, park, or any larger gathering. With a 3-channel mixer, you can stream a playlist, plug in a microphone, or your favorite instrument. Go with whatever the night calls for. And now you can simplify setup and get to the music faster when you add wireless RF accessories for mics and instruments. They pair effortlessly to the S1 Pro+ and store right in the speaker itself so they’re always ready for the next song.",
    infoIcon: [
      "Powerful performance",
      "Portable with carry handle",
      "Integrated 3-channel mixer",
      "4 positioning options",
      "Plays up to 11 hours",
      "Optional wireless accessories",
      "Control with the Bose Music app",
      "Bluetooth streaming",
    ],
    Box: ["S1 Pro+ Wireless PA System with battery included", "AC power cord"],
    Specifications: {
      "Sound Options":
        "Audiences up to 50, Stereo, Party Mode (When Enabling Two Speakers)",
      "Audio cable included": "Yes",
      Speaker: '13.10" H x 9.40" W x 11.00" D (14.40 lb)',
      "Product Material": "Aluminum, Polypropylene",
      "Battery Life": "11 hours",
      "Battery Charge Time": "5 hours",
      "Charging Interface(s)": "Mains Lead",
      "Wireless Connectivity": "Bluetooth",
      "Bluetooth Version": "5",
      "Bluetooth Range": "Up to 30 ft (9 m)",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "1",
    name: "L1 Pro16 Portable Line Array System",
    // 서브페이지에 들어갈 정보들
    infoText:
      'Balancing power and portability, the L1 Pro16 portable line array is a streamlined system with high output and extended low frequency. It offers versatile coverage with a J-shaped line array featuring 16 articulated 2" neodymium drivers, while delivering tight vertical control on top and wide dispersion on the bottom. For DJs, singer-songwriters, and small groups, the L1 Pro16 gives you expanded bandwidth and supreme clarity.',
    infoIcon: [
      "180-degree horizontal coverage",
      "Versatile coverage pattern",
      "Built-in subwoofer and mixer",
      "System EQ presets",
      "Bluetooth® connectivity",
      "Wireless mixer control with app",
      "ToneMatch port",
    ],
    Box: [
      "Power stand",
      "Speaker array",
      "Speaker array extension",
      "Carry bag for speaker array and extension",
      "Power cord",
    ],
    Specifications: {
      "Audio cable included": "No",
      "Entire Product System": '79.21" H x 13.98" W x 17.95" D (52 lb)',
      "Wireless Connectivity": "Bluetooth",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "2",
    name: "L1 Pro8 Portable Line Array System",
    // 서브페이지에 들어갈 정보들
    infoText:
      'The L1 Pro8 is ready whenever you are, enabling easier load-in and faster setup. It offers generous coverage with a C-shaped line array featuring 8 articulated 2" neodymium drivers. This array delivers 180-degree horizontal coverage with wide vertical dispersion, allowing your audience to hear clearly no matter where your show is held. The L1 Pro8 gives singer-songwriters and DJs both setup simplicity and supreme clarity.',
    infoIcon: [
      "180-degree horizontal coverage",
      "Built-in subwoofer and mixer",
      "Get connected with Bluetooth®",
      "Mixer control via Bose Music app",
      "Ultra-portable, lightweight system",
      "System EQ presets",
      "ToneMatch port",
    ],
    Box: [
      "Power stand",
      "Speaker array",
      "Speaker array extension",
      "Carry bag for speaker array and extension",
      "Power cord",
    ],
    Specifications: {
      "Audio cable included": "No",
      "Entire Product System": '78.94" H x 12.52" W x 17.32" D (38 lb)',
      "Wireless Connectivity": "Bluetooth",
      "Bose App": "Bose Music App",
    },
  },
  {
    idx: "3",
    name: "F1 Model 812 Flexible Array loudspeaker",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Powerful, standalone sound that flexes to meet your coverage needs. The Bose F1 Model 812 is a 1000-watt, full-range loudspeaker featuring Bose Flexible Array technology. At the heart of the F1 is a 12-inch woofer nested behind an array of eight high-output drivers. These nine speakers are supported by a lower crossover point than conventional loudspeakers to deliver clearer, more natural vocals, and midrange clarity, even at high volumes. And you control the vertical coverage pattern. So, wherever you’re playing, you can adapt the PA to match the room.",
    infoIcon: [
      "Flex array to fit your coverage",
      "Automatic EQ changes",
      "1,000 watts of power",
    ],
    Box: ["1 F1 Model 812 Loudspeaker", "1 IEC line cord", "1 Owner’s guide"],
    Specifications: {
      "Sound Options": "Audiences up to 1000, Audiences up to 500",
      "Audio cable included": "No",
      "Entire Product System": "68.3 lb",
    },
  },
  {
    idx: "4",
    name: "Sub1 Powered Bass Module",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Give your songs full impact. Sub1 Powered Bass Module combines with virtually any portable PA to deliver low end down to 40 Hz. Sub1 offers powerful bass, an optimized center of gravity, and an easy-to-use system for packing, carrying, and setting up. Stack two Sub1 subwoofers for even more bass or to unleash Cardioid Mode for focused, directional performance that negates rear-firing bass energy, steers the bass out front, and reduces feedback.",
    infoIcon: [
      "Easy-to-carry design",
      "Directional sound",
      "SubMatch connectivity",
    ],
    Box: ["Sub1 powered bass module", "Slip cover", "Power cord"],
    Specifications: {
      "Audio cable included": "No",
      "Entire Product System": '20.87" H x 9.84" W x 20.87" D (36 lb)',
      "Product Material": "Wood",
    },
  },
  {
    idx: "5",
    name: "Sub2 Powered Bass Module",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Give your songs full impact. Sub2 Powered Bass Module combines with virtually any portable PA to deliver low end down to 37 Hz. Sub2 plays lower and louder, giving you bold bass that goes almost anywhere. Stack two Sub2 subwoofers for even more bass or to unleash Cardioid Mode for focused, directional performance that negates rear-firing bass energy, steers the bass out front, and reduces feedback.",
    infoIcon: [
      "Easy-to-carry design",
      "Directional sound",
      "SubMatch connectivity",
    ],
    Box: ["Sub2 powered bass module", "Slip cover", "Power cord"],
    Specifications: {
      "Audio cable included": "No",
      "Entire Product System": '27.17" H x 12.01" W x 21.65" D (52.15 lb)',
      "Product Material": "Wood",
    },
  },
  {
    idx: "6",
    name: "F1 Subwoofer",
    // 서브페이지에 들어갈 정보들
    infoText:
      "More bass. Less space. With 1,000 watts of power, the Bose F1 Subwoofer packs all the performance of a larger bass box into a more compact design that’s easy to carry and simple to setup.",
    infoIcon: [
      "1,000 watts of power",
      "Two 10-inch high excursion drivers",
      "Reverse polarity",
      "Line output EQ",
      "Easy transportation",
    ],
    Box: [
      "F1 Subwoofer",
      "F1 Subwoofer stand",
      "IEC line cord",
      "Owner's guide",
    ],
    Specifications: {
      "Sound Options": "Audiences up to 1000",
      "Audio cable included": "No",
      "Entire Product System": "69.3 lb",
    },
  },
  {
    idx: "7",
    name: "T4S ToneMatch mixer",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Take control of your music with the T4S ToneMatch mixer, an ultra-compact 4-channel interface designed for performers. Engineered with a powerful DSP engine and intuitive user control, the T4S offers studio-quality EQ, dynamics, and effects. You'll sound great with integrated Bose ToneMatch processing and zEQ, especially when connected to a Bose L1 or F1 system for full end-to-end tonal control. This mixer lets you play confidently on stage with the rugged T4S using its tactile controls, easy-to-read LED display and scene recall. The T4S ToneMatch mixer is a true performer’s companion.",
    infoIcon: [
      "Powerful audio processing",
      "Stay connected with any setup",
      "Seamless sound control",
      "Convenient features for any gig",
    ],
    Box: ["T4S ToneMatch mixer", "ToneMatch cable", "Cover"],
    Specifications: {
      "Audio cable included": "No",
      "Entire Product System": "3.153 lb",
    },
  },
  {
    idx: "8",
    name: "T8S ToneMatch mixer",
    // 서브페이지에 들어갈 정보들
    infoText:
      "Take unprecedented control of your music with the T8S ToneMatch mixer, a compact 8-channel interface designed for performers. Engineered with a powerful DSP engine and intuitive user control, the T8S offers studio-quality EQ, dynamics, and effects. Sound great with integrated Bose ToneMatch processing and zEQ, especially when connected to a Bose L1 or F1 system for full end-to-end tonal control. Play confidently on stage with the rugged T8S using its tactile controls, easy-to-read LED display, and scene recall.",
    infoIcon: [
      "Powerful audio processing",
      "Stay connected with any setup",
      "Seamless sound control",
      "Convenient features for any gig",
    ],
    Box: ["T8S ToneMatch mixer", "ToneMatch power supply", "Cover"],
    Specifications: {
      "Audio cable included": "No",
      "Entire Product System": "5.115 lb",
    },
  },
];

export const productsDta = {
  Headphones: headphones,
  Earbuds: earbuds,
  Speakers: speakers,
  "Home Theater": homeTheater,
  "PA Systems": paSystems,
};

const productMainType = [
  "Headphones",
  "Earbuds",
  "Speakers",
  "Home Theater",
  "PA Systems",
];
const productSubType = [
  "Over-ear",
  "Aviation",
  "In Ear",
  "Open Ear",
  "Portable",
  "Home Speakers",
  "Amplifiers",
  "Soundbars",
  "Bass modules",
  "Surround speakers",
  "Portable PA",
  "Array Systems",
  "Sub-woofers",
  "Mixers",
  "Sets",
];
