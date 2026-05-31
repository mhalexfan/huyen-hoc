'use strict';

/* ═══════════════════════════════════════════════════════
   THIÊN MỆNH — Tử Vi UI Renderer
   Render board 12 cung · Star detail panel · Tổ hợp panel
═══════════════════════════════════════════════════════ */

/* ── Tên hiển thị cho sao ── */
const STAR_DISPLAY = {
  // Chính tinh
  tu_vi:'Tử Vi', thien_co:'Thiên Cơ', thai_duong:'Thái Dương', vu_khuc:'Vũ Khúc',
  thien_dong:'Thiên Đồng', liem_trinh:'Liêm Trinh', thien_phu:'Thiên Phủ',
  thai_am:'Thái Âm', tham_lang:'Tham Lang', cu_mon:'Cự Môn',
  thien_tuong:'Thiên Tướng', thien_luong:'Thiên Lương', thiet_sat:'Thất Sát', pha_quan:'Phá Quân',
  // Sao phụ
  loc_ton:'Lộc Tồn', kinh_duong:'Kình Dương', da_la:'Đà La', thien_ma:'Thiên Mã',
  hoa_tinh:'Hỏa Tinh', linh_tinh:'Linh Tinh', van_xuong:'Văn Xương', van_khuc:'Văn Khúc',
  ta_phu:'Tả Phù', huu_bat:'Hữu Bật', thien_khoi:'Thiên Khôi', thien_viet:'Thiên Việt',
  dia_khong:'Địa Không', dia_kiep:'Địa Kiếp', hong_loan:'Hồng Loan', thien_hy:'Thiên Hỷ',
  thien_hinh:'Thiên Hình', thien_khoc:'Thiên Khốc', thien_hu:'Thiên Hư', dao_hoa:'Đào Hoa'
};

const CUNG_DISPLAY = {
  menh:'Mệnh', huynh_de:'Huynh Đệ', phu_the:'Phu Thê', tu_nu:'Tử Nữ',
  tai_bach:'Tài Bạch', tat_ach:'Tật Ách', thien_di:'Thiên Di', no_boc:'Nô Bộc',
  quan_loc:'Quan Lộc', dien_trach:'Điền Trạch', phuc_duc:'Phúc Đức', phu_mau:'Phụ Mẫu'
};

const TU_HOA_DISPLAY = { loc:'Hóa Lộc', quyen:'Hóa Quyền', khoa:'Hóa Khoa', ky:'Hóa Kỵ' };

// Biểu tượng và màu cho từng loại sao
const CHINH_TINH_STYLE = {
  tu_vi:'cat', thien_co:'cat', thai_duong:'cat', vu_khuc:'cat', thien_dong:'cat',
  liem_trinh:'mixed', thien_phu:'cat', thai_am:'cat', tham_lang:'mixed',
  cu_mon:'mixed', thien_tuong:'cat', thien_luong:'cat', thiet_sat:'mixed', pha_quan:'mixed'
};

const STAR_ICON = {
  cat:'✦', hung:'✕', trung:'○', mixed:'◈',
  loc_ton:'禄', thien_ma:'馬', van_xuong:'文', van_khuc:'曲',
  ta_phu:'左', huu_bat:'右', thien_khoi:'魁', thien_viet:'鉞',
  kinh_duong:'羊', da_la:'羅', hoa_tinh:'火', linh_tinh:'鈴',
  dia_khong:'空', dia_kiep:'劫', hong_loan:'鸞', thien_hy:'喜',
  thien_hinh:'刑', thien_khoc:'哭', thien_hu:'虛', dao_hoa:'桃'
};

/* ── Board cell positions: [row, col] → chi index ── */
const BOARD_LAYOUT = [
  // row 0: top row  (Tị=5, Ngọ=6, Mùi=7, Thân=8)
  [0,0,5], [0,1,6], [0,2,7], [0,3,8],
  // row 1: left+right (Thìn=4, Dậu=9)
  [1,0,4], [1,3,9],
  // row 2: left+right (Mão=3, Tuất=10)
  [2,0,3], [2,3,10],
  // row 3: bottom row (Dần=2, Sửu=1, Tý=0, Hợi=11)
  [3,0,2], [3,1,1], [3,2,0], [3,3,11]
];

