'use strict';

/* ═══════════════════════════════════════════════════════
   THIÊN MỆNH — Tử Vi Calculation Engine
   Solar→Lunar · Mệnh Cục · An 14 Chính Tinh · Sao Phụ · Tứ Hóa
   Thuật toán dương→âm lịch: Hồ Ngọc Đức (vi.wikipedia)
═══════════════════════════════════════════════════════ */

/* ── helpers ── */
function _INT(d) { return Math.floor(d); }
function mod12(n) { return ((n % 12) + 12) % 12; }

const CHI  = ['Tý','Sửu','Dần','Mão','Thìn','Tị','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
const CAN  = ['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
const TIMEZONE = 7; // UTC+7 Vietnam

/* ══════════════════════════════════════════════════════
   1. DƯƠNG LỊCH → ÂM LỊCH  (Hồ Ngọc Đức algorithm)
══════════════════════════════════════════════════════ */
function jdFromDate(dd, mm, yy) {
  const a = _INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd = dd + _INT((153 * m + 2) / 5) + 365 * y + _INT(y / 4) - _INT(y / 100) + _INT(y / 400) - 32045;
  if (jd < 2299161) jd = dd + _INT((153 * m + 2) / 5) + 365 * y + _INT(y / 4) - 32083;
  return jd;
}

function jdToDate(jd) {
  let a, b, c;
  if (jd > 2299160) {
    a = jd + 32044;
    b = _INT((4 * a + 3) / 146097);
    c = a - _INT((b * 146097) / 4);
  } else { b = 0; c = jd + 32082; }
  const d = _INT((4 * c + 3) / 1461);
  const e = c - _INT((1461 * d) / 4);
  const m = _INT((5 * e + 2) / 153);
  return [e - _INT((153 * m + 2) / 5) + 1, m + 3 - 12 * _INT(m / 10), b * 100 + d - 4800 + _INT(m / 10)];
}

function newMoon(k) {
  const T = k / 1236.85, T2 = T * T, T3 = T2 * T, dr = Math.PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
  const M   = 359.2242  + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253  + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F   = 21.2964   + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 -= 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr) - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 += 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 -= 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
  C1 -= 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 += 0.001  * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (M + 2 * Mpr));
  const deltat = T < -11
    ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
    : -0.000278 + 0.000265 * T + 0.000262 * T2;
  return Jd1 + C1 - deltat;
}

function sunLongitude(jdn) {
  const T = (jdn - 2451545.0) / 36525, T2 = T * T, dr = Math.PI / 180;
  const M  = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T2;
  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);
  const omega  = 125.04 - 1934.136 * T;
  const Lambda = L0 + DL - 0.00569 - 0.00478 * Math.sin(omega * dr);
  let theta = Lambda * dr - Math.PI * 2 * _INT(Lambda * dr / (Math.PI * 2));
  if (theta < 0) theta += Math.PI * 2;
  return _INT(theta / Math.PI * 6);
}

function getLunarMonth11(yy, tz) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  let k = _INT(off / 29.530588853);
  let nm = newMoon(k);
  if (sunLongitude(nm + tz / 24) >= 9) nm = newMoon(k - 1);
  return nm;
}

function getLeapMonthOffset(a11, tz) {
  const k = _INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
  let i = 1, arc = sunLongitude(newMoon(k + i) + tz / 24), last = 0;
  do { last = arc; i++; arc = sunLongitude(newMoon(k + i) + tz / 24); } while (arc !== last && i < 14);
  return i - 1;
}

