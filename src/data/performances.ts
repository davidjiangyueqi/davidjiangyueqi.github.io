export type DetailedProgramItem = {
  composer?: string;
  work?: string;
  movements?: string[];
  isIntermission?: boolean;
};

export type Performance = {
  date: string;
  venue: string;
  city: string;
  program?: string;
  detailedProgram?: DetailedProgramItem[];
  note?: string;
  link?: string;
  photo?: string;
};

export const upcomingPerformances: Performance[] = [
  {
    date: "April 16, 2026",
    venue: "Newman Hall",
    city: "Los Angeles, CA",
    detailedProgram: [
      { composer: "BARBER", work: "Nocturne Op.33" },
      { composer: "BUSONI", work: 'Kammer-Fantasie über Carmen, BV.284 "Sonatina No. 6"' },
      { composer: "BUSONI", work: "Turandot’s Frauengemach (Greensleeves) - From Elegies BV.249 No.4" },
      { composer: "SCRIABIN", work: "Sonata No.5" },
      { isIntermission: true },
      { composer: "POULENC", work: "Improvisation No.13" },
      { composer: "POULENC", work: "Improvisation No.15" },
      { composer: "RAVEL", work: "Sonatine", movements: ["I. Modéré", "II. Mouvement de Menuet", "III. Animé"] },
      { composer: "RAMEAU", work: "Les Tendres Plaintes" },
      { composer: "RAMEAU", work: "Les Boréades (Transcribed by Ólafsson)" },
      { composer: "PROKOFIEV", work: "Piano Sonata No. 7 in B-Flat Major, Op. 83", movements: ["I. Allegro inquieto", "II. Andante caloroso", "III. Precipitato"] }
    ]
  },
];

export const selectedPastPerformances: Performance[] = [
  {
    date: "April 2, 2025",
    venue: "Newman Recital Hall",
    city: "USC | Los Angeles, CA",
    program: "DMA Lecture Recital: David on Messiaen’s Vingt regards sur l'Enfant-Jésus",
    link: "https://youtu.be/CRK6aS7FBMo",
    photo: "/photos/piano/church_glass.jpg",
  },
  {
    date: "March 30, 2025",
    venue: "Schoenfeld Symphonic Hall",
    city: "USC | Los Angeles, CA",
    program: "Electro-Acoustic Showcase concert: La Prophétie (2025) by Wenhao David Shou",
    note: "Performer: Wenhao David Shou - Piano & Electrics.\n\nProgram Note from the composer: In the final days of the past year, I awaited the new year with hopeful anticipation. Yet, I came across prophecies foretelling the arrival of 2025-each one an ominous vision of calamity. With the turn of the year, I witnessed countless catastrophes, as if the world itself had suddenly become distant and unfamiliar. Wildfires ravaged California, earthquakes shook China, a new wave of flu spread through Japan, and tragedies unfolded in the skies over Korea and the United States. Wars loomed, political unrest deepened, and the weight of uncertainty grew ever heavier. Amidst these distant upheavals, I too was touched by sorrow-loss claimed those dear to me, and betrayal severed bonds once thought unbreakable. La Prophétie is my answer to these catastrophes-a lament, a reckoning, and a testament to the fragile and tumultuous nature of our times.",
    link: "https://youtu.be/SSmytAi8NcE",
  },
  {
    date: "January 28, 2022",
    venue: "Jordan Hall, New England Conservatory",
    city: "Boston, MA",
    program: "NEC Composer: Piano Music by NEC Alumni and Faculty concert",
    note: "David plays NEC alumni Chou Wen-chung's solo piano work The Willows Are New. Live-streamed by NEC.\n\nReviewed by The Boston Musical Intelligencer: “The Willows are New — one of the composer’s earliest experiments with this new approach — found a unique voice in Wenhao Shou’s profound and intimate interpretation.” (FEBRUARY 25, 2022)",
    link: "https://youtu.be/Kvuhu39f46A",
    photo: "/photos/piano/chou-wen-chung.jpg",
  },
];


