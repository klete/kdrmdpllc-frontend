import {
  calcium_gluconate_100_5,
  substrate_ringers,
  substrate_saline,
  alpha_lipoic_acid_25_5,
  biotin_10_1,
  glutathione_200_5,
  glutathione_200_10,
  copper_0__3_0__5,
  selenium_60_0__5,
  zinc_3_0__5,
  manganese_55_0__5,
  arginine_100_5,
  citrulline_100_5,
  zinc_3_1,
  manganese_55_1,
  copper_0__3_1,
  selenium_60_1,
  vitamin_b_12_2_1,
  lysine_100_2__5,
  l_taurine_50_1,
  l_taurine_50_5,
  l_taurine_50_10,
  magnesium_chloride_300_4,
  magnesium_chloride_300_2,
  glycine_50_5,
  glycine_50_10,
  hydroxocobalamin_2_0__5,
  hydroxocobalamin_2_1,
  basic_b_vitamin_set,
  vitamin_c_100_5,
  vitamin_c_500_20,
  vitamin_c_500_100,
  vitamin_c_500_25,
  vitamin_c_500_1,
  vitamin_c_500_10,
  zinc_sulfate_10_1,
} from './therapy_elements.mjs'

const therapies = [
  {
    id: 1,
    name: 'Alleviate',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request Alleviate infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Alleviate is formulated for patients that want to avoid, reduce, or wipe out menstrual cramps, gastric discomfort, and help with general GI health. ',
    focus: ['menstrual cramps', 'gastric discomfort', 'general GI health'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '30 minutes',
      maximum: '45 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      calcium_gluconate_100_5,
      magnesium_chloride_300_4,
      ...basic_b_vitamin_set,
      vitamin_b_12_2_1,
    ],
  },

  {
    id: 2,
    name: 'Athletic Recovery',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Athletic Recovery infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Athletic Recovery is packed full of everything! Designed for athletes to replenish everything their body needs after a great workout or to pack full before you go to competition, Recovery will do it! ',
    focus: ['General Replenishment'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      vitamin_c_100_5,
      ...basic_b_vitamin_set,
      arginine_100_5,
      citrulline_100_5,
      glycine_50_10,
      lysine_100_2__5,
      zinc_3_0__5,
      manganese_55_0__5,
      copper_0__3_0__5,
      selenium_60_0__5,
    ],
  },

  {
    id: 3,
    name: 'Beautify',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Beautify infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'The Beautify infusion focuses on promoting the health of your skin, hair, and nails. This is especially helpful for patients who want the ultimate improvement in how they look and feel. ',
    focus: ['Skin health', 'Hair health', 'Nail health'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [
      ['', vitamin_c_500_20],
      ['', biotin_10_1],
      ['SIVP', glutathione_200_5],
    ],
  },

  {
    id: 4,
    name: 'Build - A - Bag',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Build-A-Bag infusion without contraindication ',
    contraindications: '',
    cautions: [],
    description:
      'Build-A-Bag status has a huge impact on the body’s function. Even mild dehydration can reduce the body’s function by 3%. Ensuring good hydration helps keep your body functioning at optimal levels and helps protect your kidney function. ',
    focus: ['Rehydration'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [],
  },

  {
    id: 5,
    name: 'Brainpower',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Brainstorm infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Brainpower was created to enhance daily cognition to help enhance everything from day-to-day tasks to higher level cognitive functions.',
    focus: ['Cognitive function'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [hydroxocobalamin_2_1, l_taurine_50_5, alpha_lipoic_acid_25_5],
  },

  {
    id: 6,
    name: 'Energize',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request Energize infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Need that boost to keep you going? The Energize infusion helps give you the boost of energy that you need to live life at the fullest, help burn fat, and stay healthy. ',
    focus: ['General energy', 'Fat burn'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      ...basic_b_vitamin_set,
      arginine_100_5,
      citrulline_100_5,
      glycine_50_10,
      lysine_100_2__5,
      l_taurine_50_5,
    ],
  },

  {
    id: 7,
    name: 'High-C Infusion',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request high dose Vitamin C infusion without contraindication. ',
    contraindications: '',
    cautions: ['High C infusion CANNOT receive any other Vitamin C'],
    description:
      "Vitamin C is necessary for the growth, development, and repair of all body tissues. It's involved in many body functions, including formation of collagen, absorption of iron, the immune system, wound healing, and the maintenance of cartilage, bones, and teeth. It can also aid the acutely ill by giving vitality to leukocytes. Also is a powerful antioxidant and energy booster. ",
    focus: [
      'Tissue repair',
      'Wound healing',
      'Maintenance of cartilage',
      'Maintenance of bones',
      'Maintenance of teeth',
    ],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_saline,
    elements: [vitamin_c_500_100],
  },

  {
    id: 8,
    name: '#I’ll Never Drink Again',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the “I’ll Never Drink Again” infusion without contraindication.',
    contraindications: '',
    cautions: [],
    description:
      "“I’ll Never Drink Again” is the quintessential hangover formula that will rejuvenate anyone's last night experience. ",
    focus: ['Hangover'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      ...basic_b_vitamin_set,
      zinc_3_1,
      manganese_55_1,
      copper_0__3_1,
      selenium_60_1,
      l_taurine_50_5,
      magnesium_chloride_300_2,
    ],
  },

  {
    id: 9,
    name: 'Immunity',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Immunity infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Immune support is excellent for anyone who wants to prevent illnesses such as the cold and flu, but also to help with recovery time if you do catch the cold or flu.',
    focus: ['Immunity'],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '30 minutes',
      maximum: '45 minutes',
    },
    substrate: substrate_ringers,
    elements: [vitamin_c_500_25, ...basic_b_vitamin_set, zinc_sulfate_10_1],
  },

  {
    id: 10,
    name: 'Myers',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [...basic_b_vitamin_set],
  },

  {
    id: 11,
    name: 'Myers Pro',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [...basic_b_vitamin_set],
  },

  {
    id: 12,
    name: 'NAD+ Rejuvenate',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request the NAD+ Rejuvenate without contraindication.',
    contraindications: 'Pregnancy and Breastfeeding',
    recommendations:
      'Frequency: Clinical recommended loading dose for NAD IM is to administer 100 mg once daily for 5 days in a row. After this series is completed, it is recommended that patients receive ongoing injections once weekly to maintain NAD levels in your system',
    cautions: [
      'Anxiety/Panic Attacks',
      'Max Total Dose: Max total dosing includes all IV administration',
      '100 mg IM daily',
    ],
    description: '',
    focus: [],
    frequency: {
      loading: '1 day for 5 days',
      maintenance: '5-7 days',
    },
    source: 'Empower',
    infusion: {
      initial: '120 minutes per 250 mg',
      minimum: null,
      maximum: null,
    },
    substrate: substrate_saline,
    elements: [
      {
        id: 0,
        name: 'loading',
        amount: 100,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 1,
        volume_infused_units: 'mL',
        amount_element_infused: 100,
        element_infused_units: 'mg',
      },
      {
        id: 0,
        name: 'maintenance',
        amount: 100,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 1,
        volume_infused_units: 'mL',
        amount_element_infused: 100,
        element_infused_units: 'mg',
      },
    ],
  },

  {
    id: 13,
    name: 'Pregame',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [...basic_b_vitamin_set],
  },

  {
    id: 14,
    name: 'Rehydrate',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [...basic_b_vitamin_set],
  },

  {
    id: 15,
    name: 'Quick Slim',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [...basic_b_vitamin_set],
  },

  {
    id: 16,
    name: 'Quick Slim Pro',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    elements: [...basic_b_vitamin_set],
  },

  {
    id: 17,
    name: 'Supa Gluta',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request this IV infusion without contraindication',
    contraindications: ['Pregnancy', 'Brest Feeding '],
    cautions: ['NO Boosts may be mixed in the bag with Supa Gluta'],
    description:
      'Potent antioxidant with the ability to boost immunity and energy along with aiding in the decrease of symptoms in many pulmonology, cardiac, and nervous system disorders ',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [glutathione_200_10],
  },

  {
    id: 18,
    name: 'Zen',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Zen infusion without contraindication',
    contraindications: '',
    cautions: [],
    description:
      "Can help support the body's ability to decrease anxiety and increase ability to relax ",
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      vitamin_c_500_1,
      ...basic_b_vitamin_set,
      zinc_sulfate_10_1,
      hydroxocobalamin_2_1,
      l_taurine_50_1,
      magnesium_chloride_300_4,
      glycine_50_5,
    ],
  },

  {
    id: 19,
    name: 'Ascorbic Acid (Vitamin C)',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications:
      'Patients that request the IV infusion boost without contraindication ',
    contraindications: 'G6PD Deficiency',
    cautions: [
      'Patients with renal stone history',
      'Max Total Dose: Max total dosing includes all IV administration',
      '20 mL (10,000mg) max for any boost. High C infusion is separate from this max',
    ],
    description:
      "Vitamin C is necessary for the growth, development, and repair of all body tissues. It's involved in many body functions, including formation of collagen, absorption of iron, the immune system, wound healing, and the maintenance of cartilage, bones, and teeth. It can also aid the acutely ill by giving vitality to leukocytes. Also is a powerful antioxidant and energy booster. ",
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      ['Single Boost', vitamin_c_500_10],
      ['Double Boost', vitamin_c_500_20],
    ],
  },

  {
    id: 20,
    name: 'B12 (Hydroxocobolomin)',

    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },

    indications:
      'Patients that request the IV infusion boost without contraindication. ',
    contraindications: '',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
    ],
    description:
      'Reverses B12 deficiency and macrocytic anemia related to B12 deficiency. It helps to increase energy along with the ability to augment metabolism in weight management. ',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: '30 minutes',
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [['Single Boost', hydroxocobalamin_2_0__5]],
  },

  {
    id: 21,
    name: 'Biotin',

    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },

    indications:
      'Patients that request the IV infusion boost without contraindication.',
    contraindications: '',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration ',
    ],
    description:
      'Helps in growth and regeneration of hair, nails, and skin. Also aids in breaking down fats and carbohydrates ',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [['Single Boost', biotin_10_1]],
  },

  {
    id: 22,
    name: 'Booster Bag',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications:
      'Hydration boosters are for those patients who want an extra bag of Lactated Ringers solution after having a Nutraceutical infusion ',
    contraindications: '',
    cautions: [],
    description:
      "This is intended to aid in the patient's overall hydration status. Gives the ability to boost energy through replenishment of isotonic fluids ",
    focus: [],
    frequency: {
      maximum: '2 liters per day, 5 liters per 5 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [],
  },

  {
    id: 23,
    name: 'L-Taurine',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications:
      'Patients that request the IV infusion boost without contraindication.',
    contraindications: '',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration ',
      'Max total dose: 500 mg',
    ],
    description:
      'L-Taurine is an antioxidant that also helps to stabilize cell membranes. It is essential for cardiovascular, skeletal muscle recovery, retinal, and central nervous system development, and function.',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    elements: [
      ['Single Boost', l_taurine_50_5],
      ['Double Boost', l_taurine_50_10],
    ],
  },

  {
    id: 24,
    name: 'Magnesium Chloride',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 25,
    name: 'Bi-Amino Blend',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 26,
    name: 'Zinc Sulfate',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 27,
    name: 'Alpha-Lipoic Acid (ALA)',
    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },
    indications:
      'Patients that request the IV infusion boost without contraindication ',
    contraindications: 'Thyroid Disorder with patients on Thyroid medication ',
    cautions: [
      'Diabetic Patients',
      'History of Hypoglycemia',
      'Max Total Dose: Max total dosing includes all Slow IV Push (SIVP 10-20 seconds)',
    ],
    description:
      'ALA is an antioxidant that helps with overall detoxification. In addition, ALA also helps to improve metabolic function, promotes weight loss, can help with nerve pain, and can help with blood sugar control.',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: '30 minutes',
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [alpha_lipoic_acid_25_5],
  },

  {
    id: 28,
    name: 'Glutathione',
    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 29,
    name: 'Toradol (Ketorolac)',

    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 30,
    name: 'Zofran (Ondansetron)',

    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 31,
    name: 'B12 (Hydroxocobolomin)',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 32,
    name: 'Biotin',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 33,
    name: 'CoQ10',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 34,
    name: 'D - Vitamin',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 35,
    name: 'Glutathione',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 36,
    name: 'Lipo-C',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 37,
    name: 'Lipo-B',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 38,
    name: 'Toradol (Ketorolac)',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 39,
    name: 'NAD+ Rejuvenate',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request the NAD+ Rejuvenate without contraindication.',
    contraindications: 'Pregnancy and Breastfeeding',
    recommendations:
      'Frequency: Clinical recommended loading dose for NAD IM is to administer 100 mg once daily for 5 days in a row. After this series is completed, it is recommended that patients receive ongoing injections once weekly to maintain NAD levels in your system',
    cautions: [
      'Anxiety/Panic Attacks',
      'Max Total Dose: Max total dosing includes all IV administration',
      '100 mg IM daily',
    ],
    description: '',
    focus: [],
    frequency: {
      loading: '1 day for 5 days',
      maintenance: '5-7 days',
    },
    source: 'Empower',
    infusion: {
      initial: '120 minutes per 250 mg',
      minimum: null,
      maximum: null,
    },
    substrate: substrate_saline,
    elements: [
      {
        id: 0,
        name: 'loading',
        amount: 100,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 1,
        volume_infused_units: 'mL',
        amount_element_infused: 100,
        element_infused_units: 'mg',
      },
      {
        id: 0,
        name: 'maintenance',
        amount: 100,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 1,
        volume_infused_units: 'mL',
        amount_element_infused: 100,
        element_infused_units: 'mg',
      },
    ],
  },

  {
    id: 40,
    name: 'Bi-Amino Blend',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 41,
    name: 'Zofran (Ondansetron)',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },

  {
    id: 42,
    name: 'Semaglutide/Cyanocobalamin',

    category: {
      id: 5,
      name: 'SC - Injectable',
    },

    indications: '',
    contraindications: '',
    cautions: [],
    description: '',
    focus: [],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    elements: [],
  },
]

export default {
  therapies,
}
