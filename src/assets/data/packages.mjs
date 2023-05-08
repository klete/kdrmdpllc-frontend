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

const vitamin_b_complex = {
  id: 'package: vitamin_b_complex',
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
  id: 'package: bi_amino_blend',
  label: 'Bi-Amino Blend',
  elements: [arginine_100_5, citrulline_100_5],
}

const tralement_blend = {
  id: 'package: tralement_blend',
  label: 'Tralement Blend',
  elements: [
    zinc_3_0__5,
    manganese_55_0__5,
    copper_0__3_0__5,
    selenium_60_0__5,
  ],
}

const lipo_c = {
  id: 'package: lipo_c',
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
  id: 'package: lipo_b',
  label: 'Lipo-B',
  elements: [methionine_15_1, choline_50_1, cyanocobalamin_50_1],
}

const packages = [
  vitamin_b_complex,
  bi_amino_blend,
  tralement_blend,
  lipo_c,
  lipo_b,
]

export {
  packages,
  vitamin_b_complex,
  bi_amino_blend,
  tralement_blend,
  lipo_c,
  lipo_b,
}
