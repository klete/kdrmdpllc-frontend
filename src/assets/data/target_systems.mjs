const target_systems = [
  {
    id: 1,
    name: 'General Wellness',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 1,
            name: 'Alleviate',
          },
          {
            id: 4,
            name: 'Build - A - Bag',
          },
          {
            id: 6,
            name: 'Energize',
          },
          {
            id: 8,
            name: '#I’ll never Drink Again',
          },
          {
            id: 10,
            name: 'Myers',
          },
          {
            id: 11,
            name: 'Myers Pro',
          },
          {
            id: 12,
            name: 'NAD+ Rejuvenate',
          },
          {
            id: 14,
            name: 'Rehydrate',
          },
          {
            id: 17,
            name: 'Supa Gluta',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 20,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 22,
            name: 'Booster Bag',
          },
          {
            id: 23,
            name: 'L-Taurine',
          },
          {
            id: 24,
            name: 'Magnesium Chloride',
          },
          {
            id: 25,
            name: 'Bi-Amino Blend',
          },
          {
            id: 26,
            name: 'Zinc Sulfate',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 27,
            name: 'Alpha-Lipoic Acid (ALA)',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 31,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 36,
            name: 'Lipo-C',
          },
          {
            id: 37,
            name: 'Lipo-B',
          },
          {
            id: 39,
            name: 'NAD+ Rejuvenate',
          },
          {
            id: 40,
            name: 'Bi-Amino Blend',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Cognitive',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 5,
            name: 'Brainpower',
          },
          {
            id: 18,
            name: 'Zen',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 25,
            name: 'Bi-Amino Blend',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 40,
            name: 'Bi-Amino Blend',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Antioxidant',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 7,
            name: 'High-C Infusion',
          },
          {
            id: 9,
            name: 'Immunity',
          },
          {
            id: 13,
            name: 'Pregame',
          },
          {
            id: 14,
            name: 'Rehydrate',
          },
          {
            id: 16,
            name: 'Quick Slim Pro',
          },
          {
            id: 17,
            name: 'Supa Gluta',
          },
          {
            id: 18,
            name: 'Zen',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 19,
            name: 'Ascorbic Acid (Vitamin C)',
          },
          {
            id: 23,
            name: 'L-Taurine',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 28,
            name: 'Glutathione',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 33,
            name: 'CoQ10',
          },
          {
            id: 35,
            name: 'Glutathione',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 4,
    name: 'Pain Relief',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 1,
            name: 'Alleviate',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 27,
            name: 'Alpha-Lipoic Acid (ALA)',
          },
          {
            id: 29,
            name: 'Toradol (Ketorolac)',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 38,
            name: 'Toradol (Ketorolac)',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 5,
    name: 'Athletic Performance',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 2,
            name: 'Athletic Recovery',
          },
          {
            id: 6,
            name: 'Energize',
          },
          {
            id: 13,
            name: 'Pregame',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 20,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 25,
            name: 'Bi-Amino Blend',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 31,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 40,
            name: 'Bi-Amino Blend',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 6,
    name: 'Cosmetic',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 3,
            name: 'Beautify',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 21,
            name: 'Biotin',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 28,
            name: 'Glutathione',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 32,
            name: 'Biotin',
          },
          {
            id: 35,
            name: 'Glutathione',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 7,
    name: 'Immunity',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 7,
            name: 'High-C Infusion',
          },
          {
            id: 9,
            name: 'Immunity',
          },
          {
            id: 17,
            name: 'Supa Gluta',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 19,
            name: 'Ascorbic Acid (Vitamin C)',
          },
          {
            id: 23,
            name: 'L-Taurine',
          },
          {
            id: 26,
            name: 'Zinc Sulfate',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [],
      },
    ],
  },
  {
    id: 8,
    name: 'Weight Loss',
    services: [
      {
        id: 1,
        name: 'IVI - Infusion',
        therapies: [
          {
            id: 15,
            name: 'Quick Slim',
          },
          {
            id: 16,
            name: 'Quick Slim Pro',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 20,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 21,
            name: 'Biotin',
          },
          {
            id: 26,
            name: 'Zinc Sulfate',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 27,
            name: 'Alpha-Lipoic Acid (ALA)',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 31,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 36,
            name: 'Lipo-C',
          },
          {
            id: 37,
            name: 'Lipo-B',
          },
        ],
      },
      {
        id: 5,
        name: 'SC - Injectable',
        therapies: [
          {
            id: 41,
            name: 'Semaglutide/Cyanocobalamin',
          },
        ],
      },
    ],
  },
]

export default {
  target_systems,
}
