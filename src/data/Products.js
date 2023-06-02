const products = [
  {
    _id: "1",
    image: "/images/durgs_list/Em-vit-c-syrup-100ml-scaled.png",
    drugName: "Glucophage Tab 1000mg x 30",
    manufacturer: "emzor",
    quantity: 12,
    sku: "box",
    price: 899,
    InStock: true,
  },
  {
    _id: "2",
    image:
      "/images/durgs_list/Abidec-25ml-multivitamin-drops-for-babies-2-scaled.png",
    drugName: "Emzolyn Cough Syrup for Children 100ml",
    manufacturer: "emzor",
    quantity: 12,
    sku: "box",
    price: 1000,
    InStock: true,
  },
  {
    _id: "3",
    image: "/images/durgs_list/Amaryl-glimepiride-2mg-tablet--scaled.png",
    drugName: "Glucophage Tab 1000mg x 30",
    manufacturer: "Merck",
    quantity: 50,
    sku: "roll",
    price: 500,
    InStock: true,
  },
  {
    _id: "4",
    drugName: "Vinco Ceftriaxone+Lidocaine inj X1vial",
    image: "/images/durgs_list/Amatem-softgel-x18-80-480mg-2-1-300x300.png",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 700,
    InStock: true,
  },
  {
    _id: "5",
    image: "/images/durgs_list/Amoxil-250mg-capsule-1-scaled.png",
    drugName: "Becombion Syrup 150ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 400,
    InStock: true,
  },
  {
    _id: "6",
    image:
      "/images/durgs_list/Anti-Malarial-Medicine-Artemether-Injection-80mg-1ml-with-Best-Quality.png",
    drugName: "Agary Infusion Giving Set",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 300,
    InStock: true,
  },
  {
    _id: "7",
    image: "/images/durgs_list/Astyfer-syrup-200ml.png",
    drugName: "Agary Nylon Monofilament Size 3/0 x 12",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 5000,
    InStock: true,
  },
  {
    _id: "8",
    image: "/images/durgs_list/Augmentin-625mg-tablet-1-scaled.png",
    drugName: "Fidson 5% Dextrose Water 500m",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 10000,
    InStock: true,
  },
  {
    _id: "9",
    image: "/images/durgs_list/Axiom-levofloxacin-500mg-tablet-usp-1.png",
    drugName: "NGC Children's Cough Syrup 100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 9000,
    InStock: true,
  },
  {
    _id: "10",
    image: "/images/durgs_list/Babyrex-baby-mixture-60ml-scaled.png",
    drugName: "Smi Surgical Skin Stapler",
    manufacturer: "emzor",
    quantity: 50,
    sku: "emzor",
    price: 4000,
    InStock: true,
  },
  {
    _id: "11",
    image: "/images/durgs_list/Bendroflumethiazide-5mg-tab-bristol2.png",
    drugName: "D-koff Syrup 100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 2000,
    InStock: true,
  },
  {
    _id: "12",
    image: "/images/durgs_list/Bonababe-60ml-syrup-for-babies-300x300.png",
    drugName: "Parkalin Expectorant Chesty Cough 100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 300,
    InStock: true,
  },
  {
    _id: "13",
    image: "/images/durgs_list/Brustan-n-400mg-tabelt-scale.png",
    drugName: "SKG Hydrogen Peroxide",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 800,
    InStock: true,
  },
  {
    _id: "14",
    image: "/images/durgs_list/Ceftriaxone_1gm_injection_-_capsutab.png",
    drugName: "Amoxicillin 500mg, Clavulanic Acid 125mg",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 9000,
    InStock: true,
  },
  {
    _id: "15",
    image: "/images/durgs_list/Cenox-tn-tablet-1-300x300.png",
    drugName: "M&B Paracetamol Syrup 60ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 1200,
    InStock: true,
  },
  {
    _id: "16",
    image: "/images/durgs_list/Dc-really-extra-tablet-300x300.png",
    drugName: "Emcap 500mg X 1000",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 4000,
    InStock: true,
  },
  {
    _id: "17",
    image: "/images/durgs_list/Digoxin-assos-0.25mg-tab-scaled.png",
    drugName: "NeuroGesic 35gm",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 500,
    InStock: true,
  },
  {
    _id: "18",
    image: "/images/durgs_list/Em-vit-c-syrup-100ml-scaled.png",
    drugName: "paracetamol Injection I.M/I.V 2ml X 100",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 3000,
    InStock: true,
  },
  {
    _id: "19",
    image: "/images/durgs_list/Emzor_Paracetamol-syrup-60ml.png",
    drugName: "Emzor Paracetamol Syrup 60ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 2000,
    InStock: true,
  },
  {
    _id: "20",
    image: "/images/durgs_list/Emzoron-capsules.png",
    drugName: "Boska 500/30mg Tab X10",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 300,
    InStock: true,
  },
  {
    _id: "21",
    image: "/images/durgs_list/Ibucap-forte-capsule-1-scaled.png",
    drugName: "Sudrex 500/30mg Tab X10",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 289,
    InStock: true,
  },
  {
    _id: "22",
    image: "/images/durgs_list/jawaclox-suspension.png",
    drugName: "Dolo-Meta B x 100",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 189,
    InStock: true,
  },
  {
    _id: "23",
    image: "/images/durgs_list/jawamox-suspension.png",
    drugName: "NGC-Valgin 500mg 100 x10",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 489,
    InStock: true,
  },
  {
    _id: "24",
    image: "/images/durgs_list/Koyodox-100mg-capsule.png",
    drugName: "Ibuprofen Suspension 100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 589,
    InStock: true,
  },
  {
    _id: "25",
    image: "/images/durgs_list/Lisinopril-10mg-tab-freshborn.png",
    drugName: "Vinco Diclofenac Injection 75mg/3ml I.M",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 189,
    InStock: true,
  },
  {
    _id: "26",
    image: "/images/durgs_list/Loxagly-400mg-tablet-300x300.png",
    drugName: "L-Flox levofloxacin Infusion 500mg /100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 289,
    InStock: true,
  },
  {
    _id: "27",
    image: "/images/durgs_list/M-and-b-paracetamol-500mg-tablet.png",
    drugName: "Aquazone Ceftriaxone Inj 1g",
    quantity: 50,
    sku: "box",
    price: 189,
    InStock: true,
  },
  {
    _id: "28",
    image:
      "/images/durgs_list/Abidec-25ml-multivitamin-drops-for-babies-2-scaled.png",
    drugName: "Pemason Metronidazole Infusion 100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 189,
    InStock: true,
  },
  {
    _id: "29",
    image:
      "/images/durgs_list/Abidec-25ml-multivitamin-drops-for-babies-2-scaled.png",
    drugName: "Ziclox Suspension 100ml",
    manufacturer: "emzor",
    quantity: 50,
    sku: "box",
    price: 289,
    InStock: true,
  },
  {
    _id: "30",
    image: "/images/durgs_list/Tandak_-_ceftriaxone_+_Sulbactan_Injection.png",
    drugName: "Emzoclox 500mg X 100",
    manufacturer: "emzor",
    quantity: 50,
    sku: "roll",
    price: 189,
    InStock: true,
  },
];

export default products;
