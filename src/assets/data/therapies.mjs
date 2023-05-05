import {
  l_carnitine_500_2,
  vitamin_b_1_100_1,
  vitamin_b_3_100_1,
  vitamin_b_2_2_1,
  vitamin_b_5_2_1,
  vitamin_b_6_2_1,
  vitamin_b_12_2_1,
  basic_b_vitamin_set,
  magnesium_chloride_300_0__5,
  magnesium_chloride_300_1,
  magnesium_chloride_300_4,
  magnesium_chloride_300_2,
  calcium_gluconate_100_1,
  cyanocobalamin_50_1,
  methionine_15_1,
  choline_50_1,
  l_carnitine_50_1,
  thiamine_15_1,
  dexpanthenol_5_1,
  vitamin_d_1000000_0__5,
  coq10_20_3,
  zofran_2_2,
  toradol_15_1,
  calcium_gluconate_100_5,
  substrate_ringers,
  substrate_saline,
  alpha_lipoic_acid_25_5,
  biotin_10_1,
  glutathione_200_2__5,
  glutathione_200_1,
  glutathione_200_5,
  glutathione_200_10,
  copper_0__3_0__5,
  selenium_60_0__5,
  zinc_3_0__5,
  manganese_55_0__5,
  arginine_100_5,
  citrulline_100_5,
  arginine_100_1,
  citrulline_100_1,
  arginine_100_2,
  citrulline_100_2,
  zinc_3_1,
  manganese_55_1,
  copper_0__3_1,
  selenium_60_1,
  lysine_100_2__5,
  l_taurine_50_1,
  l_taurine_50_5,
  l_taurine_50_10,
  glycine_50_5,
  glycine_50_10,
  hydroxocobalamin_2_0__5,
  hydroxocobalamin_2_1,
  vitamin_c_100_5,
  vitamin_c_500_20,
  vitamin_c_500_100,
  vitamin_c_500_25,
  vitamin_c_500_1,
  vitamin_c_500_5,
  vitamin_c_500_10,
  zinc_sulfate_10_0__5,
  zinc_sulfate_10_1,
  bi_amino_blend_1,
  bi_amino_blend_2,
} from './therapy_elements.mjs'