function solarToLunar(dd, mm, yyyy) {
  const tz = TIMEZONE;
  const dayNumber = jdFromDate(dd, mm, yyyy);
  const k = _INT((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = newMoon(k + 1);
  if (monthStart > dayNumber) monthStart = newMoon(k);

  let a11 = getLunarMonth11(yyyy, tz);
  let b11 = a11;
  let lunarYear, lunarLeap = false;
  if (a11 >= monthStart) {
    lunarYear = yyyy;
    a11 = getLunarMonth11(yyyy - 1, tz);
  } else {
    lunarYear = yyyy + 1;
    b11 = getLunarMonth11(yyyy + 1, tz);
  }

  const lunarDay = dayNumber - _INT(monthStart) + 1;
  const diff = _INT((monthStart - a11) / 29);
  let lunarMonth = diff + 11;

  if (b11 - a11 > 365) {
    const leapOff = getLeapMonthOffset(a11, tz);
    if (diff >= leapOff) {
      lunarMonth = diff + 10;
      if (diff === leapOff) lunarLeap = true;
    }
  }
  if (lunarMonth > 12) lunarMonth -= 12;
  if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
  return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: lunarLeap };
}

/* ══════════════════════════════════════════════════════
   2. CAN-CHI HELPERS
══════════════════════════════════════════════════════ */
function getCanChi(year) {
  return { can: mod12((year - 4) % 10), chi: mod12((year - 4) % 12) };
}

function gioToChi(hour) {
  // 23-1 = Tý, 1-3 = Sửu, ...
  return mod12(_INT(((hour + 1) % 24) / 2));
}

/* ══════════════════════════════════════════════════════
   3. NẠP ÂM → MỆNH CỤC
══════════════════════════════════════════════════════ */
// Key: 'canIndex-chiIndex', Value: ngũ hành nạp âm
const NAP_AM = {
  '0-0':'kim','1-1':'kim','2-2':'hoa','3-3':'hoa','4-4':'moc','5-5':'moc',
  '6-6':'tho','7-7':'tho','8-8':'kim','9-9':'kim','0-10':'hoa','1-11':'hoa',
  '2-0':'thuy','3-1':'thuy','4-2':'tho','5-3':'tho','6-4':'kim','7-5':'kim',
  '8-6':'moc','9-7':'moc','0-8':'thuy','1-9':'thuy','2-10':'tho','3-11':'tho',
  '4-0':'hoa','5-1':'hoa','6-2':'moc','7-3':'moc','8-4':'thuy','9-5':'thuy',
  '0-6':'kim','1-7':'kim','2-8':'hoa','3-9':'hoa','4-10':'moc','5-11':'moc',
  '6-0':'tho','7-1':'tho','8-2':'kim','9-3':'kim','0-4':'hoa','1-5':'hoa',
  '2-6':'thuy','3-7':'thuy','4-8':'tho','5-9':'tho','6-10':'kim','7-11':'kim',
  '8-0':'moc','9-1':'moc','0-2':'thuy','1-3':'thuy','2-4':'tho','3-5':'tho',
  '4-6':'hoa','5-7':'hoa','6-8':'moc','7-9':'moc','8-10':'thuy','9-11':'thuy'
};

const CUC_MAP = { kim: 4, moc: 3, thuy: 2, hoa: 6, tho: 5 };
const CUC_TEN = { 2:'Thủy Nhị Cục', 3:'Mộc Tam Cục', 4:'Kim Tứ Cục', 5:'Thổ Ngũ Cục', 6:'Hỏa Lục Cục' };

function getMenhCuc(canNam, chiNam) {
  const el = NAP_AM[`${canNam}-${chiNam}`] || 'tho';
  return CUC_MAP[el];
}

/* ══════════════════════════════════════════════════════
   4. MỆNH CUNG (from âm lịch month + birth hour)
══════════════════════════════════════════════════════ */
function getMenhCung(lunarMonth, hourChiIndex) {
  // Start at Dần (2) for month 1, advance thuận per month, then nghịch per hour
  return mod12(2 + (lunarMonth - 1) - hourChiIndex);
}

/* ══════════════════════════════════════════════════════
   5. AN 14 CHÍNH TINH
══════════════════════════════════════════════════════ */
function anChinhTinh(lunarDay, soCuc, lunarMonth) {
  // Tử Vi position
  const tuVi = mod12(1 + Math.ceil(lunarDay / soCuc));

  // Thiên Phủ: mirrors Tử Vi across Tị (sum = 4 mod 12)
  const thienPhu = mod12(4 - tuVi);

  // Bắc Đẩu (from Tử Vi)
  const thienCo    = mod12(tuVi - 1);
  const vuKhuc     = mod12(tuVi + 2);
  const thienDong  = mod12(tuVi + 3);
  const liemTrinh  = mod12(tuVi + 5);
  const phaQuan    = mod12(tuVi + 6);   // opposite TuVi

  // Derived (opposition pairs)
  const thienLuong = mod12(thienCo   + 6);
  const thamLang   = mod12(vuKhuc    + 6);
  const thienTuong = mod12(thienDong + 6);
  const cuMon      = mod12(liemTrinh + 6);
  const thietSat   = mod12(thienPhu  + 6);

  // Thái Dương/Thái Âm: based on lunar month
  const thaiDuong  = mod12(lunarMonth + 1);
  const thaiAm     = mod12(thaiDuong  + 6);

  return {
    tu_vi:       tuVi,
    thien_co:    thienCo,
    thai_duong:  thaiDuong,
    vu_khuc:     vuKhuc,
    thien_dong:  thienDong,
    liem_trinh:  liemTrinh,
    thien_phu:   thienPhu,
    thai_am:     thaiAm,
    tham_lang:   thamLang,
    cu_mon:      cuMon,
    thien_tuong: thienTuong,
    thien_luong: thienLuong,
    thiet_sat:   thietSat,
    pha_quan:    phaQuan
  };
}

/* ══════════════════════════════════════════════════════
   6. AN SAO PHỤ
══════════════════════════════════════════════════════ */
// Nhóm tam hợp của Chi
function tamHopGroup(chiIndex) {
  if ([2,6,10].includes(chiIndex)) return 'dan_ngo_tuat'; // Dần Ngọ Tuất
  if ([8,0,4].includes(chiIndex))  return 'than_ty_thin'; // Thân Tý Thìn
  if ([5,9,1].includes(chiIndex))  return 'ti_dau_suu';   // Tị Dậu Sửu
  return 'hoi_mao_mui';                                    // Hợi Mão Mùi
}

function anSaoPhu(canNam, chiNam, lunarMonth, hourChi) {
  const sao = {};

  // Lộc Tồn (theo can năm): Giáp-Dần, Ất-Mão, Bính/Mậu-Tị, Đinh/Kỷ-Ngọ, Canh-Thân, Tân-Dậu, Nhâm-Hợi, Quý-Tý
  const locTonPos = [2,3,5,6,5,6,8,9,11,0];
  sao.loc_ton   = locTonPos[canNam];
  sao.kinh_duong = mod12(sao.loc_ton + 1);
  sao.da_la      = mod12(sao.loc_ton - 1);

  // Thiên Mã (theo chi năm)
  const maMap = { 0:8, 1:11, 2:5, 3:2, 4:8, 5:11, 6:5, 7:2, 8:5, 9:2, 10:8, 11:11 };
  // Dần/Ngọ/Tuất → Thân(8), Thân/Tý/Thìn → Dần(2), Tị/Dậu/Sửu → Hợi(11), Hợi/Mão/Mùi → Tị(5)
  const maArr = [8,11,5,2,8,11,5,2,8,11,5,2]; // indexed by chiNam
  // Correct mapping:
  const thienMaArr = { 0:8,1:11,2:5,3:2,4:8,5:11,6:5,7:2,8:5,9:2,10:8,11:11 };
  // Dần(2)→Thân(8), Ngọ(6)→Thân(8), Tuất(10)→Thân(8)
  // Thân(8)→Dần(2), Tý(0)→Dần(2), Thìn(4)→Dần(2)
  // Tị(5)→Hợi(11), Dậu(9)→Hợi(11), Sửu(1)→Hợi(11)
  // Hợi(11)→Tị(5), Mão(3)→Tị(5), Mùi(7)→Tị(5)
  const maFull = [2,11,8,5,2,11,8,5,2,11,8,5]; // Tý=2... wait
  // Let me index correctly:
  // chiNam: 0=Tý,1=Sửu,2=Dần,3=Mão,4=Thìn,5=Tị,6=Ngọ,7=Mùi,8=Thân,9=Dậu,10=Tuất,11=Hợi
  // Tý(0)→Dần(2), Sửu(1)→Hợi(11), Dần(2)→Thân(8), Mão(3)→Tị(5),
  // Thìn(4)→Dần(2), Tị(5)→Hợi(11), Ngọ(6)→Thân(8), Mùi(7)→Tị(5),
  // Thân(8)→Dần(2), Dậu(9)→Hợi(11), Tuất(10)→Thân(8), Hợi(11)→Tị(5)
  const thienMaByNam = [2,11,8,5,2,11,8,5,2,11,8,5];
  sao.thien_ma = thienMaByNam[chiNam];

  // Hỏa Tinh (start theo chi năm, advance thuận theo giờ)
  const hoaStart = { dan_ngo_tuat:1, than_ty_thin:3, ti_dau_suu:5, hoi_mao_mui:9 };
  const nhomChi = tamHopGroup(chiNam);
  sao.hoa_tinh  = mod12(hoaStart[nhomChi] + hourChi);

  // Linh Tinh (start theo chi năm, advance nghịch theo giờ)
  const linhStart = { dan_ngo_tuat:10, than_ty_thin:10, ti_dau_suu:10, hoi_mao_mui:10 };
  // Some sources differ; using Tuất(10) as common start
  const linhStartArr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  // Standard: Dần/Ngọ/Tuất→Mão(3) nghịch, Thân/Tý/Thìn→Tuất(10) nghịch
  //           Tị/Dậu/Sửu→Dậu(9) nghịch, Hợi/Mão/Mùi→Thìn(4) nghịch
  const linhMap = { dan_ngo_tuat:3, than_ty_thin:10, ti_dau_suu:9, hoi_mao_mui:4 };
  sao.linh_tinh = mod12(linhMap[nhomChi] - hourChi);

  // Văn Xương (nghịch từ Tuất theo chi năm: Tý→Tuất, Sửu→Dậu, ...)
  sao.van_xuong = mod12(10 - chiNam);

  // Văn Khúc (thuận từ Thìn theo chi năm: Tý→Thìn, Sửu→Tị, ...)
  sao.van_khuc  = mod12(4 + chiNam);

  // Tả Phù (thuận từ Dần theo tháng âm)
  sao.ta_phu    = mod12(1 + lunarMonth);

  // Hữu Bật (nghịch từ Tuất theo tháng âm)
  sao.huu_bat   = mod12(11 - lunarMonth);

  // Thiên Khôi & Thiên Việt (theo can năm)
  const khoiArr = [1,11,0,0,1,11,0,0,3,5];  // Giáp/Mậu→Sửu, Ất/Kỷ→Tý, Bính/Đinh→Tý...
  // Standard: Giáp/Mậu→Khôi Sửu Việt Mùi; Ất/Kỷ→Khôi Tý Việt Thân; Bính/Đinh→Khôi Hợi Việt Dậu
  //           Canh/Tân→Khôi Ngọ/Dần Việt Mùi/Mão; Nhâm/Quý→Khôi Mão/Tị Việt Tị
  const khoi = [1,0,11,11,1,0,6,5,3,5]; // by canNam index
  const viet = [7,8,9,9,7,8,7,3,5,5];
  sao.thien_khoi = khoi[canNam];
  sao.thien_viet = viet[canNam];

  // Địa Không (nghịch từ Hợi theo giờ: Giờ Tý → Hợi)
  sao.dia_khong = mod12(11 - hourChi);

  // Địa Kiếp (thuận từ Hợi theo giờ)
  sao.dia_kiep  = mod12(11 + hourChi);

  // Hồng Loan (nghịch từ Mão theo chi năm: Tý→Mão, Sửu→Dần, ...)
  sao.hong_loan = mod12(3 - chiNam);

  // Thiên Hỷ (đối diện Hồng Loan)
  sao.thien_hy  = mod12(sao.hong_loan + 6);

  // Thiên Hình (thuận từ Dậu theo tháng)
  sao.thien_hinh = mod12(9 + lunarMonth - 1);

  // Thiên Tướng Tinh / Thiên Không: đơn giản hóa
  sao.thien_khoc = mod12(6 + chiNam);    // Thiên Khốc (nghịch từ Ngọ)
  sao.thien_hu   = mod12(0 - chiNam);    // Thiên Hư (thuận từ Tý)

  // Đào Hoa (theo chi năm, tứ mộ = Sửu, Mão, Ngọ, Dậu)
  const daohoa = [1,10,1,10,7,4,7,4,1,10,1,10];
  sao.dao_hoa = daohoa[chiNam];

  return sao;
}

/* ══════════════════════════════════════════════════════
   7. TỨ HÓA (theo can năm sinh)
══════════════════════════════════════════════════════ */
const TU_HOA_TABLE = {
  0: { loc:'liem_trinh', quyen:'pha_quan',   khoa:'vu_khuc',    ky:'thai_duong' }, // Giáp
  1: { loc:'thien_co',  quyen:'thien_luong', khoa:'tu_vi',      ky:'thai_am'   }, // Ất
  2: { loc:'thien_dong',quyen:'thiet_sat',   khoa:'van_xuong',  ky:'liem_trinh'}, // Bính
  3: { loc:'thai_am',   quyen:'thien_dong',  khoa:'thien_co',   ky:'cu_mon'    }, // Đinh
  4: { loc:'tham_lang', quyen:'thai_am',     khoa:'vu_khuc',    ky:'thien_co'  }, // Mậu
  5: { loc:'vu_khuc',   quyen:'tham_lang',   khoa:'thien_luong',ky:'van_khuc'  }, // Kỷ
  6: { loc:'thai_duong',quyen:'vu_khuc',     khoa:'thai_am',    ky:'thien_dong'}, // Canh
  7: { loc:'vu_khuc',   quyen:'thai_am',     khoa:'van_xuong',  ky:'van_khuc'  }, // Tân
  8: { loc:'thien_luong',quyen:'tu_vi',      khoa:'tham_lang',  ky:'vu_khuc'   }, // Nhâm
  9: { loc:'pha_quan',  quyen:'cu_mon',      khoa:'thai_am',    ky:'tham_lang' }  // Quý
};

/* ══════════════════════════════════════════════════════
   8. AN 12 CUNG
══════════════════════════════════════════════════════ */
const CUNG_ORDER = ['menh','huynh_de','phu_the','tu_nu','tai_bach','tat_ach',
                    'thien_di','no_boc','quan_loc','dien_trach','phuc_duc','phu_mau'];

function buildCungMap(menhChi) {
  // Mệnh at menhChi, then thuận for Huynh Đệ, Phu Thê, ...
  const map = {}; // cungId → chiIndex
  CUNG_ORDER.forEach((id, i) => { map[id] = mod12(menhChi + i); });
  return map;
}

/* ══════════════════════════════════════════════════════
   9. MIẾU-HÃM (cường độ sao theo cung chi)
══════════════════════════════════════════════════════ */
const MIEU_HAM = {
  tu_vi:      { mieu:[2,6,10,4],     ham:[0,3]  },
  thien_co:   { mieu:[3,7,11,9],     ham:[0,6]  },
  thai_duong:  { mieu:[2,3,4,5],      ham:[10,11,0,1] },
  vu_khuc:    { mieu:[5,9,1,4],      ham:[3,11] },
  thien_dong: { mieu:[0,3,7,11],     ham:[6,10] },
  liem_trinh:  { mieu:[2,6,10],       ham:[0,3,9]},
  thien_phu:  { mieu:[0,4,8,1],      ham:[3,9]  },
  thai_am:    { mieu:[0,1,11,9],     ham:[6,7]  },
  tham_lang:  { mieu:[2,6,10],       ham:[8,0,4]},
  cu_mon:     { mieu:[0,4,8,2],      ham:[6,10,7]},
  thien_tuong:{ mieu:[0,4,8,2,6,10], ham:[]     },
  thien_luong:{ mieu:[8,0,4,2],      ham:[3,9]  },
  thiet_sat:  { mieu:[2,6,10,5,9,1], ham:[4,10,1,7]},
  pha_quan:   { mieu:[8,0,4],        ham:[2,6,10]}
};

function getStarStrength(starId, chiIndex) {
  const info = MIEU_HAM[starId];
  if (!info) return 'binh';
  if (info.mieu.includes(chiIndex)) return 'mieu';
  if (info.ham.includes(chiIndex))  return 'ham';
  return 'binh';
}

/* ══════════════════════════════════════════════════════
   10. PHÁT HIỆN TỔ HỢP ĐẶC BIỆT TRONG LÁ SỐ
══════════════════════════════════════════════════════ */
function detectToHop(chiTinh, saoPhu, cungMap) {
  const found = [];
  const menhChi = cungMap.menh;

  // Hỏa/Linh Tham Cách: Tham Lang + Hỏa hoặc Linh ở cùng cung
  if (chiTinh.tham_lang === saoPhu.hoa_tinh || chiTinh.tham_lang === saoPhu.linh_tinh) {
    found.push('hoa_tham_cach');
  }
  // Lộc Mã Giao Trì: Lộc Tồn + Thiên Mã đồng cung hoặc hội chiếu
  if (saoPhu.loc_ton === saoPhu.thien_ma) found.push('loc_ma_giao_tri');
  // Không Kiếp xung Mệnh
  if (saoPhu.dia_khong === menhChi || saoPhu.dia_kiep === menhChi) found.push('khong_kiep_xung_menh');
  // Khôi Việt song chiếu Mệnh
  if (saoPhu.thien_khoi === menhChi && saoPhu.thien_viet === menhChi) found.push('khoi_viet_xuat_hien');
  // Văn Khoa song chiếu Mệnh/Quan Lộc
  const quanLoc = cungMap.quan_loc;
  if ((saoPhu.van_xuong === menhChi || saoPhu.van_xuong === quanLoc) &&
      (saoPhu.van_khuc  === menhChi || saoPhu.van_khuc  === quanLoc)) {
    found.push('van_khoa_song_quan');
  }
  // Kình Dương nhập Miếu (Quan Lộc)
  if (saoPhu.kinh_duong === quanLoc && [0,6,3,9].includes(saoPhu.kinh_duong)) {
    found.push('kinh_duong_nhap_mieu');
  }
  // Tả Hữu song phù Mệnh
  if (saoPhu.ta_phu === menhChi && saoPhu.huu_bat === menhChi) found.push('ta_huu_cong_phu');
  // Liêm Thất (hung): Liêm Trinh + Thất Sát ở Mệnh hoặc Tật Ách
  const tatAch = cungMap.tat_ach;
  if ((chiTinh.liem_trinh === chiTinh.thiet_sat) &&
      (chiTinh.liem_trinh === menhChi || chiTinh.liem_trinh === tatAch)) {
    found.push('liem_trinh_thiet_sat');
  }

  return found;
}

/* ══════════════════════════════════════════════════════
   11. MAIN FUNCTION: TÍNH LÁ SỐ
══════════════════════════════════════════════════════ */
function tinhLaSo({ solarYear, solarMonth, solarDay, birthHour = 12, gender = 'nam' }) {
  // Bước 1: âm lịch
  const lunar = solarToLunar(solarDay, solarMonth, solarYear);

  // Bước 2: can-chi năm sinh (dương lịch)
  const { can: canNam, chi: chiNam } = getCanChi(solarYear);

  // Bước 3: can-chi năm âm (for display)
  const { can: canNamAm, chi: chiNamAm } = getCanChi(lunar.year);

  // Bước 4: giờ sinh → chi giờ
  const gioChiIndex = gioToChi(birthHour);

  // Bước 5: mệnh cục
  const soCuc = getMenhCuc(canNam, chiNam);

  // Bước 6: mệnh cung
  const menhChi = getMenhCung(lunar.month, gioChiIndex);

  // Bước 7: 12 cung map
  const cungMap = buildCungMap(menhChi);

  // Bước 8: an 14 chính tinh
  const chiTinh = anChinhTinh(lunar.day, soCuc, lunar.month);

  // Bước 9: an sao phụ
  const saoPhu = anSaoPhu(canNam, chiNam, lunar.month, gioChiIndex);

  // Bước 10: tứ hóa
  const tuHoa = TU_HOA_TABLE[canNam];

  // Bước 11: xây board — map mỗi chi → { cung, sao[], tuHoa[] }
  const board = {};
  for (let i = 0; i < 12; i++) {
    board[i] = { chiIndex: i, chi: CHI[i], cungId: null, sao: [], tuHoa: [] };
  }

  // Gán cung
  Object.entries(cungMap).forEach(([cungId, chi]) => { board[chi].cungId = cungId; });

  // Gán chính tinh
  Object.entries(chiTinh).forEach(([starId, chi]) => {
    board[chi].sao.push({ id: starId, loai: 'chinh', strength: getStarStrength(starId, chi) });
  });

  // Gán sao phụ
  const saoPhuLoai = {
    loc_ton:'cat', kinh_duong:'hung', da_la:'hung', thien_ma:'cat',
    hoa_tinh:'hung', linh_tinh:'hung', van_xuong:'cat', van_khuc:'cat',
    ta_phu:'cat', huu_bat:'cat', thien_khoi:'cat', thien_viet:'cat',
    dia_khong:'hung', dia_kiep:'hung', hong_loan:'trung', thien_hy:'trung',
    thien_hinh:'hung', thien_khoc:'hung', thien_hu:'hung', dao_hoa:'trung'
  };
  Object.entries(saoPhu).forEach(([starId, chi]) => {
    if (typeof chi === 'number') {
      board[chi].sao.push({ id: starId, loai: 'phu', type: saoPhuLoai[starId] || 'trung' });
    }
  });

  // Gán tứ hóa
  Object.entries(tuHoa).forEach(([hoa, starId]) => {
    const chi = chiTinh[starId] ?? saoPhu[starId];
    if (typeof chi === 'number') board[chi].tuHoa.push({ star: starId, hoa });
  });

  // Bước 12: phát hiện tổ hợp
  const toHop = detectToHop(chiTinh, saoPhu, cungMap);

  // Bước 13: thông tin ngũ hành mệnh
  const napAmEl  = NAP_AM[`${canNam}-${chiNam}`] || 'tho';
  const ngHanhMenh = { moc:'Mộc', hoa:'Hỏa', tho:'Thổ', kim:'Kim', thuy:'Thủy' };

  return {
    input: { solarYear, solarMonth, solarDay, birthHour, gender },
    lunar,
    canNam, chiNam,
    canNamAm, chiNamAm,
    namSinhText: `${CAN[canNam]} ${CHI[chiNam]} (${solarYear})`,
    namAmText: `${CAN[canNamAm]} ${CHI[chiNamAm]} (${lunar.year})`,
    gioChiIndex,
    gioText: CHI[gioChiIndex],
    soCuc,
    cucTen: CUC_TEN[soCuc],
    menhChi,
    menhChiText: CHI[menhChi],
    napAmNguHanh: ngHanhMenh[napAmEl],
    cungMap,
    chiTinh,
    saoPhu,
    tuHoa,
    board,
    toHop
  };
}

/* ── Export ── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tinhLaSo, solarToLunar, getCanChi, CHI, CAN };
}
