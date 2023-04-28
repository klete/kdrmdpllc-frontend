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
            id: 2,
            name: 'Alleviate',
          },
          {
            id: 12,
            name: 'Build - A - Bag',
          },
          {
            id: 16,
            name: 'Energize',
          },
          {
            id: 1,
            name: '#I’ll never Drink Again',
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
            id: 33,
            name: 'Rehydrate',
          },
          {
            id: 35,
            name: 'Supa Gluta',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 6,
            name: 'B12 (Hydroxocobolomin)',
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
            id: 23,
            name: 'Lipo-C',
          },
          {
            id: 22,
            name: 'Lipo-B',
          },
          {
            id: 27,
            name: 'NAD+ Rejuvenate',
          },
          {
            id: 8,
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
            id: 11,
            name: 'Brainpower',
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
            id: 8,
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
            id: 8,
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
            id: 18,
            name: 'High-C Infusion',
          },
          {
            id: 20,
            name: 'Immunity',
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
            id: 21,
            name: 'L-Taurine',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 17,
            name: 'Glutathione',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 13,
            name: 'CoQ10',
          },
          {
            id: 17,
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
            id: 2,
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
            id: 3,
            name: 'Alpha-Lipoic Acid (ALA)',
          },
          {
            id: 36,
            name: 'Toradol (Ketorolac)',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 36,
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
            id: 5,
            name: 'Athletic Recovery',
          },
          {
            id: 16,
            name: 'Energize',
          },
          {
            id: 30,
            name: 'Pregame',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 6,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 8,
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
            id: 6,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 8,
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
            id: 7,
            name: 'Beautify',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 40,
            name: 'Biotin',
          },
        ],
      },
      {
        id: 3,
        name: 'IVPB - Push Booster',
        therapies: [
          {
            id: 17,
            name: 'Glutathione',
          },
        ],
      },
      {
        id: 4,
        name: 'IM - Injectable',
        therapies: [
          {
            id: 40,
            name: 'Biotin',
          },
          {
            id: 17,
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
            id: 18,
            name: 'High-C Infusion',
          },
          {
            id: 20,
            name: 'Immunity',
          },
          {
            id: 35,
            name: 'Supa Gluta',
          },
          {
            id: 4,
            name: 'Ascorbic Acid (Vitamin C)',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 21,
            name: 'L-Taurine',
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
            id: 31,
            name: 'Quick Slim',
          },
          {
            id: 32,
            name: 'Quick Slim Pro',
          },
        ],
      },
      {
        id: 2,
        name: 'IVB - Infusion Booster',
        therapies: [
          {
            id: 6,
            name: 'B12 (Hydroxocobolomin)',
          },
          {
            id: 40,
            name: 'Biotin',
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
            id: 23,
            name: 'Lipo-C',
          },
          {
            id: 22,
            name: 'Lipo-B',
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
    ],
  },
]

export default {
  target_systems,
}