/* ═══════════════════════════════════════════════════════
   RENDER BOARD
═══════════════════════════════════════════════════════ */
function renderBoard(lasoData) {
  const container = document.getElementById('tuvi-board-container');
  if (!container) return;

  container.innerHTML = '';

  // Meta bar
  container.appendChild(buildMetaBar(lasoData));

  // Board grid
  const board = document.createElement('div');
  board.className = 'tuvi-board';

  // Build chi→cell lookup
  const cellByPos = {}; // 'row-col' → element

  // Create 16 cells (4×4)
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const key = `${r}-${c}`;
      // center 2×2
      if (r >= 1 && r <= 2 && c >= 1 && c <= 2) {
        if (r === 1 && c === 1) {
          const center = document.createElement('div');
          center.className = 'tuvi-board__center';
          center.style.gridColumn = '2 / 4';
          center.style.gridRow = '2 / 4';
          center.innerHTML = `
            <svg class="center-logo" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="rgba(201,168,76,0.3)" stroke-width="1.5"/>
              <circle cx="20" cy="20" r="10" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
              <circle cx="20" cy="20" r="3" fill="rgba(201,168,76,0.3)"/>
              <line x1="20" y1="2" x2="20" y2="8" stroke="rgba(201,168,76,0.3)" stroke-width="1.5"/>
              <line x1="20" y1="32" x2="20" y2="38" stroke="rgba(201,168,76,0.3)" stroke-width="1.5"/>
              <line x1="2" y1="20" x2="8" y2="20" stroke="rgba(201,168,76,0.3)" stroke-width="1.5"/>
              <line x1="32" y1="20" x2="38" y2="20" stroke="rgba(201,168,76,0.3)" stroke-width="1.5"/>
            </svg>
            <div class="center-text">${lasoData.namSinhText}</div>
            <div class="center-text" style="font-size:0.75rem;opacity:0.6">${lasoData.cucTen}</div>`;
          board.appendChild(center);
        }
        continue;
      }
      cellByPos[key] = null; // placeholder
    }
  }

  // Place palace cells
  BOARD_LAYOUT.forEach(([row, col, chiIdx]) => {
    const palaceData = lasoData.board[chiIdx];
    const cell = buildPalaceCell(palaceData, lasoData.menhChi, lasoData);
    cell.style.gridRow    = `${row + 1}`;
    cell.style.gridColumn = `${col + 1}`;
    board.appendChild(cell);
  });

  container.appendChild(board);

  // Detail panel placeholder
  const detailPanel = document.createElement('div');
  detailPanel.id = 'star-detail-panel';
  detailPanel.className = 'star-detail-panel';
  container.appendChild(detailPanel);

  // Tổ hợp panel
  if (lasoData.toHop.length > 0) {
    container.appendChild(buildToHopPanel(lasoData.toHop));
  }
}

/* ── Build meta bar ── */
function buildMetaBar(d) {
  const bar = document.createElement('div');
  bar.className = 'tuvi-meta-bar';
  const items = [
    ['Năm sinh', d.namSinhText],
    ['Năm âm', d.namAmText],
    ['Âm lịch', `${d.lunar.day}/${d.lunar.month}/${d.lunar.year}${d.lunar.leap?' (nhuận)':''}`],
    ['Giờ sinh', d.gioText],
    ['Mệnh Cục', d.cucTen],
    ['Mệnh Cung', `${CUNG_DISPLAY.menh} — ${d.menhChiText}`],
    ['Nạp Âm', d.napAmNguHanh]
  ];
  items.forEach(([label, value]) => {
    bar.innerHTML += `<div class="meta-chip">
      <span class="meta-chip__label">${label}</span>
      <span class="meta-chip__value">${value}</span>
    </div>`;
  });
  return bar;
}