import {
  vitamin_b_complex,
  bi_amino_blend,
  tralement_blend,
  lipo_c,
  lipo_b,
} from './packages.mjs'

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
    // elements: [
    //   calcium_gluconate_100_5,
    //   magnesium_chloride_300_4,
    //   'Vitamin B Complex',
    //   ...basic_b_vitamin_set,
    //   vitamin_b_12_2_1,
    // ],
    packages: [
      calcium_gluconate_100_5,
      magnesium_chloride_300_4,
      vitamin_b_complex,
      hydroxocobalamin_2_1,
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
    // elements: [
    //   vitamin_c_100_5,
    //   'Vitamin B Complex',
    //   ...basic_b_vitamin_set,
    //   'Bi-Amino Blend',
    //   arginine_100_5,
    //   citrulline_100_5,
    //   '',
    //   glycine_50_10,
    //   lysine_100_2__5,
    //   'Tralement Blend',
    //   zinc_3_0__5,
    //   manganese_55_0__5,
    //   copper_0__3_0__5,
    //   selenium_60_0__5,
    // ],
    packages: [
      vitamin_c_100_5,
      vitamin_b_complex,
      bi_amino_blend,
      glycine_50_10,
      lysine_100_2__5,
      tralement_blend,
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
    // elements: [
    //   ['', vitamin_c_500_20],
    //   ['', biotin_10_1],
    //   ['SIVP', glutathione_200_5],
    // ],
    packages: [
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
    packages: [],
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
    // elements: [hydroxocobalamin_2_1, l_taurine_50_5, alpha_lipoic_acid_25_5],
    packages: [
      hydroxocobalamin_2_1,
      l_taurine_50_5,
      ['SIVP', alpha_lipoic_acid_25_5],
    ],
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
    // elements: [
    //   ...basic_b_vitamin_set,
    //   arginine_100_5,
    //   citrulline_100_5,
    //   glycine_50_10,
    //   lysine_100_2__5,
    //   l_taurine_50_5,
    // ],
    packages: [
      vitamin_b_complex,
      bi_amino_blend,
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
    // elements: [vitamin_c_500_100],
    packages: [vitamin_c_500_100],
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
    // elements: [
    //   ...basic_b_vitamin_set,
    //   zinc_3_1,
    //   manganese_55_1,
    //   copper_0__3_1,
    //   selenium_60_1,
    //   l_taurine_50_5,
    //   magnesium_chloride_300_2,
    // ],
    packages: [
      vitamin_b_complex,
      tralement_blend,
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
    // elements: [vitamin_c_500_25, ...basic_b_vitamin_set, zinc_sulfate_10_1],
    packages: [vitamin_c_500_25, vitamin_b_complex, zinc_sulfate_10_1],
  },

  {
    id: 10,
    name: 'Myers',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Myer’s Cocktail infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Myer’s Cocktail is great for the overall health and wellbeing of the guest. Specifically, Myer’s Cocktail has been shown to help with headaches, muscle cramps, boost energy levels, allergies, depression, cold and flu, and much more! ',
    focus: [
      'General health',
      'Headaches',
      'Muscle cramps',
      'Energy boost',
      'Allergies',
      'Depression',
      'Cold & Flu',
    ],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    // elements: [
    //   ...basic_b_vitamin_set,
    //   magnesium_chloride_300_0__5,
    //   hydroxocobalamin_2_0__5,
    //   calcium_gluconate_100_1,
    //   vitamin_c_500_1,
    // ],
    packages: [
      vitamin_b_complex,
      magnesium_chloride_300_0__5,
      hydroxocobalamin_2_0__5,
      calcium_gluconate_100_1,
      vitamin_c_500_1,
    ],
    resources: [
      'https://wellnesspharmacy.com/wp-content/uploads/2015/01/myers_cocktail.pdf',
    ],
  },

  {
    id: 11,
    name: 'Myers Pro',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the Myer’s Pro Cocktail infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description:
      'Myer’s Pro Cocktail is great for the overall health and wellbeing of the guest. Specifically, Myer’s Pro Cocktail has been shown to help with headaches, muscle cramps, boost energy levels, allergies, depression, cold and flu, and much more! ',
    focus: [
      'General health',
      'Headaches',
      'Muscle cramps',
      'Energy boost',
      'Allergies',
      'Depression',
      'Cold & Flu',
    ],
    frequency: null,
    source: 'Empower',
    infusion: {
      minimum: '25 minutes',
      maximum: '30 minutes',
    },
    substrate: substrate_ringers,
    // elements: [
    //   ...basic_b_vitamin_set,
    //   magnesium_chloride_300_0__5,
    //   hydroxocobalamin_2_0__5,
    //   calcium_gluconate_100_1,
    //   vitamin_c_500_1,
    //   zinc_sulfate_10_1,
    //   l_taurine_50_5,
    // ],
    packages: [
      vitamin_b_complex,
      magnesium_chloride_300_0__5,
      hydroxocobalamin_2_0__5,
      calcium_gluconate_100_1,
      vitamin_c_500_1,
      zinc_sulfate_10_1,
      l_taurine_50_5,
    ],
  },

  {
    id: 12,
    name: 'NAD+ Rejuvenate',
    category: {
      id: 1,
      name: 'IVI - Infusion',
    },
    indications:
      'Patients that request the NAD+ Rejuvenate without contraindication.',
    contraindications: '',
    recommendations: [
      `There are two general administration recommendations for maximum benefits. 
      First is to have a one-time infusion course that is between 4 to 5 days consecutively
      utilizing below dosages followed by maintenance infusions thereafter.`,
      `The second is to have weekly infusions with the same above doses for 5 weeks in a row followed by a rest phase.`,
      `<span class="caution">Initial consultation must be completed before ordering the patient specific nutraceutical.</span>`,
      `<span class="caution">It is suggested that on that day they receive a Myers or “like” infusion to optimize the guest's nutritional
      status before NAD is administered to achieve max benefits.</span>`,
      `<span class="caution">It is also recommended that Glutathione 500 mg be given 5-10 min before each NAD infusion.</span>`,
      `Maintenance for any patient that received NAD in the last 12 months will be person dependent based on body habitus, lifestyle, and history of NAD use in the past.`,
      `If one of the loading phases is completed, general recommendation of NAD use thereafter should be administered
      no more than once a week.`,
      `People can feel differences with as little as one infusion. `,
    ],
    cautions: '',
    description: '',
    focus: [],
    frequency: {
      maximum: '7 days',
    },
    source: 'Empower',
    infusion: {
      initial: '120 minutes per 250 mg',
      minimum: null,
      maximum: null,
    },
    substrate: substrate_saline,
    packages: [
      {
        id: 0,
        name: 'beginner',
        amount: 250,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 1,
        volume_infused_units: 'mL',
        amount_element_infused: 250,
        element_infused_units: 'mg',
      },
      {
        id: 0,
        name: 'standard',
        amount: 250,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 2,
        volume_infused_units: 'mL',
        amount_element_infused: 500,
        element_infused_units: 'mg',
      },
      {
        id: 0,
        name: 'premium',
        amount: 250,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 3,
        volume_infused_units: 'mL',
        amount_element_infused: 750,
        element_infused_units: 'mg',
      },
      {
        id: 0,
        name: 'elite',
        amount: 250,
        elemental_units_per: 'mg',
        volume_units: 'mL',
        volume_infused: 4,
        volume_infused_units: 'mL',
        amount_element_infused: 1000,
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
    indications:
      'Patients that request the Pregame infusion without contraindication. ',
    contraindications: '',
    cautions: [],
    description: '',
    focus: ['Athletic Performance', 'Athletic Recovery '],
    frequency: {
      maximum: '3 days',
    },
    source: 'Empower',
    infusion: {
      minimum: null,
      maximum: null,
    },
    substrate: substrate_ringers,
    // elements: [
    //   ['', vitamin_c_500_1],
    //   'Vitamin B Complex',
    //   ['', vitamin_b_1_100_1],
    //   ['', vitamin_b_3_100_1],
    //   ['', vitamin_b_2_2_1],
    //   ['', vitamin_b_5_2_1],
    //   ['', vitamin_b_6_2_1],
    //   ['', zinc_sulfate_10_1],
    //   ['', hydroxocobalamin_2_1],
    //   ['', l_taurine_50_1],
    //   ['', magnesium_chloride_300_1],
    //   ['', arginine_100_1],
    //   ['', citrulline_100_1],
    //   ['', calcium_gluconate_100_1],
    //   ['SIVP', glutathione_200_1],
    // ],
    packages: [
      vitamin_c_500_1,
      vitamin_b_complex,
      zinc_sulfate_10_1,
      hydroxocobalamin_2_1,
      l_taurine_50_1,
      magnesium_chloride_300_1,
      bi_amino_blend,
      calcium_gluconate_100_1,
      ['SIVP', glutathione_200_1],
    ],
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
    // elements: [...basic_b_vitamin_set],
    packages: [
      vitamin_c_500_5,
      vitamin_b_complex,
      tralement_blend,
      magnesium_chloride_300_2,
    ],
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
    packages: [
      biotin_10_1,
      vitamin_b_complex,
      hydroxocobalamin_2_1,
      l_taurine_50_5,
      bi_amino_blend,
      glycine_50_10,
      lysine_100_2__5,
      ['SIVP', alpha_lipoic_acid_25_5],
    ],
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
    packages: [
      biotin_10_1,
      vitamin_b_complex,
      hydroxocobalamin_2_1,
      l_taurine_50_5,
      bi_amino_blend,
      glycine_50_10,
      lysine_100_2__5,
      l_carnitine_500_2,
      ['SIVP', glutathione_200_2__5],
      ['SIVP', alpha_lipoic_acid_25_5],
    ],
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
    packages: [glutathione_200_10],
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
    // elements: [
    //   vitamin_c_500_1,
    //   ...basic_b_vitamin_set,
    //   zinc_sulfate_10_1,
    //   hydroxocobalamin_2_1,
    //   l_taurine_50_1,
    //   magnesium_chloride_300_4,
    //   glycine_50_5,
    // ],
    packages: [
      vitamin_c_500_1,
      vitamin_b_complex,
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
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    packages: [
      ['Single Boost', vitamin_c_500_10],
      ['Double Boost', vitamin_c_500_20],
    ],
    resources: [
      'pubmed.ncbi.nlm.nih.gov/29567393/',
      'www.sciencedirect.com/topics/medicine-and-dentistry/ascorbic-acid-metabolism',
      'pubchem.ncbi.nlm.nih.gov/compound/ascorbic-acid#section=DSSTox-Substance-ID',
      'pubchem.ncbi.nlm.nih.gov/source/hsdb/818#section=Metabolism-Pharmacokinetics',
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
    packages: [['Single Boost', hydroxocobalamin_2_0__5]],
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
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    packages: [['Single Boost', biotin_10_1]],
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
    packages: [],
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
    substrate: {
      name: null,
      amount: null,
      units: null,
    },
    packages: [
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
    indications:
      'Patients that request the IV infusion without contraindication ',
    contraindications: [
      'Patients on Digitalis',
      'Cardiovascular Disease',
      'Individuals already taking daily magnesium supplement',
    ],
    cautions: [
      '3 mL (900mg).',
      'This is separate from the Alleviate infusion',
      'MAX Total Dose:  in any infusion is 1,200 mg',
    ],
    description:
      'This is an electrolyte that is essential for muscle function. Magnesium helps with smooth muscle relaxation including blood vessels and bronchi. ',
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
    packages: [
      ['Single boost', magnesium_chloride_300_2],
      ['Double boost', magnesium_chloride_300_4],
    ],
  },

  {
    id: 25,
    name: 'Bi-Amino Blend',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications:
      'Patients that request the IV infusion boost without contraindication ',
    contraindications: 'Renal Disease',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      'Athletic Recovery, Energize, and Quick Slim Pro are the ONLY infusions that have 5 mL (500/500mg).',
      'Independent from this infusion, the maximum allowed boost is 2 mL.',
    ],
    description:
      'Helps to decrease acute and chronic liver disease. It is also used for many other conditions and can be used to improve athletic performance, prevent fatigue, improve concentration, and reduce muscle breakdown during intense exercise ',
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
    packages: [
      ['Single Boost', bi_amino_blend_1],
      ['', arginine_100_1],
      ['', citrulline_100_1],
      ['Double Boost', bi_amino_blend_2],
      ['', arginine_100_2],
      ['', citrulline_100_2],
    ],
  },

  {
    id: 26,
    name: 'Zinc Sulfate',
    category: {
      id: 2,
      name: 'IVB - Infusion Booster',
    },
    indications:
      'Patients that request the IV infusion boost without contraindication ',
    contraindications: '',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      '1 mL (10 mg)',
    ],
    description:
      "It is needed for the body's defensive (immune) system to properly work. It plays a role in cell division, cell growth, wound healing, and the breakdown of carbohydrates.",
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
    packages: [
      ['Single Boost', zinc_sulfate_10_0__5],
      ['Double Boost', zinc_sulfate_10_1],
    ],
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
    packages: [alpha_lipoic_acid_25_5],
    resources: [
      'www.mskcc.org/cancer-care/integrative-medicine/herbs/alpha-lipoic-acid',
      'www.mountsinai.org/health-library/supplement/alpha-lipoic-acid',
      'www.ncbi.nlm.nih.gov/books/NBK564301/',
      'lpi.oregonstate.edu/mic/dietary-factors/lipoic-acid',
    ],
  },

  {
    id: 28,
    name: 'Glutathione',
    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },
    indications:
      'Patients that request this IV infusion boost without contraindication ',
    contraindications: ['Pregnancy', 'Breast Feeding'],
    cautions: [
      'Max Total Dose: Max total dosing includes all Slow IV Push (SIVP 10-20 seconds) ',
    ],
    description:
      'Potent antioxidant with the ability to boost immunity and energy along with aiding in the decrease of symptoms in many pulmonology, cardiac, and nervous system disorders ',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    packages: [
      ['Single Boost: SIVP', glutathione_200_2__5],
      ['Double Boost: SIVP', glutathione_200_5],
    ],
    resources: [
      'pubchem.ncbi.nlm.nih.gov/compound/124886',
      'medlineplus.gov/genetics/condition/glutathione-synthetase-deficiency/',
    ],
  },
  {
    id: 29,
    name: 'Toradol (Ketorolac)',

    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },
    indications:
      'Patients that request the IV infusion without contraindication ',
    contraindications: [
      'Contraindications:	Allergy to the medication',
      'Pregnancy',
      'Gastric Ulcers',
      'Severe Gastritis',
      'Renal Dysfunction',
    ],
    cautions: [
      'Significant Cardiac Disease',
      'Blood thinners or other anti platelet medications',
      'Max Total Dose: Max total dosing includes all Slow IV Push (SIVP 10-20 seconds)',
    ],
    description:
      'This is an NSAID based medication that helps aid in a wide array of general muscle pain or arthritic pain. Also, can be utilized as a migraine/Headache abortive ',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    packages: [['Single Boost SIVP', toradol_15_1]],
  },

  {
    id: 30,
    name: 'Zofran (Ondansetron)',

    category: {
      id: 3,
      name: 'IVPB - Push Booster',
    },

    indications:
      'Patients that request the IV injection without contraindication. ',
    contraindications: [
      'Hypersensitivity/Allergic Reaction',
      'Pregnancy before 11 weeks’ gestation',
      'Prolonged QT Syndrome',
    ],
    cautions: [
      'Max Total Dose: Max total dosing includes all Slow IV Push (SIVP 10-20 seconds)',
    ],
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
    packages: [zofran_2_2],
  },

  {
    id: 31,
    name: 'B12 (Hydroxocobolomin)',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications:
      'Patients that request this IM injectable without contraindication',
    contraindications: '',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      '0.5mL (1mg)',
    ],
    description:
      'Reverses B12 deficiency and macrocytic anemia related to B12 deficiency. Helps to increase energy along with the ability to augment metabolism in weight management',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    packages: [hydroxocobalamin_2_1],
  },

  {
    id: 32,
    name: 'Biotin',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request the IM injection without contraindication.',
    contraindications: '',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      '1mL (10 mg)							',
    ],
    description:
      'Helps in growth and regeneration of hair, nails, and skin. Also aids in breaking down fats and carbohydrates',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    packages: [biotin_10_1],
  },

  {
    id: 33,
    name: 'CoQ10',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications:
      'Patients that request this IM injectable without contraindication',
    contraindications: '',
    cautions: [
      'Those patients on antiplatelet therapy or blood thinners',
      'Max Total Dose: Max total dosing includes all IV administration',
      '3 mL (60 mg)',
    ],
    description:
      'CoQ10 is an essential antioxidant. It has the potential to help heart failure patients, Type II Diabetics with insulin resistance, hypertension, metabolic syndrome, and has the potential to decrease the prevalence of certain types of cancer and neurologic degenerative diseases',
    focus: [],
    frequency: {
      maximum: '7 days',
    },
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
    packages: [coq10_20_3],
  },

  {
    id: 34,
    name: 'D - Vitamin',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request this IM injectable without contraindication, or have a known and documented deficiency of Vitamin D',
    contraindications: [
      'Currently on daily oral regiment (any dose)',
      'Pregnancy',
      'Breast Feeding',
      'Renal disease',
      'Sarcoidosis',
      'Active Cancer Patient',
    ],
    cautions: [
      'Vitamin D Deficiency Requirements: Must provide Vitamin D blood level lab results to Nurse for verification to qualify for Vitamin D deficiency protocol.',
      'Results must be within 30 days and without Vitamin D treatment',
    ],
    description: '',
    focus: [],
    frequency: [
      'Vitamin D Deficient:	7	days for 8-12 weeks',
      'NON-Vitamin D Deficient:	21 days',
    ],
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
    packages: [vitamin_d_1000000_0__5],
  },

  {
    id: 35,
    name: 'Glutathione',

    category: {
      id: 4,
      name: 'IM - Injectable',
    },

    indications:
      'Patients that request this IM injectable without contraindication',
    contraindications: ['Pregnancy', 'Breast Feeding'],
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      '5mL (1,000mg)',
    ],
    description:
      'Potent antioxidant with the ability to boost immunity and energy along with aiding in the decrease of symptoms in many pulmonology, cardiac, and nervous system disorders',
    focus: [],
    frequency: {
      maximum: '1 day',
    },
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
    packages: [glutathione_200_1],
  },

  {
    id: 36,
    name: 'Lipo-C',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request this IM injectable without contraindication',
    contraindications: 'Breast Feeding',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration							',
      '1mL(Methionine 15mg, Choline 50mg, L - Carnitine 50mg, Thiamine(B1) 15mg, Dexpanthenol 5mg / ml)',
    ],
    description:
      'Reduces body fat, helps to cleanse the liver, and combats against stress and fatigue. Lipotropics are three amino acids that are essential for the health of your liver. In addition to the three main lipotropics, some shots have other vitamins in them to act as a catalyst',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    // elements: [
    //   methionine_15_1,
    //   choline_50_1,
    //   l_carnitine_50_1,
    //   thiamine_15_1,
    //   dexpanthenol_5_1,
    // ],
    packages: [lipo_c],
  },

  {
    id: 37,
    name: 'Lipo-B',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request this IM injectable without contraindication',
    contraindications: 'Breast Feeding',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      '1mL (Methionine 25mg, Choline 50mg, Cyanocobalamin 1mg/ml)',
    ],
    description:
      'Reduces body fat, helps to cleanse the liver, and combats against stress and fatigue. Lipotropics are three amino acids that are essential for the health of your liver. In addition to the three main lipotropics, some shots have other vitamins in them to act as a catalyst',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    // elements: [methionine_15_1, choline_50_1, cyanocobalamin_50_1],
    packages: [lipo_b],
  },

  {
    id: 38,
    name: 'Toradol (Ketorolac)',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request the IM infusion without contraindication ',
    contraindications: [
      'Allergy to the medication',
      'Pregnancy',
      'Gastric Ulcers',
      'Severe Gastritis',
      'Renal Dysfunction',
    ],
    cautions: [
      'Significant Cardiac Disease',
      'Blood thinners or other anti platelet medications',
      'Max Total Dose: Max total dosing includes all IV administrations',
      '1 mL (15mg)',
    ],
    description:
      'This is an NSAID based medication that helps aid in a wide array of general muscle pain or arthritic pain. Also, can be utilized as a migraine/Headache abortive ',
    focus: [],
    frequency: {
      maximum: '3 days',
    },
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
    packages: [toradol_15_1],
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
    recommendations: [
      'Frequency: Clinical recommended loading dose for NAD IM is to administer 100 mg once daily for 5 days in a row. After this series is completed, it is recommended that patients receive ongoing injections once weekly to maintain NAD levels in your system',
    ],
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
    packages: [
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
    indications:
      'Patients that request the IV infusion boost without contraindication ',
    contraindications: 'Renal Disease',
    cautions: [
      'Max Total Dose: Max total dosing includes all IV administration',
      '2mL (Arginine 200mg, Citrulline 200mg/1mL)',
      '	Athletic Recovery, Energize, and Quick Slim Pro are the ONLY infusions that have 5 mL (500/500mg).',
      'Independent from this infusion, the maximum allowed boost is 2 mL.',
    ],
    description:
      'Helps to decrease acute and chronic liver disease. It is also used for many other conditions and can be used to improve athletic performance, prevent fatigue, improve concentration, and reduce muscle breakdown during intense exercise ',
    focus: [],
    frequency: {
      maximum: '1 day',
    },
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
    packages: [bi_amino_blend_2, arginine_100_2, citrulline_100_2],
  },

  {
    id: 41,
    name: 'Zofran (Ondansetron)',
    category: {
      id: 4,
      name: 'IM - Injectable',
    },
    indications:
      'Patients that request the IV injection without contraindication. ',
    contraindications: [
      'Hypersensitivity/Allergic Reaction',
      'Pregnancy before 11 weeks’ gestation',
      'Prolonged QT Syndrome							',
    ],
    cautions: [
      'Max Total Dose: Max total dosing includes all Slow IV Push (SIVP 10-20 seconds)',
    ],
    description: '',
    focus: [],
    frequency: {
      maximum: '1 day',
    },
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
    packages: [zofran_2_2],
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
    packages: [],
  },
]

export default {
  therapies,
}
