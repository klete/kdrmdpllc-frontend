import { doses } from '@/assets/data/doses.json'

export const vitamin_b_complex = {
  id: 'package: vitamin_b_complex',
  label: 'Vitamin B Complex',
  elements: [
    doses.vitamin_b_1_100_5,
    doses.vitamin_b_3_100_5,
    doses.vitamin_b_2_2_5,
    doses.vitamin_b_5_2_5,
    doses.vitamin_b_6_2_5,
  ],
}

export const bi_amino_blend = {
  id: 'package: bi_amino_blend',
  label: 'Bi-Amino Blend',
  elements: [doses.arginine_100_5, doses.citrulline_100_5],
}

export const tralement_blend = {
  id: 'package: tralement_blend',
  label: 'Tralement Blend',
  elements: [
    doses.zinc_3_0__5,
    doses.manganese_55_0__5,
    doses.copper_0__3_0__5,
    doses.selenium_60_0__5,
  ],
}

export const lipo_c = {
  id: 'package: lipo_c',
  label: 'Lipo-C',
  elements: [
    doses.methionine_15_1,
    doses.choline_50_1,
    doses.l_carnitine_50_1,
    doses.thiamine_15_1,
    doses.dexpanthenol_5_1,
  ],
}

export const lipo_b = {
  id: 'package: lipo_b',
  label: 'Lipo-B',
  elements: [
    doses.methionine_15_1,
    doses.choline_50_1,
    doses.cyanocobalamin_50_1,
  ],
}

export const packages = [
  vitamin_b_complex,
  bi_amino_blend,
  tralement_blend,
  lipo_c,
  lipo_b,
]

// export {
//   packages,
//   vitamin_b_complex,
//   bi_amino_blend,
//   tralement_blend,
//   lipo_c,
//   lipo_b,
// }
