( function ( $ ) {
	'use strict';

	// All keys have quotes for consistency
	/* eslint-disable quote-props */
	$.extend( $.ime.sources, {
		'af-tilde': {
			name: 'Afrikaans tilde',
			source: 'rules/af/af-tilde.js'
		},
		'ak-qx': {
			name: 'Akan QX replacement',
			source: 'rules/ak/ak-qx.js'
		},
		'ak-tilde': {
			name: 'Akan tilde',
			source: 'rules/ak/ak-tilde.js'
		},
		'am-transliteration': {
			name: 'ትራንስልተራትዖን',
			source: 'rules/am/am-transliteration.js'
		},
		'ar-kbd': {
			name: 'لوحة المفاتيح العربية',
			source: 'rules/ar/ar-kbd.js'
		},
		'as-avro': {
			name: 'অভ্ৰ',
			source: 'rules/as/as-avro.js'
		},
		'as-bornona': {
			name: 'বৰ্ণনা',
			source: 'rules/as/as-bornona.js'
		},
		'as-inscript': {
			name: 'ইনস্ক্ৰিপ্ট',
			source: 'rules/as/as-inscript.js'
		},
		'as-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
			source: 'rules/as/as-inscript2.js'
		},
		'as-phonetic': {
			name: 'ফনেটিক',
			source: 'rules/as/as-phonetic.js'
		},
		'as-rodali': {
			name: 'ৰ\'দালি',
			source: 'rules/as/as-rodali.js'
		},
		'as-transliteration': {
			name: 'প্ৰতিৰূপান্তৰণ',
			source: 'rules/as/as-transliteration.js'
		},
		'azb-kbd': {
			name: 'تۆرکجه',
			source: 'rules/azb/azb-kbd.js'
		},
		'batak-qwerty': {
			name: 'Batak QWERTY',
			source: 'rules/bbc/batak-qwerty.js'
		},
		'be-kbd': {
			name: 'Стандартная',
			source: 'rules/be/be-kbd.js'
		},
		'be-latin': {
			name: 'Łacinka',
			source: 'rules/be/be-latin.js'
		},
		'be-transliteration': {
			name: 'Транслітэрацыя',
			source: 'rules/be/be-transliteration.js'
		},
		'ber-tfng': {
			name: 'Tifinagh',
			source: 'rules/ber/ber-tfng.js'
		},
		'bgn-kbd': {
			name: 'روچ کپتین بلوچی',
			source: 'rules/bgn/bgn-kbd.js'
		},
		'bm-alt': {
			name: 'Bamanankan Alt',
			source: 'rules/bm/bm-alt.js'
		},
		'bm-tilde': {
			name: 'Bamanankan tilde',
			source: 'rules/bm/bm-tilde.js'
		},
		'bn-avro': {
			name: 'অভ্র',
			source: 'rules/bn/bn-avro.js'
		},
		'bn-inscript': {
			name: 'ইনস্ক্ৰিপ্ট',
			source: 'rules/bn/bn-inscript.js'
		},
		'bn-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
			source: 'rules/bn/bn-inscript2.js'
		},
		'bn-nkb': {
			name: 'ন্যাশনাল কিবোর্ড',
			source: 'rules/bn/bn-nkb.js'
		},
		'bn-probhat': {
			name: 'প্রভাত',
			source: 'rules/bn/bn-probhat.js'
		},
		'bo-ewts': {
			name: 'Tibetan EWTS',
			source: 'rules/bo/bo-ewts.js'
		},
		'bo-sambhota': {
			name: 'Tibetan Sambhota',
			source: 'rules/bo/bo-sambhota.js'
		},
		'brx-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/brx/brx-inscript.js'
		},
		'brx-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/brx/brx-inscript2.js'
		},
		'byn-geezim': {
			name: 'ብሊን',
			source: 'rules/byn/byn-geezim.js'
		},
		'ckb-transliteration-arkbd': {
			name: 'باشووری',
			source: 'rules/ckb/ckb-transliteration-arkbd.js'
		},
		'ckb-transliteration-fakbd': {
			name: 'ڕۆژھەڵاتی',
			source: 'rules/ckb/ckb-transliteration-fakbd.js'
		},
		'ckb-transliteration-lakbd': {
			name: 'لاتینی',
			source: 'rules/ckb/ckb-transliteration-lakbd.js'
		},
		'cv-cyr-altgr': {
			name: 'Чăвашла (AltGr)',
			source: 'rules/cv/cv-cyr-altgr.js'
		},
		'cv-cyr-numbers': {
			name: 'Чăвашла (цифрилисем)',
			source: 'rules/cv/cv-cyr-numbers.js'
		},
		'cv-lat-altgr': {
			name: 'Căvašla (AltGr)',
			source: 'rules/cv/cv-lat-altgr.js'
		},
		'cyrl-palochka': {
			name: 'Palochka',
			source: 'rules/cyrl/cyrl-palochka.js'
		},
		'da-normforms': {
			name: 'Brug translitteration',
			source: 'rules/da/da-normforms.js'
		},
		'dag-alt': {
			name: 'Dagbani Alt',
			source: 'rules/dag/dag-alt.js'
		},
		'dag-tilde': {
			name: 'Dagbani tilde',
			source: 'rules/dag/dag-tilde.js'
		},
		'de-transliteration': {
			name: 'Deutsch Tilde',
			source: 'rules/de/de-transliteration.js'
		},
		'din-fqsx': {
			name: 'Dinka FQSX',
			source: 'rules/din/din-fqsx.js'
		},
		'din-tilde': {
			name: 'Dinka tilde',
			source: 'rules/din/din-tilde.js'
		},
		'doi-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/doi/doi-inscript2.js'
		},
		'ee-tilde': {
			name: 'Ewe Tilde',
			source: 'rules/ee/ee-tilde.js'
		},
		'el-kbd': {
			name: 'Τυπική πληκτρολόγιο',
			source: 'rules/el/el-kbd.js'
		},
		'eo-h': {
			name: 'Esperanto h',
			source: 'rules/eo/eo-h.js'
		},
		'eo-h-f': {
			name: 'Esperanto h fundamente',
			source: 'rules/eo/eo-h-f.js'
		},
		'eo-plena': {
			name: 'Esperanto plena',
			source: 'rules/eo/eo-plena.js'
		},
		'eo-q': {
			name: 'Esperanto q sistemo',
			source: 'rules/eo/eo-q.js'
		},
		'eo-transliteration': {
			name: 'transliterigo',
			source: 'rules/eo/eo-transliteration.js'
		},
		'eo-vi': {
			name: 'Esperanto vi sistemo',
			source: 'rules/eo/eo-vi.js'
		},
		'eo-x': {
			name: 'Esperanto x sistemo',
			source: 'rules/eo/eo-x.js'
		},
		'fa-kbd': {
			name: 'فارسی',
			source: 'rules/fa/fa-kbd.js'
		},
		'ff-alt': {
			name: 'Fulfulde alt',
			source: 'rules/ff/ff-alt.js'
		},
		'ff-tilde': {
			name: 'Fulfulde tilde',
			source: 'rules/ff/ff-tilde.js'
		},
		'fi-transliteration': {
			name: 'translitterointi',
			source: 'rules/fi/fi-transliteration.js'
		},
		'fo-normforms': {
			name: 'Føroyskt',
			source: 'rules/fo/fo-normforms.js'
		},
		'fon-tilde': {
			name: 'Fon Tilde',
			source: 'rules/fon/fon-tilde.js'
		},
		'gaa-cqx': {
			name: 'Ga CQX replacement',
			source: 'rules/gaa/gaa-cqx.js'
		},
		'gaa-tilde': {
			name: 'Ga tilde',
			source: 'rules/gaa/gaa-tilde.js'
		},
		'gom-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/gom/gom-inscript2.js'
		},
		'got-standard': {
			name: '𐌲𐌿𐍄𐌹𐍃𐌺𐌰 𐍂𐌰𐌶𐌳𐌰',
			source: 'rules/got/got-standard.js'
		},
		'gu-inscript': {
			name: 'ઇનસ્ક્રિપ્ટ',
			source: 'rules/gu/gu-inscript.js'
		},
		'gu-inscript2': {
			name: 'ઇનસ્ક્રિપ્ટ ૨',
			source: 'rules/gu/gu-inscript2.js'
		},
		'gu-phonetic': {
			name: 'ફોનૅટિક',
			source: 'rules/gu/gu-phonetic.js'
		},
		'gu-transliteration': {
			name: 'લિપ્યંતરણ',
			source: 'rules/gu/gu-transliteration.js'
		},
		'ha-tilde': {
			name: 'Hausa - tilde',
			source: 'rules/ha/ha-tilde.js'
		},
		'he-standard-2012': {
			name: 'עברית עם ניקוד על בסיס אנגלית',
			source: 'rules/he/he-standard-2012.js'
		},
		'he-standard-2012-extonly': {
			name: 'עברית עם ניקוד',
			source: 'rules/he/he-standard-2012-extonly.js'
		},
		'hi-bolnagri': {
			name: 'बोलनागरी',
			source: 'rules/hi/hi-bolnagri.js'
		},
		'hi-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/hi/hi-inscript.js'
		},
		'hi-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/hi/hi-inscript2.js'
		},
		'hi-phonetic': {
			name: 'फोनेटिक',
			source: 'rules/hi/hi-phonetic.js'
		},
		'hi-transliteration': {
			name: 'लिप्यंतरण',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hoc-transliteration': {
			name: 'Ho transliteration',
			source: 'rules/hoc/hoc-transliteration.js'
		},
		'hr-kbd': {
			name: 'Croatian kbd',
			source: 'rules/hr/hr-kbd.js'
		},
		'hy-emslegacy': {
			name: 'Մայքրոսոֆթի հին արևելահայերեն',
			source: 'rules/hy/hy-emslegacy.js'
		},
		'hy-ephonetic': {
			name: 'Հնչյունային դասավորություն',
			source: 'rules/hy/hy-ephonetic.js'
		},
		'hy-ephoneticalt': {
			name: 'Հնչյունային նոր (R→Ր, F→Թ)',
			source: 'rules/hy/hy-ephoneticalt.js'
		},
		'hy-typewriter': {
			name: 'Գրամեքենայի դասավորություն',
			source: 'rules/hy/hy-typewriter.js'
		},
		'hy-wmslegacy': {
			name: 'Մայքրոսոֆթի հին արևմտահայերեն',
			source: 'rules/hy/hy-wmslegacy.js'
		},
		'ig-tilde': {
			name: 'Igbo - tilde',
			source: 'rules/ig/ig-tilde.js'
		},
		'ipa-sil': {
			name: 'International Phonetic Alphabet - SIL',
			source: 'rules/fonipa/ipa-sil.js'
		},
		'ipa-x-sampa': {
			name: 'International Phonetic Alphabet - X-SAMPA',
			source: 'rules/fonipa/ipa-x-sampa.js'
		},
		'is-normforms': {
			name: 'Venjuleg eyðublöð',
			source: 'rules/is/is-normforms.js'
		},
		'jv-transliteration': {
			name: 'Transliteration',
			source: 'rules/jv/jv-transliteration.js'
		},
		'ka-kbd': {
			name: 'სტანდარტული კლავიატურის',
			source: 'rules/ka/ka-kbd.js'
		},
		'ka-transliteration': {
			name: 'ტრანსლიტერაცია',
			source: 'rules/ka/ka-transliteration.js'
		},
		'kab-tilde': {
			name: 'Taqbaylit Alatin tilde',
			source: 'rules/kab/kab-tilde.js'
		},
		'kbp-tilde': {
			name: 'Kabɩyɛ tilde',
			source: 'rules/kbp/kbp-tilde.js'
		},
		'ki-tilde': {
			name: 'Gĩkũyũ',
			source: 'rules/ki/ki-tilde.js'
		},
		'kk-arabic': {
			name: 'Kazakh Arabic transliteration',
			source: 'rules/kk/kk-arabic.js'
		},
		'kk-kbd': {
			name: 'Кирил',
			source: 'rules/kk/kk-kbd.js'
		},
		'km-nidakyk': {
			name: 'ក្តារ​ចុច​យូនីកូដ​ខ្មែរ (NiDA)',
			source: 'rules/km/km-nidakyk.js'
		},
		'kn-inscript': {
			name: 'ಇನ್ಸ್ಕ್ರಿಪ್ಟ್',
			source: 'rules/kn/kn-inscript.js'
		},
		'kn-inscript2': {
			name: 'ಇನ್\u200cಸ್ಕ್ರಿಪ್ಟ್ ೨',
			source: 'rules/kn/kn-inscript2.js'
		},
		'kn-kgp': {
			name: 'KGP/Nudi/KP Rao',
			source: 'rules/kn/kn-kgp.js'
		},
		'kn-transliteration': {
			name: 'ಲಿಪ್ಯಂತರಣ',
			source: 'rules/kn/kn-transliteration.js'
		},
		'ky-cyrl-alt': {
			name: 'Кыргыз Alt',
			source: 'rules/ky/ky-cyrl-alt.js'
		},
		'ks-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/ks/ks-inscript.js'
		},
		'ks-kbd': {
			name: 'Kashmiri Arabic',
			source: 'rules/ks/ks-kbd.js'
		},
		'ku-h': {
			name: 'Kurdî-h',
			source: 'rules/ku/ku-h.js'
		},
		'ku-tr': {
			name: 'Kurdî-tr',
			source: 'rules/ku/ku-tr.js'
		},
		'lg-tilde': {
			name: 'Luganda tilde',
			source: 'rules/lg/lg-tilde.js'
		},
		'ln-tilde': {
			name: 'Lingála tilde',
			source: 'rules/ln/ln-tilde.js'
		},
		'lo-kbd': {
			name: 'າຶກ',
			source: 'rules/lo/lo-kbd.js'
		},
		'lrc-kbd': {
			name: 'لۊری شومالی',
			source: 'rules/lrc/lrc-kbd.js'
		},
		'lud-transliteration': {
			name: 'lud',
			source: 'rules/lud/lud-transliteration.js'
		},
		'lut-tulalip': {
			name: 'Lushootseed Tulalip',
			source: 'rules/lut/lut-tulalip.js'
		},
		'mai-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/mai/mai-inscript.js',
			depends: 'hi-inscript'
		},
		'mai-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/mai/mai-inscript2.js',
			depends: 'hi-inscript2'
		},
		'mg-tilde': {
			name: 'Malagasy tilde',
			source: 'rules/mg/mg-tilde.js'
		},
		'mh': {
			name: 'Kajin M̧ajeļ',
			source: 'rules/mh/mh.js'
		},
		'ml-inscript': {
			name: 'ഇൻസ്ക്രിപ്റ്റ്',
			source: 'rules/ml/ml-inscript.js'
		},
		'ml-inscript2': {
			name: 'ഇൻസ്ക്രിപ്റ്റ് 2',
			source: 'rules/ml/ml-inscript2.js'
		},
		'ml-transliteration': {
			name: 'ലിപ്യന്തരണം',
			source: 'rules/ml/ml-transliteration.js'
		},
		'mn-cyrl': {
			name: 'Кирилл',
			source: 'rules/mn/mn-cyrl.js'
		},
		'mn-todo': {
			name: 'ᡐᡆᡑᡆ ᡋᡅᡔᡅᡎ᠌',
			source: 'rules/mn/mn-todo.js'
		},
		'mn-todoali': {
			name: 'Todo Mongolian Ali-gali',
			source: 'rules/mn/mn-todoali.js'
		},
		'mn-trad': {
			name: 'ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ᠌',
			source: 'rules/mn/mn-trad.js'
		},
		'mn-tradali': {
			name: 'Traditional Mongolian Ali-gali',
			source: 'rules/mn/mn-tradali.js'
		},
		'mnc': {
			name: 'ᠮᠠᠨᠵᡠ',
			source: 'rules/mnc/mnc.js'
		},
		'mnc-ali': {
			name: 'Manchu Ali-gali',
			source: 'rules/mnc/mnc-ali.js'
		},
		'mni-inscript2': {
			name: 'ইনস্ক্ৰিপ্ট ২',
			source: 'rules/mni/mni-inscript2.js'
		},
		'mr-inscript': {
			name: 'मराठी लिपी',
			source: 'rules/mr/mr-inscript.js'
		},
		'mr-inscript2': {
			name: 'मराठी इनस्क्रिप्ट २',
			source: 'rules/mr/mr-inscript2.js'
		},
		'mr-phonetic': {
			name: 'फोनेटिक',
			source: 'rules/mr/mr-phonetic.js'
		},
		'mr-transliteration': {
			name: 'अक्षरांतरण',
			source: 'rules/mr/mr-transliteration.js'
		},
		'my-mm3': {
			name: 'မြန်မာ၃ လက်ကွက်',
			source: 'rules/my/my-mm3.js'
		},
		'my-xkb': {
			name: 'မြန်မာဘာသာ xkb',
			source: 'rules/my/my-xkb.js'
		},
		'nb-normforms': {
			name: 'Normal transliterasjon',
			source: 'rules/nb/nb-normforms.js'
		},
		'nb-tildeforms': {
			name: 'Tildemerket transliterasjon',
			source: 'rules/nb/nb-tildeforms.js'
		},
		'ne-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/ne/ne-inscript.js'
		},
		'ne-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/ne/ne-inscript2.js'
		},
		'ne-rom': {
			name: 'Romanized',
			source: 'rules/ne/ne-rom.js'
		},
		'ne-trad': {
			name: 'Traditional',
			source: 'rules/ne/ne-trad.js'
		},
		'ne-transliteration': {
			name: 'ट्रांस्लितेरेशन',
			source: 'rules/ne/ne-transliteration.js'
		},
		'nqo-standard-qwerty': {
			name: "N'Ko standard QWERTY",
			source: 'rules/nqo/nqo-standard-qwerty.js'
		},
		'nqo-transliteration': {
			name: "N'Ko transliteration",
			source: 'rules/nqo/nqo-transliteration.js'
		},
		'nso-tilde': {
			name: 'Sesotho sa Leboa tilde',
			source: 'rules/nso/nso-tilde.js'
		},
		'or-inscript': {
			name: 'ଇନସ୍କ୍ରିପ୍ଟ',
			source: 'rules/or/or-inscript.js'
		},
		'or-inscript2': {
			name: 'ଇନସ୍କ୍ରିପ୍ଟ2',
			source: 'rules/or/or-inscript2.js'
		},
		'or-lekhani': {
			name: 'ଲେଖନୀ',
			source: 'rules/or/or-lekhani.js'
		},
		'or-OdiScript': {
			name: 'ଓଡ଼ିସ୍କ୍ରିପ୍ଟ',
			source: 'rules/or/or-OdiScript.js'
		},
		'or-phonetic': {
			name: 'ଫୋନେଟିକ',
			source: 'rules/or/or-phonetic.js'
		},
		'or-transliteration': {
			name: 'ଟ୍ରାନ୍ସଲିଟରେସନ',
			source: 'rules/or/or-transliteration.js'
		},
		'pa-inscript': {
			name: 'ਇਨਸਕ੍ਰਿਪਟ',
			source: 'rules/pa/pa-inscript.js'
		},
		'pa-inscript2': {
			name: 'ਇਨਸਕ੍ਰਿਪਟ2',
			source: 'rules/pa/pa-inscript2.js'
		},
		'pa-jhelum': {
			name: 'ਜੇਹਲਮ',
			source: 'rules/pa/pa-jhelum.js'
		},
		'pa-transliteration': {
			name: 'ਲਿਪਾਂਤਰਨ',
			source: 'rules/pa/pa-transliteration.js'
		},
		'pa-phonetic': {
			name: 'ਫੋਨੇਟਿਕ',
			source: 'rules/pa/pa-phonetic.js'
		},
		'phagspa': {
			name: 'PhagsPa',
			source: 'rules/mn/phagspa.js'
		},
		'pms': {
			name: 'Piemontèis',
			source: 'rules/pms/pms.js'
		},
		'roa-tara-GVU': {
			name: 'Tarandine',
			source: 'rules/roa-tara/roa-tara.js'
		},
		'ru-jcuken': {
			name: 'ЙЦУКЕН',
			source: 'rules/ru/ru-jcuken.js'
		},
		'ru-kbd': {
			name: 'кбд',
			source: 'rules/ru/ru-kbd.js'
		},
		'ru-phonetic': {
			name: 'фонетический',
			source: 'rules/ru/ru-phonetic.js'
		},
		'ru-yawerty': {
			name: 'yawerty',
			source: 'rules/ru/ru-yawerty.js'
		},
		'sa-iast': {
			name: 'Romanized',
			source: 'rules/sa/sa-iast.js'
		},
		'sa-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/sa/sa-inscript.js'
		},
		'sa-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sa/sa-inscript2.js'
		},
		'sa-transliteration': {
			name: 'लिप्यन्तरणम्',
			source: 'rules/sa/sa-transliteration.js'
		},
		'sah-transliteration': {
			name: 'Transliteration',
			source: 'rules/sah/sah-transliteration.js'
		},
		'sat-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sat/sat-inscript2.js'
		},
		'sat-inscript2-ol-chiki': {
			name: 'inscript2 ᱚᱞ ᱪᱤᱠᱤ',
			source: 'rules/sat/sat-inscript2-ol-chiki.js'
		},
		'sat-sarjom-baha': {
			name: 'sarjom baha',
			source: 'rules/sat/sat-sarjom-baha.js'
		},
		'sd-inscript2': {
			name: 'इनस्क्रिप्ट २',
			source: 'rules/sd/sd-inscript2.js'
		},
		'sdh-kbd': {
			name: 'کوردی خوارگ',
			source: 'rules/sdh/sdh-kbd.js'
		},
		'se-normforms': {
			name: 'Normal forms',
			source: 'rules/se/se-normforms.js'
		},
		'ses-tilde': {
			name: 'Koyraboro Senni tilde',
			source: 'rules/ses/ses-tilde.js'
		},
		'sg-tilde': {
			name: 'Sängö',
			source: 'rules/sg/sg-tilde.js'
		},
		'si-singlish': {
			name: 'සිංග්ලිෂ්',
			source: 'rules/si/si-singlish.js'
		},
		'si-wijesekara': {
			name: 'විජේසේකර',
			source: 'rules/si/si-wijesekara.js'
		},
		'sjo': {
			name: 'ᠰᡞᠪᡝ',
			source: 'rules/sjo/sjo.js'
		},
		'sk-kbd': {
			name: 'Štandardná',
			source: 'rules/sk/sk-kbd.js'
		},
		'sr-kbd': {
			name: 'Стандардна',
			source: 'rules/sr/sr-kbd.js'
		},
		'st-tilde': {
			name: 'Sesotho tilde',
			source: 'rules/st/st-tilde.js'
		},
		'sv-normforms': {
			name: 'Normal forms',
			source: 'rules/sv/sv-normforms.js'
		},
		'ta-99': {
			name: 'தமிழ்99',
			source: 'rules/ta/ta-99.js'
		},
		'ta-bamini': {
			name: 'பாமினி',
			source: 'rules/ta/ta-bamini.js'
		},
		'ta-inscript': {
			name: 'இன்ஸ்கிரிப்ட்',
			source: 'rules/ta/ta-inscript.js'
		},
		'ta-inscript2': {
			name: 'இன்ஸ்கிரிப்ட் 2',
			source: 'rules/ta/ta-inscript2.js'
		},
		'ta-transliteration': {
			name: 'எழுத்துப்பெயர்ப்பு',
			source: 'rules/ta/ta-transliteration.js'
		},
		'te-apple': {
			name: 'ఆపిల్',
			source: 'rules/te/te-apple.js'
		},
		'te-inscript': {
			name: 'ఇన్\u200dస్క్రిప్ట్',
			source: 'rules/te/te-inscript.js'
		},
		'te-inscript2': {
			name: 'ఇన్\u200dస్క్రిప్ట్ 2',
			source: 'rules/te/te-inscript2.js'
		},
		'te-modular': {
			name: 'మాడ్యులర్',
			source: 'rules/te/te-modular.js'
		},
		'te-transliteration': {
			name: 'లిప్యంతరీకరణ',
			source: 'rules/te/te-transliteration.js'
		},
		'th-kedmanee': {
			name: 'เกษมณี',
			source: 'rules/th/th-kedmanee.js'
		},
		'th-pattachote': {
			name: 'ปัตตะโชติ',
			source: 'rules/th/th-pattachote.js'
		},
		'ti-geezim': {
			name: 'ትግርኛ',
			source: 'rules/ti/ti-geezim.js'
		},
		'tig-geezim': {
			name: 'ትግረ',
			source: 'rules/tig/tig-geezim.js'
		},
		'udm-alt': {
			name: 'Удмурт ALT',
			source: 'rules/udm/udm-alt.js'
		},
		'ug-kbd': {
			name: 'Uyghur kbd',
			source: 'rules/ug/ug-kbd.js'
		},
		'uk-kbd': {
			name: 'кбд',
			source: 'rules/uk/uk-kbd.js'
		},
		'ur-phonetic': {
			name: 'صوتی',
			source: 'rules/ur/ur-phonetic.js'
		},
		'ur-transliteration': {
			name: 'ٹرانسلٹریشن',
			source: 'rules/ur/ur-transliteration.js'
		},
		'uz-kbd': {
			name: 'Uzbek kbd',
			source: 'rules/uz/uz-kbd.js'
		},
		've-tilde': {
			name: 'TshiVenḓa tilde',
			source: 'rules/ve/ve-tilde.js'
		},
		'vai-transliteration': {
			name: 'Vai transliteration',
			source: 'rules/vai/vai-transliteration.js'
		},
		'vec-GVU': {
			name: 'Vèneto',
			source: 'rules/vec/vec-GVU.js'
		},
		'wo-alt': {
			name: 'Wolof Alt',
			source: 'rules/wo/wo-alt.js'
		},
		'wo-tilde': {
			name: 'Wolof tilde',
			source: 'rules/wo/wo-tilde.js'
		},
		'yo-alt': {
			name: 'Yorùbá Alt',
			source: 'rules/yo/yo-alt.js'
		},
		'yo-tilde': {
			name: 'Yorùbá tilde',
			source: 'rules/yo/yo-tilde.js'
		},
		'zh-pinyin-transliteration': {
			name: '拼音符号输入法',
			source: 'rules/zh/zh-pinyin-transliteration.js'
		}
	} );
	/* eslint-disable quote-props */

	$.extend( $.ime.languages, {
		te: {
			autonym: 'తెలుగు',
			inputmethods: [ 'te-transliteration', 'te-inscript', 'te-inscript2', 'te-apple', 'te-modular' ]
		}
	} );

}( jQuery ) );
