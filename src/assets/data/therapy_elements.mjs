const substrate_ringers = {
  name: 'Lactated Ringers',
  amount: 1000,
  units: 'mL',
}
const substrate_saline = {
  name: 'Normal Saline',
  amount: 1000,
  units: 'mL',
}

const substrates = [substrate_ringers, substrate_saline]

const alpha_lipoic_acid_25_5 = {
  id: 22,
  name: 'Alpha-Lipoic Acid',
  amount: 25,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 125,
  element_infused_units: 'mg',
  therapies: [5, 15, 16, 27],
}

const arginine_100_1 = {
  id: 12,
  name: 'arginine',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: null,
  volume_infused_units: null,
  amount_element_infused: null,
  element_infused_units: null,
  therapies: [25],
}

const arginine_100_2 = {
  id: 12,
  name: 'arginine',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: null,
  volume_infused_units: null,
  amount_element_infused: null,
  element_infused_units: null,
  therapies: [25, 40],
}
const arginine_100_5 = {
  id: 12,
  name: 'arginine',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const biotin_10_1 = {
  id: 6,
  name: 'biotin',
  amount: 10,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 10,
  element_infused_units: 'mg',
  therapies: [],
}
const calcium_gluconate_100_1 = {
  id: 9,
  name: 'calcium gluconate',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 100,
  element_infused_units: 'mg',
  therapies: [],
}

const calcium_gluconate_100_5 = {
  id: 9,
  name: 'calcium gluconate',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const choline_50_1 = {
  id: 33,
  name: 'choline',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 50,
  element_infused_units: 'mg',
  therapies: [],
}

const citrulline_100_1 = {
  id: 13,
  name: 'citrulline',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: null,
  volume_infused_units: null,
  amount_element_infused: null,
  element_infused_units: null,
  therapies: [],
}

const citrulline_100_2 = {
  id: 13,
  name: 'citrulline',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: null,
  volume_infused_units: null,
  amount_element_infused: null,
  element_infused_units: null,
  therapies: [],
}

const citrulline_100_5 = {
  id: 13,
  name: 'citrulline',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const copper_0__3_0__5 = {
  id: 18,
  name: 'copper',
  amount: '0.30',
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: '0.15',
  element_infused_units: 'mg',
  therapies: [],
}

const copper_0__3_1 = {
  id: 18,
  name: 'copper',
  amount: '0.30',
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: '0.30',
  element_infused_units: 'mg',
  therapies: [],
}

const coq10_20_3 = {
  id: 24,
  name: 'CoQ10',
  amount: 20,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 3,
  volume_infused_units: 'mL',
  amount_element_infused: 60,
  element_infused_units: 'mg',
  therapies: [],
}

const cyanocobalamin_50_1 = {
  id: 34,
  name: 'cyanocobalamin',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 50,
  element_infused_units: 'mg',
  therapies: [],
}

const dexpanthenol_5_1 = {
  id: 31,
  name: 'dexpanthenol',
  amount: 5,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 5,
  element_infused_units: 'mg',
  therapies: [],
}

const glutathione_200_1 = {
  id: 20,
  name: 'glutathione',
  amount: 200,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 200,
  element_infused_units: 'mg',
  therapies: [],
}

const glutathione_200_2__5 = {
  id: 20,
  name: 'glutathione',
  amount: 200,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 2.5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const glutathione_200_5 = {
  id: 20,
  name: 'glutathione',
  amount: 200,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 1000,
  element_infused_units: 'mg',
  therapies: [],
}

const glutathione_200_10 = {
  id: 20,
  name: 'glutathione',
  amount: 200,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 10,
  volume_infused_units: 'mL',
  amount_element_infused: 2000,
  element_infused_units: 'mg',
  therapies: [],
}

const glycine_50_5 = {
  id: 14,
  name: 'glycine',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 250,
  element_infused_units: 'mg',
  therapies: [],
}
const glycine_50_10 = {
  id: 14,
  name: 'glycine',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 10,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const hydroxocobalamin_2_1 = {
  id: 8,
  name: 'hydroxocobalamin',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 2,
  element_infused_units: 'mg',
  therapies: [],
}
const hydroxocobalamin_2_0__5 = {
  id: 8,
  name: 'hydroxocobalamin',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: 1,
  element_infused_units: 'mg',
  therapies: [],
}

const l_carnitine_50_1 = {
  id: 29,
  name: 'L-Carnitine',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 50,
  element_infused_units: 'mg',
  therapies: [],
}
const l_carnitine_500_2 = {
  id: 29,
  name: 'L-Carnitine',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 2,
  volume_infused_units: 'mL',
  amount_element_infused: 1000,
  element_infused_units: 'mg',
  therapies: [],
}

const l_taurine_50_1 = {
  id: 21,
  name: 'L-Taurine',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 50,
  element_infused_units: 'mg',
  therapies: [],
}
const l_taurine_50_5 = {
  id: 21,
  name: 'L-Taurine',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 250,
  element_infused_units: 'mg',
  therapies: [],
}
const l_taurine_50_10 = {
  id: 21,
  name: 'L-Taurine',
  amount: 50,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 10,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const lysine_100_2__5 = {
  id: 15,
  name: 'lysine',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 2.5,
  volume_infused_units: 'mL',
  amount_element_infused: 250,
  element_infused_units: 'mg',
  therapies: [],
}

const magnesium_chloride_300_0__5 = {
  id: 10,
  name: 'magnesium chloride',
  amount: 300,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: 150,
  element_infused_units: 'mg',
  therapies: [],
}
const magnesium_chloride_300_2 = {
  id: 10,
  name: 'magnesium chloride',
  amount: 300,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 2,
  volume_infused_units: 'mL',
  amount_element_infused: 600,
  element_infused_units: 'mg',
  therapies: [],
}
const magnesium_chloride_300_4 = {
  id: 10,
  name: 'magnesium chloride',
  amount: 300,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 4,
  volume_infused_units: 'mL',
  amount_element_infused: 1200,
  element_infused_units: 'mg',
  therapies: [],
}

const magnesium_chloride_300_1 = {
  id: 10,
  name: 'magnesium chloride',
  amount: 300,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 300,
  element_infused_units: 'mg',
  therapies: [],
}

const manganese_55_0__5 = {
  id: 17,
  name: 'manganese',
  amount: '55.00',
  elemental_units_per: 'mcg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: '27.50',
  element_infused_units: 'mcg',
  therapies: [],
}
const manganese_55_1 = {
  id: 17,
  name: 'manganese',
  amount: '55.00',
  elemental_units_per: 'mcg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: '55.00',
  element_infused_units: 'mcg',
  therapies: [],
}

const methionine_15_1 = {
  id: 32,
  name: 'methionine',
  amount: 15,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 15,
  element_infused_units: 'mg',
  therapies: [],
}

const selenium_60_0__5 = {
  id: 19,
  name: 'selenium',
  amount: '60.00',
  elemental_units_per: 'mcg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: '30.00',
  element_infused_units: 'mcg',
  therapies: [],
}
const selenium_60_1 = {
  id: 19,
  name: 'selenium',
  amount: '60.00',
  elemental_units_per: 'mcg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: '60.00',
  element_infused_units: 'mcg',
  therapies: [],
}

const thiamine_15_1 = {
  id: 30,
  name: 'thiamine',
  amount: 15,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 15,
  element_infused_units: 'mg',
  therapies: [],
}

const toradol_15_1 = {
  id: 26,
  name: 'toradol',
  amount: 15,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 15,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_1_100_1 = {
  id: 1,
  name: 'Vitamin B-1',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 100,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_1_100_5 = {
  id: 1,
  name: 'Vitamin B-1',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_2_2_1 = {
  id: 1,
  name: 'Vitamin B-2',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 2,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_2_2_5 = {
  id: 1,
  name: 'Vitamin B-2',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 10,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_3_100_1 = {
  id: 1,
  name: 'Vitamin B-3',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 100,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_3_100_5 = {
  id: 1,
  name: 'Vitamin B-3',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_5_2_1 = {
  id: 1,
  name: 'Vitamin B-5',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 2,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_5_2_5 = {
  id: 1,
  name: 'Vitamin B-5',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 10,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_6_2_1 = {
  id: 1,
  name: 'Vitamin B-6',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 2,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_6_2_5 = {
  id: 1,
  name: 'Vitamin B-6',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 10,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_b_12_2_1 = {
  id: 8,
  name: 'Vitamin B-12',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 2,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_c_100_5 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 100,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_c_500_20 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 20,
  volume_infused_units: 'mL',
  amount_element_infused: 10000,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_c_500_100 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 100,
  volume_infused_units: 'mL',
  amount_element_infused: 50000,
  element_infused_units: 'mg',
  therapies: [],
}
const vitamin_c_500_25 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 25,
  volume_infused_units: 'mL',
  amount_element_infused: 12500,
  element_infused_units: 'mg',
  therapies: [],
}
const vitamin_c_500_1 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 500,
  element_infused_units: 'mg',
  therapies: [],
}
const vitamin_c_500_5 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 5,
  volume_infused_units: 'mL',
  amount_element_infused: 2500,
  element_infused_units: 'mg',
  therapies: [],
}
const vitamin_c_500_10 = {
  id: 11,
  name: 'ascorbic acid',
  amount: 500,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 10,
  volume_infused_units: 'mL',
  amount_element_infused: 5000,
  element_infused_units: 'mg',
  therapies: [],
}

const vitamin_d_1000000_0__5 = {
  id: 36,
  name: 'Vitamin B-12',
  amount: 1000000,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: 50000,
  element_infused_units: 'mg',
  therapies: [],
}

const zinc_3_0__5 = {
  id: 16,
  name: 'zinc',
  amount: '3.0',
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: '1.50',
  element_infused_units: 'mg',
  therapies: [],
}
const zinc_3_1 = {
  id: 16,
  name: 'zinc',
  amount: '3.00',
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: '3.00',
  element_infused_units: 'mg',
  therapies: [],
}

const zinc_sulfate_10_0__5 = {
  id: 25,
  name: 'zinc sulfate',
  amount: 10,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: '0.5',
  volume_infused_units: 'mL',
  amount_element_infused: 5,
  element_infused_units: 'mg',
  therapies: [],
}
const zinc_sulfate_10_1 = {
  id: 25,
  name: 'zinc sulfate',
  amount: 10,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 10,
  element_infused_units: 'mg',
  therapies: [],
}

const zofran_2_2 = {
  id: 35,
  name: 'zofran',
  amount: 2,
  elemental_units_per: 'mg',
  volume_units: 'mL',
  volume_infused: 2,
  volume_infused_units: 'mL',
  amount_element_infused: 4,
  element_infused_units: 'mg',
  therapies: [],
}

const elements = {}
elements.alpha_lipoic_acid = null
elements.arginine = null
elements.biotin = null
elements.calcium_gluconate = null
elements.choline = null
elements.citrulline = null
elements.copper = null
elements.coq10 = null
elements.cyanocobalamin = null
elements.dexpanthenol = null
elements.glutathione = null
elements.glycine = null
elements.hydroxocobalamin = null
elements.l_carnitine = null
elements.l_taurine = null
elements.lysine = null
elements.magnesium_chloride = null
elements.manganese = null
elements.methionine = null
elements.selenium = null
elements.thiamine = null
elements.toradol = null
elements.vitamin_b_1 = null
elements.vitamin_b_2 = null
elements.vitamin_b_3 = null
elements.vitamin_b_5 = null
elements.vitamin_b_6 = null

elements.vitamin_b_12 = null
elements.vitamin_c = null
elements.vitamin_d = null
elements.zinc = null
elements.zinc_sulfate = null
elements.zofran = null

elements.alpha_lipoic_acid = {
  name: 'Alpha-Lipoic Acid (ALA)',
  doses: [alpha_lipoic_acid_25_5],
}
elements.arginine = {
  name: 'arginine',
  doses: [arginine_100_1, arginine_100_2, arginine_100_5],
}
elements.biotin = {
  name: 'biotin',
  doses: [biotin_10_1],
}
elements.calcium_gluconate = {
  name: 'Calcium Gluconate',
  doses: [calcium_gluconate_100_1, calcium_gluconate_100_5],
}
elements.choline = {
  name: 'choline',
  doses: [choline_50_1],
}
elements.citrulline = {
  name: 'citrulline',
  doses: [citrulline_100_1, citrulline_100_2, citrulline_100_5],
}
elements.copper = {
  name: 'copper',
  doses: [copper_0__3_0__5, copper_0__3_1],
}

elements.coq10 = {
  name: 'coq10',
  doses: [coq10_20_3],
}

elements.cyanocobalamin = {
  name: 'cyanocobalamin',
  doses: [cyanocobalamin_50_1],
}

elements.dexpanthenol = {
  name: 'dexpanthenol',
  doses: [dexpanthenol_5_1],
}

elements.glutathione = {
  name: 'glutathione',
  doses: [
    glutathione_200_1,
    glutathione_200_2__5,
    glutathione_200_5,
    glutathione_200_10,
  ],
}
elements.glycine = {
  name: 'glycine',
  doses: [glycine_50_5, glycine_50_10],
}
elements.hydroxocobalamin = {
  name: 'hydroxocobalamin',
  doses: [hydroxocobalamin_2_0__5, hydroxocobalamin_2_1],
}
elements.l_carnitine = {
  name: 'L-Carnitine',
  doses: [l_carnitine_50_1, l_carnitine_500_2],
}
elements.l_taurine = {
  name: 'L-Taurine',
  doses: [l_taurine_50_1, l_taurine_50_5, l_taurine_50_10],
}
elements.lysine = {
  name: 'lysine',
  doses: [lysine_100_2__5],
}
elements.magnesium_chloride = {
  name: 'magnesium chloride',
  doses: [
    magnesium_chloride_300_0__5,
    magnesium_chloride_300_1,
    magnesium_chloride_300_2,
    magnesium_chloride_300_4,
  ],
}
elements.manganese = {
  name: 'manganese',
  doses: [manganese_55_0__5, manganese_55_1],
}
elements.methionine = {
  name: 'methionine',
  doses: [methionine_15_1],
}
elements.selenium = {
  name: 'selenium',
  doses: [selenium_60_0__5, selenium_60_1],
}
elements.thiamine = {
  name: 'thiamine',
  doses: [thiamine_15_1],
}

elements.toradol = {
  name: 'toradol',
  doses: [toradol_15_1],
}

elements.vitamin_b_1 = {
  name: 'vitamin b-1',
  doses: [vitamin_b_1_100_1, vitamin_b_1_100_5],
}

elements.vitamin_b_2 = {
  name: 'vitamin b-2',
  doses: [vitamin_b_2_2_1, vitamin_b_2_2_5],
}

elements.vitamin_b_3 = {
  name: 'vitamin b-3',
  doses: [vitamin_b_3_100_1, vitamin_b_3_100_5],
}
elements.vitamin_b_5 = {
  name: 'vitamin b-5',
  doses: [vitamin_b_5_2_1, vitamin_b_5_2_5],
}
elements.vitamin_b_6 = {
  name: 'vitamin b-6',
  doses: [vitamin_b_6_2_1, vitamin_b_6_2_5],
}

elements.vitamin_b_12 = {
  name: 'vitamin b-12',
  doses: [vitamin_b_12_2_1],
}
elements.vitamin_c = {
  name: 'vitamin c',
  doses: [
    vitamin_c_100_5,
    vitamin_c_500_20,
    vitamin_c_500_100,
    vitamin_c_500_25,
    vitamin_c_500_1,
    vitamin_c_500_5,
    vitamin_c_500_10,
  ],
}
elements.vitamin_d = {
  name: 'vitamin d',
  doses: [vitamin_d_1000000_0__5],
}
elements.zinc = {
  name: 'zinc',
  doses: [zinc_3_0__5, zinc_3_1],
}
elements.zinc_sulfate = {
  name: 'zinc sulfate',
  doses: [zinc_sulfate_10_0__5, zinc_sulfate_10_1],
}
elements.zofran = {
  name: 'zofran',
  doses: [zofran_2_2],
}

const bi_amino_blend_1 = {
  id: 13,
  name: 'Bi-Amino Blend',
  amount: null,
  elemental_units_per: null,
  volume_units: null,
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 100,
  element_infused_units: 'mg',
}

const bi_amino_blend_2 = {
  id: 13,
  name: 'Bi-Amino Blend',
  amount: null,
  elemental_units_per: null,
  volume_units: null,
  volume_infused: 2,
  volume_infused_units: 'mL',
  amount_element_infused: 200,
  element_infused_units: 'mg',
}

export {
  alpha_lipoic_acid_25_5,
  arginine_100_1,
  arginine_100_2,
  arginine_100_5,
  biotin_10_1,
  calcium_gluconate_100_1,
  calcium_gluconate_100_5,
  choline_50_1,
  citrulline_100_1,
  citrulline_100_2,
  citrulline_100_5,
  copper_0__3_0__5,
  copper_0__3_1,
  coq10_20_3,
  cyanocobalamin_50_1,
  dexpanthenol_5_1,
  glutathione_200_1,
  glutathione_200_2__5,
  glutathione_200_5,
  glutathione_200_10,
  glycine_50_5,
  glycine_50_10,
  hydroxocobalamin_2_0__5,
  hydroxocobalamin_2_1,
  l_carnitine_50_1,
  l_carnitine_500_2,
  l_taurine_50_1,
  l_taurine_50_5,
  l_taurine_50_10,
  lysine_100_2__5,
  magnesium_chloride_300_0__5,
  magnesium_chloride_300_1,
  magnesium_chloride_300_2,
  magnesium_chloride_300_4,
  manganese_55_0__5,
  methionine_15_1,
  manganese_55_1,
  selenium_60_0__5,
  selenium_60_1,
  thiamine_15_1,
  toradol_15_1,
  vitamin_b_1_100_1,
  vitamin_b_1_100_5,
  vitamin_b_3_100_1,
  vitamin_b_3_100_5,
  vitamin_b_2_2_1,
  vitamin_b_2_2_5,
  vitamin_b_5_2_1,
  vitamin_b_5_2_5,
  vitamin_b_6_2_1,
  vitamin_b_6_2_5,
  vitamin_b_12_2_1,
  vitamin_c_100_5,
  vitamin_c_500_20,
  vitamin_c_500_100,
  vitamin_c_500_25,
  vitamin_c_500_1,
  vitamin_c_500_5,
  vitamin_c_500_10,
  vitamin_d_1000000_0__5,
  zinc_3_0__5,
  zinc_3_1,
  zinc_sulfate_10_0__5,
  zinc_sulfate_10_1,
  zofran_2_2,
  bi_amino_blend_1,
  bi_amino_blend_2,
  substrate_ringers,
  substrate_saline,
  substrates,
  elements,
}
