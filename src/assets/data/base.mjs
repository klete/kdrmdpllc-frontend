const services = [
  {
    id: 1,
    name: 'IVI - Infusion',
    therapies: [
      {
        id: 2,
        name: 'Alleviate',
      },
      {
        id: 5,
        name: 'Athletic Recovery',
      },
      {
        id: 7,
        name: 'Beautify',
      },
      {
        id: 12,
        name: 'Build - A - Bag',
      },
      {
        id: 11,
        name: 'Brainpower',
      },
      {
        id: 16,
        name: 'Energize',
      },
      {
        id: 18,
        name: 'High-C Infusion',
      },
      {
        id: 1,
        name: '#I’ll never Drink Again',
      },
      {
        id: 20,
        name: 'Immunity',
      },
      {
        id: 25,
        name: 'Myers',
      },
      {
        id: 26,
        name: 'Myers Pro',
      },
      {
        id: 27,
        name: 'NAD+ Rejuvenate',
      },
      {
        id: 30,
        name: 'Pregame',
      },
      {
        id: 33,
        name: 'Rehydrate',
      },
      {
        id: 31,
        name: 'Quick Slim',
      },
      {
        id: 32,
        name: 'Quick Slim Pro',
      },
      {
        id: 35,
        name: 'Supa Gluta',
      },
      {
        id: 37,
        name: 'Zen',
      },
    ],
  },
  {
    id: 2,
    name: 'IVB - Infusion Booster',
    therapies: [
      {
        id: 4,
        name: 'Ascorbic Acid (Vitamin C)',
      },
      {
        id: 6,
        name: 'B12 (Hydroxocobolomin)',
      },
      {
        id: 9,
        name: 'Biotin',
      },
      {
        id: 10,
        name: 'Booster Bag',
      },
      {
        id: 21,
        name: 'L-Taurine',
      },
      {
        id: 24,
        name: 'Magnesium Chloride',
      },
      {
        id: 8,
        name: 'Bi-Amino Blend',
      },
      {
        id: 38,
        name: 'Zinc Sulfate',
      },
    ],
  },

  {
    id: 3,
    name: 'IVPB - Push Booster',
    therapies: [
      {
        id: 3,
        name: 'Alpha-Lipoic Acid (ALA)',
      },
      {
        id: 17,
        name: 'Glutathione',
      },
      {
        id: 36,
        name: 'Toradol (Ketorolac)',
      },
      {
        id: 39,
        name: 'Zofran (Ondansetron)',
      },
    ],
  },

  {
    id: 4,
    name: 'IM - Injectable',
    therapies: [
      {
        id: 6,
        name: 'B12 (Hydroxocobolomin)',
      },
      {
        id: 7,
        name: 'Biotin',
      },
      {
        id: 13,
        name: 'CoQ10',
      },
      {
        id: 15,
        name: 'D - Vitamin',
      },
      {
        id: 17,
        name: 'Glutathione',
      },
      {
        id: 23,
        name: 'Lipo-C',
      },
      {
        id: 22,
        name: 'Lipo-B',
      },
      {
        id: 36,
        name: 'Toradol (Ketorolac)',
      },
      {
        id: 27,
        name: 'NAD+ Rejuvenate',
      },
      {
        id: 8,
        name: 'Bi-Amino Blend',
      },
      {
        id: 39,
        name: 'Zofran (Ondansetron)',
      },
    ],
  },

  {
    id: 5,
    name: 'SC - Injectable',
    therapies: [
      {
        id: 34,
        name: 'Semaglutide/Cyanocobalamin',
      },
    ],
  },

  {
    id: 6,
    name: 'Enhanced Therapies',
    therapies: [
      {
        id: 28,
        name: 'Ozone UV IV Infusion',
      },
      {
        id: 19,
        name: 'Hyperbarics',
      },
      {
        id: 29,
        name: 'PBM',
      },
      {
        id: 14,
        name: 'Cryotherapy',
      },
    ],
  },

  {
    id: 7,
    name: 'Elements',
    therapies: [
      {
        id: 3,
        name: 'Alpha-Lipoic Acid (ALA)',
      },
    ],
  },
]