/* ── Build one palace cell ── */
function buildPalaceCell(data, menhChi, lasoData) {
  const cell = document.createElement('div');
  cell.className = 'palace' + (data.chiIndex === menhChi ? ' is-menh' : '');
  cell.dataset.chi = data.chiIndex;

  const cungName = data.cungId ? CUNG_DISPLAY[data.cungId] : '';
  const isMenh = data.cungId === 'menh';

  // Header
  cell.innerHTML = `<div class="palace__head">
    <span class="palace__chi">${data.chi}</span>
    <span class="palace__cung ${isMenh ? 'is-menh-cung' : ''}">${cungName}</span>
  </div>`;

  // Stars
  const starsDiv = document.createElement('div');
  starsDiv.className = 'palace__stars';

  // Separate chính tinh and sao phụ
  const chinhTinh = data.sao.filter(s => s.loai === 'chinh');
  const saoPhu    = data.sao.filter(s => s.loai === 'phu');

  chinhTinh.forEach(s => {
    const style = CHINH_TINH_STYLE[s.id] || 'cat';
    const badge = document.createElement('span');
    badge.className = `star-badge chinh-${style} ${s.strength || ''}`;
    badge.textContent = STAR_DISPLAY[s.id] || s.id;
    badge.title = STAR_DISPLAY[s.id] || s.id;
    badge.addEventListener('click', (e) => { e.stopPropagation(); showStarDetail(s.id, 'chinh', lasoData); });
    starsDiv.appendChild(badge);
  });

  saoPhu.forEach(s => {
    const badge = document.createElement('span');
    badge.className = `star-badge phu-${s.type || 'trung'}`;
    const icon = STAR_ICON[s.id] || '';
    badge.innerHTML = icon ? `<span style="font-size:0.65rem;opacity:0.7">${icon}</span>${STAR_DISPLAY[s.id] || s.id}` : (STAR_DISPLAY[s.id] || s.id);
    badge.title = STAR_DISPLAY[s.id] || s.id;
    badge.addEventListener('click', (e) => { e.stopPropagation(); showStarDetail(s.id, 'phu', lasoData); });
    starsDiv.appendChild(badge);
  });

  cell.appendChild(starsDiv);

  // Tứ hóa
  if (data.tuHoa.length > 0) {
    const tHoaDiv = document.createElement('div');
    tHoaDiv.className = 'palace__tuHoa';
    data.tuHoa.forEach(th => {
      tHoaDiv.innerHTML += `<span class="tuhoa-badge ${th.hoa}">${TU_HOA_DISPLAY[th.hoa]}</span>`;
    });
    cell.appendChild(tHoaDiv);
  }

  cell.addEventListener('click', () => showPalaceDetail(data, lasoData));
  return cell;
}

