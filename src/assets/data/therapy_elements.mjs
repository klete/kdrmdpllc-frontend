import { doses } from '@/assets/data/doses.json'

export const substrate_ringers = {
  name: 'Lactated Ringers',
  amount: 1000,
  units: 'mL',
}
export const substrate_saline = {
  name: 'Normal Saline',
  amount: 1000,
  units: 'mL',
}

export const substrates = [substrate_ringers, substrate_saline]

export const elements = {}
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
  doses: [doses.alpha_lipoic_acid_25_5],
}
elements.arginine = {
  name: 'arginine',
  doses: [doses.arginine_100_1, doses.arginine_100_2, doses.arginine_100_5],
}
elements.biotin = {
  name: 'biotin',
  doses: [doses.biotin_10_1],
}
elements.calcium_gluconate = {
  name: 'Calcium Gluconate',
  doses: [doses.calcium_gluconate_100_1, doses.calcium_gluconate_100_5],
}
elements.choline = {
  name: 'choline',
  doses: [doses.choline_50_1],
}
elements.citrulline = {
  name: 'citrulline',
  doses: [
    doses.citrulline_100_1,
    doses.citrulline_100_2,
    doses.citrulline_100_5,
  ],
}
elements.copper = {
  name: 'copper',
  doses: [doses.copper_0__3_0__5, doses.copper_0__3_1],
}

elements.coq10 = {
  name: 'coq10',
  doses: [doses.coq10_20_3],
}

elements.cyanocobalamin = {
  name: 'cyanocobalamin',
  doses: [doses.cyanocobalamin_50_1],
}

elements.dexpanthenol = {
  name: 'dexpanthenol',
  doses: [doses.dexpanthenol_5_1],
}

elements.glutathione = {
  name: 'glutathione',
  doses: [
    doses.glutathione_200_1,
    doses.glutathione_200_2__5,
    doses.glutathione_200_5,
    doses.glutathione_200_10,
  ],
}
elements.glycine = {
  name: 'glycine',
  doses: [doses.glycine_50_5, doses.glycine_50_10],
}
elements.hydroxocobalamin = {
  name: 'hydroxocobalamin',
  doses: [doses.hydroxocobalamin_2_0__5, doses.hydroxocobalamin_2_1],
}
elements.l_carnitine = {
  name: 'L-Carnitine',
  doses: [doses.l_carnitine_50_1, doses.l_carnitine_500_2],
}
elements.l_taurine = {
  name: 'L-Taurine',
  doses: [doses.l_taurine_50_1, doses.l_taurine_50_5, doses.l_taurine_50_10],
}
elements.lysine = {
  name: 'lysine',
  doses: [doses.lysine_100_2__5],
}
elements.magnesium_chloride = {
  name: 'magnesium chloride',
  doses: [
    doses.magnesium_chloride_300_0__5,
    doses.magnesium_chloride_300_1,
    doses.magnesium_chloride_300_2,
    doses.magnesium_chloride_300_4,
  ],
}
elements.manganese = {
  name: 'manganese',
  doses: [doses.manganese_55_0__5, doses.manganese_55_1],
}
elements.methionine = {
  name: 'methionine',
  doses: [doses.methionine_15_1],
}
elements.selenium = {
  name: 'selenium',
  doses: [doses.selenium_60_0__5, doses.selenium_60_1],
}
elements.thiamine = {
  name: 'thiamine',
  doses: [doses.thiamine_15_1],
}

elements.toradol = {
  name: 'toradol',
  doses: [doses.toradol_15_1],
}

elements.vitamin_b_1 = {
  name: 'vitamin b-1',
  doses: [doses.vitamin_b_1_100_1, doses.vitamin_b_1_100_5],
}

elements.vitamin_b_2 = {
  name: 'vitamin b-2',
  doses: [doses.vitamin_b_2_2_1, doses.vitamin_b_2_2_5],
}

elements.vitamin_b_3 = {
  name: 'vitamin b-3',
  doses: [doses.vitamin_b_3_100_1, doses.vitamin_b_3_100_5],
}
elements.vitamin_b_5 = {
  name: 'vitamin b-5',
  doses: [doses.vitamin_b_5_2_1, doses.vitamin_b_5_2_5],
}
elements.vitamin_b_6 = {
  name: 'vitamin b-6',
  doses: [doses.vitamin_b_6_2_1, doses.vitamin_b_6_2_5],
}

elements.vitamin_b_12 = {
  name: 'vitamin b-12',
  doses: [doses.vitamin_b_12_2_1],
}
elements.vitamin_c = {
  name: 'vitamin c',
  doses: [
    doses.vitamin_c_100_5,
    doses.vitamin_c_500_20,
    doses.vitamin_c_500_100,
    doses.vitamin_c_500_25,
    doses.vitamin_c_500_1,
    doses.vitamin_c_500_5,
    doses.vitamin_c_500_10,
  ],
}
elements.vitamin_d = {
  name: 'vitamin d',
  doses: [doses.vitamin_d_1000000_0__5],
}
elements.zinc = {
  name: 'zinc',
  doses: [doses.zinc_3_0__5, doses.zinc_3_1],
}
elements.zinc_sulfate = {
  name: 'zinc sulfate',
  doses: [doses.zinc_sulfate_10_0__5, doses.zinc_sulfate_10_1],
}
elements.zofran = {
  name: 'zofran',
  doses: [doses.zofran_2_2],
}

export const bi_amino_blend_1 = {
  element_id: 13,
  name: 'Bi-Amino Blend',
  amount: null,
  elemental_units_per: null,
  volume_units: null,
  volume_infused: 1,
  volume_infused_units: 'mL',
  amount_element_infused: 100,
  element_infused_units: 'mg',
}

export const bi_amino_blend_2 = {
  element_id: 13,
  name: 'Bi-Amino Blend',
  amount: null,
  elemental_units_per: null,
  volume_units: null,
  volume_infused: 2,
  volume_infused_units: 'mL',
  amount_element_infused: 200,
  element_infused_units: 'mg',
}

// export {
//   bi_amino_blend_1,
//   bi_amino_blend_2,
//   substrate_ringers,
//   substrate_saline,
//   substrates,
//   elements,
// }