const therapies = [
  {
    id: 1,
    name: '#I’ll never Drink Again',
    services: [],
    targets: [],
  },
  {
    id: 2,
    name: 'Alleviate',
    services: [],
    targets: [],
  },
  {
    id: 3,
    name: 'Alpha-Lipoic Acid (ALA)',
    services: [],
    targets: [],
  },
  {
    id: 4,
    name: 'Ascorbic Acid (Vitamin C)',
    services: [],
    targets: [],
  },
  {
    id: 5,
    name: 'Athletic Recovery',
    services: [],
    targets: [],
  },

  {
    id: 6,
    name: 'B12 (Hydroxocobolomin)',
    services: [],
    targets: [],
  },

  {
    id: 7,
    name: 'Beautify',
    services: [],
    targets: [],
  },
  {
    id: 8,
    name: 'Bi-Amino Blend',
    services: [],
    targets: [],
  },

  {
    id: 9,
    name: 'Biotin',
    services: [],
    targets: [],
  },

  {
    id: 10,
    name: 'Booster Bag',
    services: [],
    targets: [],
  },

  {
    id: 11,
    name: 'Brainpower',
    services: [],
    targets: [],
  },

  {
    id: 12,
    name: 'Build - A - Bag',
    services: [],
    targets: [],
  },

  {
    id: 13,
    name: 'CoQ10',
    services: [],
    targets: [],
  },

  {
    id: 14,
    name: 'Cryotherapy',
    services: [],
    targets: [],
  },

  {
    id: 15,
    name: 'D - Vitamin',
    services: [],
    targets: [],
  },

  {
    id: 16,
    name: 'Energize',
    services: [],
    targets: [],
  },
  {
    id: 17,
    name: 'Glutathione',
    services: [],
    targets: [],
  },

  {
    id: 18,
    name: 'High-C Infusion',
    services: [],
    targets: [],
  },

  {
    id: 19,
    name: 'Hyperbarics',
    services: [],
    targets: [],
  },

  {
    id: 20,
    name: 'Immunity',
    services: [],
    targets: [],
  },
  {
    id: 21,
    name: 'L-Taurine',
    services: [],
    targets: [],
  },
  {
    id: 22,
    name: 'Lipo-B',
    services: [],
    targets: [],
  },
  {
    id: 23,
    name: 'Lipo-C',
    services: [],
    targets: [],
  },
  {
    id: 24,
    name: 'Magnesium Chloride',
    services: [],
    targets: [],
  },
  {
    id: 25,
    name: 'Myers',
    services: [],
    targets: [],
  },
  {
    id: 26,
    name: 'Myers Pro',
    services: [],
    targets: [],
  },
  {
    id: 27,
    name: 'NAD+ Rejuvenate',
    services: [],
    targets: [],
  },
  {
    id: 28,
    name: 'Ozone UV IV Infusion',
    services: [],
    targets: [],
  },
  {
    id: 29,
    name: 'PBM',
    services: [],
    targets: [],
  },
  {
    id: 30,
    name: 'Pregame',
    services: [],
    targets: [],
  },

  {
    id: 31,
    name: 'Quick Slim',
    services: [],
    targets: [],
  },
  {
    id: 32,
    name: 'Quick Slim Pro',
    services: [],
    targets: [],
  },

  {
    id: 33,
    name: 'Rehydrate',
    services: [],
    targets: [],
  },

  {
    id: 34,
    name: 'Semaglutide/Cyanocobalamin',
    services: [],
    targets: [],
  },
  {
    id: 35,
    name: 'Supa Gluta',
    services: [],
    targets: [],
  },
  {
    id: 36,
    name: 'Toradol (Ketorolac)',
    services: [],
    targets: [],
  },
  {
    id: 37,
    name: 'Zen',
    services: [],
    targets: [],
  },
  {
    id: 38,
    name: 'Zinc Sulfate',
    services: [],
    targets: [],
  },
  {
    id: 39,
    name: 'Zofran (Ondansetron)',
    services: [],
    targets: [],
  },
]

const target_systems = [
  {
    id: 1,
    name: 'General Wellness',
    services: [],
    therapies: [],
  },
  {
    id: 2,
    name: 'Cognitive',
    services: [],
    therapies: [],
  },
  {
    id: 3,
    name: 'Antioxidant',
    services: [],
    therapies: [],
  },
  {
    id: 4,
    name: 'Pain Relief',
    services: [],
    therapies: [],
  },
  {
    id: 5,
    name: 'Athletic Performance',
    services: [],
    therapies: [],
  },
  {
    id: 6,
    name: 'Cosmetic',
    services: [],
    therapies: [],
  },
  {
    id: 7,
    name: 'Immunity',
    services: [],
    therapies: [],
  },
  {
    id: 8,
    name: 'Weight Loss',
    services: [],
    therapies: [],
  },
]

export default {
  services,
  therapies,
  target_systems,
}