/* ── Star detail panel ── */
function showStarDetail(starId, loai, lasoData) {
  const panel = document.getElementById('star-detail-panel');
  if (!panel) return;

  let starInfo = null;
  let loaiStr  = '';

  if (loai === 'chinh' && typeof CHINH_TINH !== 'undefined') {
    starInfo = CHINH_TINH.find(s => s.id === starId);
    loaiStr  = 'Chính Tinh';
  }
  if (!starInfo && typeof SAO_PHU !== 'undefined') {
    starInfo = [...SAO_PHU.catTinh, ...SAO_PHU.hungTinh, ...SAO_PHU.trungTinh].find(s => s.id === starId);
    loaiStr  = 'Sao Phụ';
  }

  const name     = STAR_DISPLAY[starId] || starId;
  const style    = loai === 'chinh' ? (CHINH_TINH_STYLE[starId] || 'cat') : (starInfo?.loai || 'trung');
  const moTa     = starInfo?.moTa || '';
  const dacTinh  = starInfo?.dacTinh || starInfo?.hieu_ung || [];
  const menhCach = starInfo?.menhCach || '';

  // Tứ hóa for this star
  const tuHoaInfo = lasoData.tuHoa[Object.keys(lasoData.tuHoa).find(k => lasoData.tuHoa[k] === starId)];

  panel.innerHTML = `
    <div class="sdp-header">
      <div class="sdp-icon ${style}">✦</div>
      <div class="sdp-title">
        <div class="sdp-name">${name}</div>
        <div class="sdp-sub">${loaiStr} · ${starInfo?.hanViet || ''} · ${starInfo?.nguHanh ? nguHanhTen(starInfo.nguHanh) : ''}</div>
      </div>
      <button class="sdp-close" onclick="closeSdp()">✕</button>
    </div>
    <div class="sdp-body">
      <div class="sdp-section">
        <h4>Ý Nghĩa</h4>
        <p class="sdp-desc">${moTa || 'Chưa có mô tả.'}</p>
      </div>
      <div class="sdp-section">
        <h4>Đặc Tính</h4>
        <div class="sdp-tags">
          ${dacTinh.map(t => `<span class="sdp-tag">${t}</span>`).join('')}
        </div>
        ${menhCach ? `<h4 style="margin-top:1rem">Thủ Mệnh</h4><p class="sdp-desc" style="font-size:0.82rem">${menhCach}</p>` : ''}
      </div>
    </div>`;

  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Palace detail (click cung) ── */
function showPalaceDetail(palaceData, lasoData) {
  const panel = document.getElementById('star-detail-panel');
  if (!panel) return;

  const cungName = palaceData.cungId ? CUNG_DISPLAY[palaceData.cungId] : palaceData.chi;
  let cungInfo = null;
  if (typeof MUOI_HAI_CUNG !== 'undefined') {
    cungInfo = MUOI_HAI_CUNG.find(c => c.id === palaceData.cungId);
  }

  const starList = palaceData.sao.map(s => {
    const n = STAR_DISPLAY[s.id] || s.id;
    const cls = s.loai === 'chinh' ? `chinh-${CHINH_TINH_STYLE[s.id]||'cat'}` : `phu-${s.type||'trung'}`;
    return `<span class="star-badge ${cls}" style="cursor:default">${n}</span>`;
  }).join('');

  const tuHoaList = palaceData.tuHoa.map(th =>
    `<span class="tuhoa-badge ${th.hoa}">${TU_HOA_DISPLAY[th.hoa]} · ${STAR_DISPLAY[th.star]||th.star}</span>`
  ).join(' ');

  panel.innerHTML = `
    <div class="sdp-header">
      <div class="sdp-icon cat" style="font-family:'Cormorant Garamond',serif;font-size:1rem">${palaceData.chi}</div>
      <div class="sdp-title">
        <div class="sdp-name">Cung ${cungName}</div>
        <div class="sdp-sub">Chi ${palaceData.chi}</div>
      </div>
      <button class="sdp-close" onclick="closeSdp()">✕</button>
    </div>
    <div class="sdp-body">
      <div class="sdp-section">
        <h4>Ý Nghĩa Cung</h4>
        <p class="sdp-desc">${cungInfo?.moTa || ''}</p>
        ${cungInfo?.chiPhoi?.length ? `<div class="sdp-tags" style="margin-top:0.5rem">${cungInfo.chiPhoi.map(t=>`<span class="sdp-tag">${t}</span>`).join('')}</div>` : ''}
      </div>
      <div class="sdp-section">
        <h4>Sao Trong Cung</h4>
        <div class="palace__stars">${starList || '<span style="color:rgba(255,255,255,0.3);font-size:0.8rem">Không có sao</span>'}</div>
        ${tuHoaList ? `<div class="palace__tuHoa" style="margin-top:0.75rem">${tuHoaList}</div>` : ''}
      </div>
    </div>`;

  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeSdp() {
  const panel = document.getElementById('star-detail-panel');
  if (panel) panel.classList.remove('visible');
}

/* ── Tổ hợp panel ── */
function buildToHopPanel(toHopIds) {
  const wrapper = document.createElement('div');
  wrapper.className = 'tohop-list';
  wrapper.innerHTML = `<div class="tohop-title">✦ Tổ Hợp Đặc Biệt Trong Lá Số</div>`;
  const grid = document.createElement('div');
  grid.className = 'tohop-grid';

  toHopIds.forEach(id => {
    if (typeof TO_HOP_SAO === 'undefined') return;
    const info = TO_HOP_SAO.find(t => t.id === id);
    if (!info) return;
    const cls = info.loai === 'cat' ? 'cat' : info.loai === 'hung' ? 'hung' : 'mixed';
    const card = document.createElement('div');
    card.className = `tohop-card ${cls}`;
    card.innerHTML = `<div class="tohop-card__name">${info.ten}</div>
      <div class="tohop-card__desc">${info.moTa}</div>`;
    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

/* ── Helper ── */
function nguHanhTen(nh) {
  const map = { kim:'Kim', moc:'Mộc', thuy:'Thủy', hoa:'Hỏa', tho:'Thổ' };
  return map[nh] || nh;
}

/* ═══════════════════════════════════════════════════════
   FORM HANDLER
═══════════════════════════════════════════════════════ */
function initLaSoForm() {
  const form = document.getElementById('laso-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const year  = parseInt(document.getElementById('laso-year').value);
    const month = parseInt(document.getElementById('laso-month').value);
    const day   = parseInt(document.getElementById('laso-day').value);
    const hour  = parseInt(document.getElementById('laso-hour').value);
    const gender = document.getElementById('laso-gender').value;

    if (!year || !month || !day) return;

    try {
      const result = tinhLaSo({ solarYear: year, solarMonth: month, solarDay: day, birthHour: hour, gender });
      renderBoard(result);
      document.getElementById('tuvi-board-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      console.error('Lỗi tính lá số:', err);
      const c = document.getElementById('tuvi-board-container');
      if (c) c.innerHTML = `<p style="color:#e87070;text-align:center">Có lỗi xảy ra: ${err.message}</p>`;
    }
  });
}

/* ── Auto-init sample chart on page load ── */
function renderSampleChart() {
  try {
    const sample = tinhLaSo({ solarYear: 1990, solarMonth: 5, solarDay: 15, birthHour: 7, gender: 'nam' });
    renderBoard(sample);
  } catch(e) { console.warn('Sample chart error:', e); }
}

document.addEventListener('DOMContentLoaded', () => {
  initLaSoForm();
  renderSampleChart();
});
