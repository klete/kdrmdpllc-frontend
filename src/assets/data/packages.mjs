import {
  vitamin_b_1_100_5,
  vitamin_b_2_2_5,
  vitamin_b_3_100_5,
  vitamin_b_5_2_5,
  vitamin_b_6_2_5,
  zinc_3_0__5,
  manganese_55_0__5,
  copper_0__3_0__5,
  selenium_60_0__5,
  arginine_100_5,
  citrulline_100_5,
  methionine_15_1,
  choline_50_1,
  l_carnitine_50_1,
  thiamine_15_1,
  dexpanthenol_5_1,
  cyanocobalamin_50_1,
} from './therapy_elements.mjs'

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
}

const vitamin_b_complex = {
  label: 'Vitamin B Complex',
  elements: [
    vitamin_b_1_100_5,
    vitamin_b_3_100_5,
    vitamin_b_2_2_5,
    vitamin_b_5_2_5,
    vitamin_b_6_2_5,
  ],
}

const bi_amino_blend = {
  label: 'Bi-Amino Blend',
  elements: [arginine_100_5, citrulline_100_5],
}

const tralement_blend = {
  label: 'Tralement Blend',
  elements: [
    zinc_3_0__5,
    manganese_55_0__5,
    copper_0__3_0__5,
    selenium_60_0__5,
  ],
}

const lipo_c = {
  label: 'Lipo-C',
  elements: [
    methionine_15_1,
    choline_50_1,
    l_carnitine_50_1,
    thiamine_15_1,
    dexpanthenol_5_1,
  ],
}

const lipo_b = {
  label: 'Lipo-B',
  elements: [methionine_15_1, choline_50_1, cyanocobalamin_50_1],
}

export { vitamin_b_complex, bi_amino_blend, tralement_blend, lipo_c, lipo_b }
