export type Route = {
  region: string;
  country: string;
  city: string;
  airport: string;
  code: string;
};

export const routes: Route[] = [
  // ─── East Asia ───
  { region: "East Asia", country: "China", city: "Beijing", airport: "Beijing Capital Intl", code: "PEK" },
  { region: "East Asia", country: "China", city: "Changsha", airport: "Changsha Huanghua Intl", code: "CSX" },
  { region: "East Asia", country: "China", city: "Dalian", airport: "Dalian Zhoushuizi Intl", code: "DLC" },
  { region: "East Asia", country: "China", city: "Fuzhou", airport: "Fuzhou Changle Intl", code: "FOC" },
  { region: "East Asia", country: "China", city: "Guangzhou", airport: "Guangzhou Baiyun Intl", code: "CAN" },
  { region: "East Asia", country: "China", city: "Hangzhou", airport: "Hangzhou Xiaoshan Intl", code: "HGH" },
  { region: "East Asia", country: "China", city: "Hefei", airport: "Hefei Xinqiao Intl", code: "HFE" },
  { region: "East Asia", country: "China", city: "Kunming", airport: "Kunming Changshui Intl", code: "KMG" },
  { region: "East Asia", country: "China", city: "Mudanjiang", airport: "Mudanjiang Hailang Intl", code: "MDG" },
  { region: "East Asia", country: "China", city: "Nanjing", airport: "Nanjing Lukou Intl", code: "NKG" },
  { region: "East Asia", country: "China", city: "Qingdao", airport: "Qingdao Jiaodong Intl", code: "TAO" },
  { region: "East Asia", country: "China", city: "Shanghai", airport: "Shanghai Hongqiao Intl", code: "SHA" },
  { region: "East Asia", country: "China", city: "Shanghai", airport: "Shanghai Pudong Intl", code: "PVG" },
  { region: "East Asia", country: "China", city: "Shenyang", airport: "Shenyang Taoxian Intl", code: "SHE" },
  { region: "East Asia", country: "China", city: "Shenzhen", airport: "Shenzhen Bao'an Intl", code: "SZX" },
  { region: "East Asia", country: "China", city: "Tianjin", airport: "Tianjin Binhai Intl", code: "TSN" },
  { region: "East Asia", country: "China", city: "Wuhan", airport: "Wuhan Tianhe Intl", code: "WUH" },
  { region: "East Asia", country: "China", city: "Xi'an", airport: "Xi'an Xianyang Intl", code: "XIY" },
  { region: "East Asia", country: "China", city: "Xiamen", airport: "Xiamen Gaoqi Intl", code: "XMN" },
  { region: "East Asia", country: "China", city: "Yanji", airport: "Yanji Chaoyangchuan Intl", code: "YNJ" },
  { region: "East Asia", country: "China", city: "Zhangjiajie", airport: "Zhangjiajie Hehua Intl", code: "DYG" },
  { region: "East Asia", country: "China", city: "Zhengzhou", airport: "Zhengzhou Xinzheng Intl", code: "CGO" },
  { region: "East Asia", country: "Hong Kong", city: "Hong Kong", airport: "Hong Kong Intl", code: "HKG" },
  { region: "East Asia", country: "Macau", city: "Macau", airport: "Macau Intl", code: "MFM" },
  { region: "East Asia", country: "Mongolia", city: "Ulaanbaatar", airport: "Chinggis Khaan Intl", code: "UBN" },
  { region: "East Asia", country: "Taiwan", city: "Taichung", airport: "Taichung Intl", code: "RMQ" },
  { region: "East Asia", country: "Taiwan", city: "Taipei", airport: "Taoyuan Intl", code: "TPE" },

  // ─── Japan ───
  { region: "Japan", country: "Japan", city: "Aomori", airport: "Aomori Airport", code: "AOJ" },
  { region: "Japan", country: "Japan", city: "Fukuoka", airport: "Fukuoka Airport", code: "FUK" },
  { region: "Japan", country: "Japan", city: "Kagoshima", airport: "Kagoshima Airport", code: "KOJ" },
  { region: "Japan", country: "Japan", city: "Kobe", airport: "Kobe Airport", code: "UKB" },
  { region: "Japan", country: "Japan", city: "Komatsu", airport: "Komatsu Airport", code: "KMQ" },
  { region: "Japan", country: "Japan", city: "Kumamoto", airport: "Kumamoto Airport", code: "KMJ" },
  { region: "Japan", country: "Japan", city: "Nagasaki", airport: "Nagasaki Airport", code: "NGS" },
  { region: "Japan", country: "Japan", city: "Nagoya", airport: "Chubu Centrair Intl", code: "NGO" },
  { region: "Japan", country: "Japan", city: "Niigata", airport: "Niigata Airport", code: "KIJ" },
  { region: "Japan", country: "Japan", city: "Oita", airport: "Oita Airport", code: "OIT" },
  { region: "Japan", country: "Japan", city: "Okayama", airport: "Okayama Airport", code: "OKJ" },
  { region: "Japan", country: "Japan", city: "Okinawa", airport: "Naha Airport", code: "OKA" },
  { region: "Japan", country: "Japan", city: "Osaka", airport: "Kansai Intl", code: "KIX" },
  { region: "Japan", country: "Japan", city: "Sapporo", airport: "New Chitose Airport", code: "CTS" },
  { region: "Japan", country: "Japan", city: "Tokyo", airport: "Haneda Intl", code: "HND" },
  { region: "Japan", country: "Japan", city: "Tokyo", airport: "Narita Intl", code: "NRT" },

  // ─── Southeast Asia ───
  { region: "Southeast Asia", country: "Cambodia", city: "Phnom Penh", airport: "Techo Intl", code: "PNH" },
  { region: "Southeast Asia", country: "Cambodia", city: "Siem Reap", airport: "Siem Reap–Angkor Intl", code: "SAI" },
  { region: "Southeast Asia", country: "Indonesia", city: "Denpasar (Bali)", airport: "Ngurah Rai Intl", code: "DPS" },
  { region: "Southeast Asia", country: "Indonesia", city: "Jakarta", airport: "Soekarno–Hatta Intl", code: "CGK" },
  { region: "Southeast Asia", country: "Malaysia", city: "Kuala Lumpur", airport: "Kuala Lumpur Intl", code: "KUL" },
  { region: "Southeast Asia", country: "Myanmar", city: "Yangon", airport: "Yangon Intl", code: "RGN" },
  { region: "Southeast Asia", country: "Philippines", city: "Cebu", airport: "Mactan–Cebu Intl", code: "CEB" },
  { region: "Southeast Asia", country: "Philippines", city: "Manila", airport: "Ninoy Aquino Intl", code: "MNL" },
  { region: "Southeast Asia", country: "Singapore", city: "Singapore", airport: "Changi Airport", code: "SIN" },
  { region: "Southeast Asia", country: "Thailand", city: "Bangkok", airport: "Suvarnabhumi Intl", code: "BKK" },
  { region: "Southeast Asia", country: "Thailand", city: "Chiang Mai", airport: "Chiang Mai Intl", code: "CNX" },
  { region: "Southeast Asia", country: "Thailand", city: "Phuket", airport: "Phuket Intl", code: "HKT" },
  { region: "Southeast Asia", country: "Vietnam", city: "Da Nang", airport: "Da Nang Intl", code: "DAD" },
  { region: "Southeast Asia", country: "Vietnam", city: "Hanoi", airport: "Noi Bai Intl", code: "HAN" },
  { region: "Southeast Asia", country: "Vietnam", city: "Ho Chi Minh City", airport: "Tan Son Nhat Intl", code: "SGN" },
  { region: "Southeast Asia", country: "Vietnam", city: "Nha Trang", airport: "Cam Ranh Intl", code: "CXR" },
  { region: "Southeast Asia", country: "Vietnam", city: "Phu Quoc", airport: "Phu Quoc Intl", code: "PQC" },

  // ─── South Asia & Middle East ───
  { region: "South & Central Asia", country: "India", city: "Delhi", airport: "Indira Gandhi Intl", code: "DEL" },
  { region: "South & Central Asia", country: "Nepal", city: "Kathmandu", airport: "Tribhuvan Intl", code: "KTM" },
  { region: "South & Central Asia", country: "Uzbekistan", city: "Tashkent", airport: "Tashkent Intl", code: "TAS" },
  { region: "South & Central Asia", country: "UAE", city: "Dubai", airport: "Dubai Intl", code: "DXB" },
  { region: "South & Central Asia", country: "Turkey", city: "Istanbul", airport: "Istanbul Airport", code: "IST" },

  // ─── Europe ───
  { region: "Europe", country: "Austria", city: "Vienna", airport: "Vienna Intl", code: "VIE" },
  { region: "Europe", country: "Czech Republic", city: "Prague", airport: "Václav Havel Airport", code: "PRG" },
  { region: "Europe", country: "France", city: "Paris", airport: "Charles de Gaulle", code: "CDG" },
  { region: "Europe", country: "Germany", city: "Frankfurt", airport: "Frankfurt Airport", code: "FRA" },
  { region: "Europe", country: "Hungary", city: "Budapest", airport: "Ferenc Liszt Intl", code: "BUD" },
  { region: "Europe", country: "Italy", city: "Milan", airport: "Milan Malpensa", code: "MXP" },
  { region: "Europe", country: "Italy", city: "Rome", airport: "Fiumicino Airport", code: "FCO" },
  { region: "Europe", country: "Netherlands", city: "Amsterdam", airport: "Schiphol Airport", code: "AMS" },
  { region: "Europe", country: "Portugal", city: "Lisbon", airport: "Lisbon Airport", code: "LIS" },
  { region: "Europe", country: "Spain", city: "Madrid", airport: "Madrid–Barajas", code: "MAD" },
  { region: "Europe", country: "Switzerland", city: "Zürich", airport: "Zürich Intl", code: "ZRH" },
  { region: "Europe", country: "United Kingdom", city: "London", airport: "Heathrow Intl", code: "LHR" },

  // ─── Americas ───
  { region: "Americas", country: "Canada", city: "Toronto", airport: "Pearson Intl", code: "YYZ" },
  { region: "Americas", country: "Canada", city: "Vancouver", airport: "Vancouver Intl", code: "YVR" },
  { region: "Americas", country: "United States", city: "Atlanta", airport: "Hartsfield–Jackson Intl", code: "ATL" },
  { region: "Americas", country: "United States", city: "Boston", airport: "Logan Intl", code: "BOS" },
  { region: "Americas", country: "United States", city: "Chicago", airport: "O'Hare Intl", code: "ORD" },
  { region: "Americas", country: "United States", city: "Dallas", airport: "DFW Intl", code: "DFW" },
  { region: "Americas", country: "United States", city: "Honolulu", airport: "Daniel K. Inouye Intl", code: "HNL" },
  { region: "Americas", country: "United States", city: "Las Vegas", airport: "Harry Reid Intl", code: "LAS" },
  { region: "Americas", country: "United States", city: "Los Angeles", airport: "LAX Intl", code: "LAX" },
  { region: "Americas", country: "United States", city: "New York", airport: "JFK Intl", code: "JFK" },
  { region: "Americas", country: "United States", city: "San Francisco", airport: "SFO Intl", code: "SFO" },
  { region: "Americas", country: "United States", city: "Seattle", airport: "Seattle–Tacoma Intl", code: "SEA" },
  { region: "Americas", country: "United States", city: "Washington D.C.", airport: "Dulles Intl", code: "IAD" },

  // ─── Oceania & Pacific ───
  { region: "Oceania & Pacific", country: "Australia", city: "Brisbane", airport: "Brisbane Airport", code: "BNE" },
  { region: "Oceania & Pacific", country: "Australia", city: "Sydney", airport: "Sydney Airport", code: "SYD" },
  { region: "Oceania & Pacific", country: "Guam", city: "Hagåtña", airport: "A.B. Won Pat Intl", code: "GUM" },
  { region: "Oceania & Pacific", country: "New Zealand", city: "Auckland", airport: "Auckland Airport", code: "AKL" },
];

export const regions = [...new Set(routes.map((r) => r.region))];
