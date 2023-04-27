const therapies = [
  {
    id: 1,
    name: '#I’ll never Drink Again',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 27,
    name: 'NAD+ Rejuvenate',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 4,
          name: 'IM - Injectable',
        },
      ],
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
      substrate: {
        name: 'Normal saline',
        amount: null,
        units: null,
      },
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
  },
  {
    id: 3,
    name: 'Alpha-Lipoic Acid (ALA)',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 4,
    name: 'Ascorbic Acid (Vitamin C)',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 5,
    name: 'Athletic Recovery',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
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
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [
        {
          id: 11,
          name: 'ascorbic acid',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 1,
          name: 'thiamin',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 3,
          name: 'niacin',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 2,
          name: 'riboflavin',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 4,
          name: 'pantothenic acid',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 5,
          name: 'pyroxidine',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 12,
          name: 'arginine',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 13,
          name: 'citrulline',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 14,
          name: 'glycine',
          amount: 50,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 10,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 15,
          name: 'lysine',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 2.5,
          volume_infused_units: 'mL',
          amount_element_infused: 250,
          element_infused_units: 'mg',
        },
        {
          id: 16,
          name: 'zinc',
          amount: '3.0',
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: '0.5',
          volume_infused_units: 'mL',
          amount_element_infused: '1.50',
          element_infused_units: 'mg',
        },
        {
          id: 17,
          name: 'manganese',
          amount: '55.00',
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: '0.5',
          volume_infused_units: 'mL',
          amount_element_infused: '27.50',
          element_infused_units: 'mg',
        },

        {
          id: 18,
          name: 'copper',
          amount: '0.30',
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: '0.5',
          volume_infused_units: 'mL',
          amount_element_infused: '0.15',
          element_infused_units: 'mg',
        },
        {
          id: 19,
          name: 'selenium',
          amount: '60.00',
          elemental_units_per: 'mcg',
          volume_units: 'mL',
          volume_infused: '0.5',
          volume_infused_units: 'mL',
          amount_element_infused: '30.00',
          element_infused_units: 'mcg',
        },
      ],
    },
  },

  {
    id: 6,
    name: 'B12 (Hydroxocobolomin)',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 7,
    name: 'Beautify',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
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
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [
        {
          id: 11,
          name: 'ascorbic acid',
          amount: 500,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 20,
          volume_infused_units: 'mL',
          amount_element_infused: 10000,
          element_infused_units: 'mg',
        },
        {
          id: 6,
          name: 'biotin',
          amount: 10,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 1,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 20,
          name: 'glutathione',
          amount: 200,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 1000,
          element_infused_units: 'mg',
        },
      ],
    },
  },
  {
    id: 8,
    name: 'Bi-Amino Blend',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 10,
    name: 'Booster Bag',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 11,
    name: 'Brainpower',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: '25 minutes',
        maximum: '30 minutes',
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [
        {
          id: 8,
          name: 'hydroxocobalamin',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 1,
          volume_infused_units: 'mL',
          amount_element_infused: 2,
          element_infused_units: 'mg',
        },
        {
          id: 21,
          name: 'L-Taurine',
          amount: 50,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 250,
          element_infused_units: 'mg',
        },
        {
          id: 22,
          name: 'Alpha-Lipoic Acid',
          amount: 25,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 125,
          element_infused_units: 'mg',
        },
      ],
    },
  },

  {
    id: 12,
    name: 'Build - A - Bag',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
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
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },

  {
    id: 13,
    name: 'CoQ10',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 14,
    name: 'Cryotherapy',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 15,
    name: 'D - Vitamin',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 16,
    name: 'Energize',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
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
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [
        {
          id: 1,
          name: 'thiamin',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 3,
          name: 'niacin',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 2,
          name: 'riboflavin',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 4,
          name: 'pantothenic acid',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 5,
          name: 'pyroxidine',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 12,
          name: 'arginine',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 13,
          name: 'citrulline',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 14,
          name: 'glycine',
          amount: 50,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 10,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 15,
          name: 'lysine',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 2.5,
          volume_infused_units: 'mL',
          amount_element_infused: 250,
          element_infused_units: 'mg',
        },
        {
          id: 21,
          name: 'L-Taurine',
          amount: 50,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 250,
          element_infused_units: 'mg',
        },
      ],
    },
  },
  {
    id: 17,
    name: 'Glutathione',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 18,
    name: 'High-C Infusion',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications:
        'Patients that request high dose Vitamin C infusion without contraindication. ',
      contraindications: '',
      cautions: ['High C infusion <em>CANNOT</em> receive any other Vitamin C'],
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
      substrate: {
        name: 'Normal Saline',
        amount: 1000,
        units: 'mL',
      },
      elements: [
        {
          id: 11,
          name: 'ascorbic acid',
          amount: 500,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 100,
          volume_infused_units: 'mL',
          amount_element_infused: 50000,
          element_infused_units: 'mg',
        },
      ],
    },
  },

  {
    id: 19,
    name: 'Hyperbarics',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },

  {
    id: 20,
    name: 'Immunity',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 21,
    name: 'L-Taurine',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 22,
    name: 'Lipo-B',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 23,
    name: 'Lipo-C',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 24,
    name: 'Magnesium Chloride',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 25,
    name: 'Myers',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 26,
    name: 'Myers Pro',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 2,
    name: 'Alleviate',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
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
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [
        {
          id: 9,
          name: 'calcium gluconate',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 10,
          name: 'magnesium chloride',
          amount: 300,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 4,
          volume_infused_units: 'mL',
          amount_element_infused: 1200,
          element_infused_units: 'mg',
        },
        {
          id: 1,
          name: 'thiamin',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 3,
          name: 'niacin',
          amount: 100,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 500,
          element_infused_units: 'mg',
        },
        {
          id: 2,
          name: 'riboflavin',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 4,
          name: 'pantothenic acid',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 5,
          name: 'pyroxidine',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 5,
          volume_infused_units: 'mL',
          amount_element_infused: 10,
          element_infused_units: 'mg',
        },
        {
          id: 8,
          name: 'hydroxocobalamin',
          amount: 2,
          elemental_units_per: 'mg',
          volume_units: 'mL',
          volume_infused: 1,
          volume_infused_units: 'mL',
          amount_element_infused: 2,
          element_infused_units: 'mg',
        },
      ],
    },
  },
  {
    id: 28,
    name: 'Ozone UV IV Infusion',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 29,
    name: 'PBM',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 30,
    name: 'Pregame',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },

  {
    id: 31,
    name: 'Quick Slim',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 32,
    name: 'Quick Slim Pro',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },

  {
    id: 33,
    name: 'Rehydrate',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },

  {
    id: 34,
    name: 'Semaglutide/Cyanocobalamin',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 35,
    name: 'Supa Gluta',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
      infusion: {
        minimum: null,
        maximum: null,
      },
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 36,
    name: 'Toradol (Ketorolac)',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 37,
    name: 'Zen',
    services: [],
    targets: [],
    data: {
      type: [
        {
          id: 1,
          name: 'IVI - Infusion',
        },
      ],
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
      substrate: {
        name: 'Lactated Ringers',
        amount: 1000,
        units: 'mL',
      },
      elements: [],
    },
  },
  {
    id: 38,
    name: 'Zinc Sulfate',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
  {
    id: 39,
    name: 'Zofran (Ondansetron)',
    services: [],
    targets: [],
    data: {
      type: null,
      indications: '',
      contraindications: '',
      cautions: [],
      description: '',
      focus: [],
      frequency: null,
      source: null,
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
  },
]

export default {
  therapies,
}
