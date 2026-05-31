'use strict';

/* ═══════════════════════════════════════════════════════
   THIÊN MỆNH — Dữ Liệu Tử Vi Đẩu Số
   Bao gồm: 14 Chính Tinh · Sao Phụ · 12 Cung · Tứ Hóa · Tương Quan
═══════════════════════════════════════════════════════ */

/* ── 1. CHÍNH TINH (14 sao chủ) ── */
const CHINH_TINH = [
  {
    id: 'tu_vi',
    ten: 'Tử Vi',
    hanViet: '紫微',
    nhom: 'bac_dau',
    nguHanh: 'tho',
    amDuong: 'am',
    loai: 'cat',
    dacTinh: ['Lãnh đạo', 'Uy quyền', 'Tự trọng cao', 'Bảo thủ', 'Quý nhân'],
    moTa: 'Đế tinh, chúa tể Bắc Đẩu, tượng trưng cho vua chúa và quyền lực tối cao. Người có Tử Vi thủ mệnh thường mang khí chất lãnh đạo bẩm sinh, tự trọng cao, không chịu khuất phục. Có uy quyền nhưng dễ cô độc.',
    menhCach: 'Tử Vi thủ mệnh: Khí phách đế vương, ưa độc lập, thích quản lý điều hành. Dễ thành công trong lĩnh vực chính trị, quản lý cấp cao.',
    cungTot: ['menh', 'quan_loc', 'dien_trach', 'phuc_duc'],
    cungXau: ['tat_ach', 'no_boc'],
    dungThanh: ['Dần', 'Ngọ', 'Tuất', 'Thìn'],
    hamDia: ['Tý', 'Mão'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thien_phu', 'thiet_sat', 'tham_lang', 'cu_mon', 'thien_tuong', 'thien_luong', 'pha_quan']
  },
  {
    id: 'thien_co',
    ten: 'Thiên Cơ',
    hanViet: '天機',
    nhom: 'bac_dau',
    nguHanh: 'moc',
    amDuong: 'am',
    loai: 'cat',
    dacTinh: ['Thông minh', 'Mưu trí', 'Linh hoạt', 'Đa mưu', 'Tâm linh'],
    moTa: 'Sao mưu trí, tượng trưng cho trí tuệ và sự khéo léo. Người có Thiên Cơ thủ mệnh thông minh, nhạy bén, giỏi tính toán và hoạch định chiến lược. Thiện về tâm linh, triết học và những lĩnh vực đòi hỏi tư duy.',
    menhCach: 'Thiên Cơ thủ mệnh: Trí tuệ xuất chúng, giỏi mưu lược, thích nghề tư vấn, nghiên cứu, tâm linh hoặc IT.',
    cungTot: ['menh', 'quan_loc', 'phuc_duc', 'phu_mau'],
    cungXau: ['tat_ach', 'huynh_de'],
    dungThanh: ['Mão', 'Mùi', 'Hợi', 'Dậu'],
    hamDia: ['Tý', 'Ngọ'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thai_am']
  },
  {
    id: 'thai_duong',
    ten: 'Thái Dương',
    hanViet: '太陽',
    nhom: 'bac_dau',
    nguHanh: 'hoa',
    amDuong: 'duong',
    loai: 'cat',
    dacTinh: ['Hào phóng', 'Nhiệt tình', 'Danh tiếng', 'Phúc lộc', 'Công danh'],
    moTa: 'Mặt trời, tượng trưng cho ánh sáng, danh vọng và uy tín. Người có Thái Dương thủ mệnh thường nổi tiếng, hào phóng, nhiệt tình giúp đỡ người khác. Đặc biệt tốt cho nam giới về phương diện công danh.',
    menhCach: 'Thái Dương thủ mệnh: Danh tiếng, hào phóng, ưa hoạt động xã hội. Tốt cho nghề chính trị, truyền thông, giảng dạy.',
    cungTot: ['menh', 'quan_loc', 'phu_the', 'no_boc'],
    cungXau: ['tai_bach', 'thien_di'],
    dungThanh: ['Dần', 'Mão', 'Thìn', 'Tị'],
    hamDia: ['Tuất', 'Hợi', 'Tý', 'Sửu'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thai_am', 'cu_mon']
  },
  {
    id: 'vu_khuc',
    ten: 'Vũ Khúc',
    hanViet: '武曲',
    nhom: 'bac_dau',
    nguHanh: 'kim',
    amDuong: 'am',
    loai: 'cat',
    dacTinh: ['Tài lộc', 'Quyết đoán', 'Cương trực', 'Tiết kiệm', 'Cô độc'],
    moTa: 'Tài tinh, sao chủ về tài chính và kinh doanh. Người có Vũ Khúc thủ mệnh cương trực, quyết đoán, có tài kinh doanh và quản lý tài chính. Dễ cô độc trong tình cảm nhưng thành công về vật chất.',
    menhCach: 'Vũ Khúc thủ mệnh: Giỏi kinh doanh, quản lý tài chính, ý chí mạnh mẽ. Phù hợp ngành tài chính, quân sự, kỹ thuật.',
    cungTot: ['menh', 'tai_bach', 'quan_loc', 'dien_trach'],
    cungXau: ['phu_the', 'tu_nu'],
    dungThanh: ['Tị', 'Dậu', 'Sửu', 'Thìn'],
    hamDia: ['Mão', 'Hợi'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thiet_sat', 'pha_quan', 'tham_lang']
  },
  {
    id: 'thien_dong',
    ten: 'Thiên Đồng',
    hanViet: '天同',
    nhom: 'bac_dau',
    nguHanh: 'thuy',
    amDuong: 'duong',
    loai: 'cat',
    dacTinh: ['Phúc thọ', 'Nhân từ', 'Hưởng thụ', 'Thụ động', 'Bình an'],
    moTa: 'Phúc tinh, sao chủ về phúc đức và sự an nhàn. Người có Thiên Đồng thủ mệnh hiền lành, nhân từ, thích cuộc sống thoải mái. Ít tranh giành, dễ được quý nhân giúp đỡ. Hưởng phúc muộn.',
    menhCach: 'Thiên Đồng thủ mệnh: Phúc hậu, an nhàn, không thích áp lực. Phù hợp nghề dịch vụ, giáo dục, nghệ thuật.',
    cungTot: ['menh', 'phuc_duc', 'phu_the', 'tu_nu'],
    cungXau: ['quan_loc', 'tai_bach'],
    dungThanh: ['Tý', 'Mão', 'Mùi', 'Hợi'],
    hamDia: ['Ngọ', 'Tuất'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['cu_mon', 'liem_trinh']
  },
  {
    id: 'liem_trinh',
    ten: 'Liêm Trinh',
    hanViet: '廉貞',
    nhom: 'bac_dau',
    nguHanh: 'hoa',
    amDuong: 'am',
    loai: 'hung_cat',
    dacTinh: ['Tự ái', 'Đam mê', 'Nghệ thuật', 'Ái tình', 'Nguy hiểm'],
    moTa: 'Sao tù nhân, có tính chất phức tạp — vừa hung vừa cát. Người có Liêm Trinh thủ mệnh có cá tính mạnh, tự ái cao, giỏi nghệ thuật, dễ gặp chuyện thị phi hoặc tai nạn nếu không có sao tốt hội chiếu.',
    menhCach: 'Liêm Trinh thủ mệnh: Cá tính mạnh, đam mê nghệ thuật/tình cảm. Cần sao cát hội chiếu để hóa hung thành cát.',
    cungTot: ['quan_loc', 'thien_di', 'phuc_duc'],
    cungXau: ['menh', 'tat_ach', 'no_boc'],
    dungThanh: ['Dần', 'Ngọ', 'Tuất'],
    hamDia: ['Tý', 'Mão', 'Dậu'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thien_phu', 'tham_lang', 'thiet_sat', 'pha_quan', 'thien_tuong']
  },
  {
    id: 'thien_phu',
    ten: 'Thiên Phủ',
    hanViet: '天府',
    nhom: 'nam_dau',
    nguHanh: 'tho',
    amDuong: 'duong',
    loai: 'cat',
    dacTinh: ['Phú quý', 'Bảo thủ', 'Trách nhiệm', 'Ổn định', 'Khoan dung'],
    moTa: 'Kho báu thiên đình, tượng trưng cho sự giàu có và ổn định. Người có Thiên Phủ thủ mệnh cẩn thận, có trách nhiệm, giỏi bảo tồn tài sản. Ít phiêu lưu nhưng cuộc sống sung túc.',
    menhCach: 'Thiên Phủ thủ mệnh: Phú quý bền vững, ổn định, giỏi quản lý tài sản. Phù hợp ngành tài chính, bất động sản.',
    cungTot: ['menh', 'tai_bach', 'dien_trach', 'quan_loc'],
    cungXau: ['tat_ach'],
    dungThanh: ['Tý', 'Thìn', 'Thân', 'Sửu'],
    hamDia: ['Mão', 'Dậu'],
    tuHoa: [],
    hdiId: ['tu_vi']
  },
  {
    id: 'thai_am',
    ten: 'Thái Âm',
    hanViet: '太陰',
    nhom: 'nam_dau',
    nguHanh: 'thuy',
    amDuong: 'am',
    loai: 'cat',
    dacTinh: ['Dịu dàng', 'Tình cảm', 'Thẩm mỹ', 'Trực giác', 'Nội tâm'],
    moTa: 'Mặt trăng, tượng trưng cho tài lộc, gia đình và nữ tính. Người có Thái Âm thủ mệnh nhạy cảm, có thẩm mỹ tốt, nội tâm phong phú. Tốt cho nữ giới, nam giới dễ bị nữ giới ảnh hưởng mạnh.',
    menhCach: 'Thái Âm thủ mệnh: Nhạy cảm, nghệ thuật, có duyên với tài lộc từ bất động sản. Phù hợp nghề nghệ thuật, thiết kế.',
    cungTot: ['menh', 'tai_bach', 'phu_the', 'dien_trach'],
    cungXau: ['quan_loc', 'thien_di'],
    dungThanh: ['Tý', 'Sửu', 'Hợi', 'Dậu'],
    hamDia: ['Ngọ', 'Mùi'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thai_duong', 'thien_co']
  },
  {
    id: 'tham_lang',
    ten: 'Tham Lang',
    hanViet: '貪狼',
    nhom: 'nam_dau',
    nguHanh: 'moc_thuy',
    amDuong: 'duong',
    loai: 'hung_cat',
    dacTinh: ['Đa dục', 'Tài năng đa dạng', 'Đào hoa', 'Tham vọng', 'Nghệ thuật'],
    moTa: 'Sao đa tài đa nghệ, chủ về dục vọng và tham vọng. Người có Tham Lang thủ mệnh có nhiều tài năng, hấp dẫn, nhưng dễ phân tâm vì nhiều đam mê. Có khả năng về nghệ thuật, kinh doanh và các lĩnh vực sáng tạo.',
    menhCach: 'Tham Lang thủ mệnh: Đa tài, hấp dẫn, nhiều đam mê. Dễ thành công ở tuổi trung niên. Phù hợp nghề nghệ thuật, kinh doanh dịch vụ.',
    cungTot: ['quan_loc', 'thien_di', 'tai_bach'],
    cungXau: ['menh', 'tat_ach'],
    dungThanh: ['Dần', 'Ngọ', 'Tuất'],
    hamDia: ['Thân', 'Tý', 'Thìn'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['vu_khuc', 'tu_vi', 'liem_trinh']
  },
  {
    id: 'cu_mon',
    ten: 'Cự Môn',
    hanViet: '巨門',
    nhom: 'nam_dau',
    nguHanh: 'thuy',
    amDuong: 'am',
    loai: 'hung_cat',
    dacTinh: ['Ngôn ngữ', 'Thị phi', 'Nghi ngờ', 'Biện luận', 'Học thuật'],
    moTa: 'Sao ám khí, chủ về khẩu thiệt và thị phi. Người có Cự Môn thủ mệnh có khả năng ngôn ngữ xuất sắc, giỏi tranh luận nhưng dễ gặp thị phi. Thiện về nghiên cứu, tư vấn pháp lý, y học.',
    menhCach: 'Cự Môn thủ mệnh: Giỏi ngôn ngữ, phân tích. Dễ gặp thị phi nếu không kiểm soát lời nói. Phù hợp nghề luật, y, nghiên cứu.',
    cungTot: ['quan_loc', 'phuc_duc', 'phu_mau'],
    cungXau: ['menh', 'tat_ach', 'no_boc'],
    dungThanh: ['Tý', 'Thìn', 'Thân', 'Dần'],
    hamDia: ['Ngọ', 'Tuất', 'Mùi'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thai_duong', 'thien_dong']
  },
  {
    id: 'thien_tuong',
    ten: 'Thiên Tướng',
    hanViet: '天相',
    nhom: 'nam_dau',
    nguHanh: 'thuy',
    amDuong: 'duong',
    loai: 'cat',
    dacTinh: ['Chính trực', 'Ấn quan', 'Hỗ trợ', 'Quan liêu', 'Bảo vệ'],
    moTa: 'Sao ấn tín và quan chức, chủ về pháp lý và hành chính. Người có Thiên Tướng thủ mệnh chính trực, có uy tín trong công việc, giỏi về hành chính và pháp lý. Là người hỗ trợ tốt cho người khác.',
    menhCach: 'Thiên Tướng thủ mệnh: Chính trực, uy tín, giỏi hành chính. Phù hợp nghề công chức, luật, quản lý nhân sự.',
    cungTot: ['menh', 'quan_loc', 'phu_mau'],
    cungXau: ['no_boc'],
    dungThanh: ['Tý', 'Thìn', 'Thân', 'Dần', 'Ngọ', 'Tuất'],
    hamDia: [],
    tuHoa: [],
    hdiId: ['tu_vi', 'liem_trinh']
  },
  {
    id: 'thien_luong',
    ten: 'Thiên Lương',
    hanViet: '天梁',
    nhom: 'nam_dau',
    nguHanh: 'tho',
    amDuong: 'duong',
    loai: 'cat',
    dacTinh: ['Trưởng lão', 'Y dược', 'Phúc thọ', 'Cứu giúp', 'Đạo đức'],
    moTa: 'Sao trưởng lão và phúc thọ, chủ về y học và cứu người. Người có Thiên Lương thủ mệnh có lòng từ bi, thích giúp đỡ người khác, hưởng thọ. Thường có xu hướng về y học, tôn giáo hoặc các nghề cứu người.',
    menhCach: 'Thiên Lương thủ mệnh: Nhân từ, thích cứu giúp người, hưởng thọ. Phù hợp nghề y, công tác xã hội, tôn giáo.',
    cungTot: ['menh', 'phuc_duc', 'tat_ach', 'phu_mau'],
    cungXau: ['tai_bach'],
    dungThanh: ['Thân', 'Tý', 'Thìn', 'Dần'],
    hamDia: ['Mão', 'Dậu'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['thiet_sat', 'thien_co']
  },
  {
    id: 'thiet_sat',
    ten: 'Thất Sát',
    hanViet: '七殺',
    nhom: 'nam_dau',
    nguHanh: 'kim_hoa',
    amDuong: 'duong',
    loai: 'hung_cat',
    dacTinh: ['Cương mãnh', 'Quyết đoán', 'Sát phạt', 'Độc lập', 'Mạo hiểm'],
    moTa: 'Sao sát tướng, tượng trưng cho sức mạnh và quyết đoán. Người có Thất Sát thủ mệnh cương trực, quyết liệt, không sợ khó khăn. Tốt cho nghề võ, quân sự, nhưng dễ gặp tai họa nếu có hung tinh hội chiếu.',
    menhCach: 'Thất Sát thủ mệnh: Ý chí sắt đá, thích thách thức. Phù hợp nghề quân sự, cảnh sát, thể thao, phẫu thuật.',
    cungTot: ['quan_loc', 'thien_di'],
    cungXau: ['menh', 'tat_ach', 'no_boc'],
    dungThanh: ['Dần', 'Ngọ', 'Tuất', 'Tị', 'Dậu', 'Sửu'],
    hamDia: ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    tuHoa: ['loc', 'quyen', 'khoa'],
    hdiId: ['tu_vi', 'vu_khuc', 'liem_trinh']
  },
  {
    id: 'pha_quan',
    ten: 'Phá Quân',
    hanViet: '破軍',
    nhom: 'nam_dau',
    nguHanh: 'thuy',
    amDuong: 'am',
    loai: 'hung_cat',
    dacTinh: ['Phá cũ tạo mới', 'Cá tính', 'Liều lĩnh', 'Sáng tạo', 'Biến động'],
    moTa: 'Sao phá hoại và cải cách, tượng trưng cho sự thay đổi mạnh mẽ. Người có Phá Quân thủ mệnh cá tính mạnh, không ngại phá vỡ cái cũ để tạo ra cái mới. Cuộc đời nhiều biến động nhưng dễ thành công ở giai đoạn sau.',
    menhCach: 'Phá Quân thủ mệnh: Cá tính mạnh, thích cải cách, cuộc đời nhiều thăng trầm. Phù hợp nghề sáng tạo, khởi nghiệp, cải cách.',
    cungTot: ['quan_loc', 'thien_di', 'tai_bach'],
    cungXau: ['menh', 'phu_the', 'tu_nu'],
    dungThanh: ['Thân', 'Tý', 'Thìn'],
    hamDia: ['Dần', 'Ngọ', 'Tuất'],
    tuHoa: ['loc', 'quyen', 'khoa', 'ky'],
    hdiId: ['vu_khuc', 'tu_vi']
  }
];

/* ── 2. SAO PHỤ ── */
const SAO_PHU = {

  /* === CÁT TINH === */
  catTinh: [
    {
      id: 'loc_ton',
      ten: 'Lộc Tồn',
      hanViet: '祿存',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao tài lộc và an ổn. Giúp bảo vệ tài sản, mang lại ổn định vật chất. Đi kèm với Kình Dương và Đà La (tam hội Lộc Mã). Đơn thủ dễ cô độc.',
      hieu_ung: ['Bảo vệ tài sản', 'Ổn định tài chính', 'Cô độc nếu đơn thủ'],
      cungTot: ['tai_bach', 'menh', 'quan_loc'],
      tuongTac: { tot: ['thien_ma', 'tu_vi', 'thien_phu'], xau: ['kinh_duong', 'da_la'] }
    },
    {
      id: 'van_xuong',
      ten: 'Văn Xương',
      hanViet: '文昌',
      nguHanh: 'kim',
      loai: 'cat',
      moTa: 'Sao văn học và khoa cử. Mang lại tài năng văn chương, học hành xuất sắc. Tốt cho thi cử, sự nghiệp học thuật.',
      hieu_ung: ['Tài năng văn chương', 'Học hành tốt', 'Uy tín danh tiếng', 'Thi cử đỗ đạt'],
      cungTot: ['menh', 'quan_loc', 'phu_mau'],
      tuongTac: { tot: ['van_khuc', 'thien_khoi', 'thien_viet', 'tu_vi'], xau: ['hoa_tinh', 'linh_tinh'] }
    },
    {
      id: 'van_khuc',
      ten: 'Văn Khúc',
      hanViet: '文曲',
      nguHanh: 'thuy',
      loai: 'cat',
      moTa: 'Sao nghệ thuật và tài năng thực hành. Kết hợp với Văn Xương tạo nên tài năng toàn diện. Giỏi về âm nhạc, nghệ thuật, kỹ năng thực hành.',
      hieu_ung: ['Tài năng nghệ thuật', 'Kỹ năng thực hành', 'Duyên dáng', 'Học giỏi'],
      cungTot: ['menh', 'quan_loc', 'phu_the'],
      tuongTac: { tot: ['van_xuong', 'thien_khoi', 'thien_viet'], xau: ['hoa_tinh', 'linh_tinh'] }
    },
    {
      id: 'ta_phu',
      ten: 'Tả Phù',
      hanViet: '左輔',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao phụ tá bên trái, mang lại quý nhân hỗ trợ và uy tín. Đi với Hữu Bật tăng cường sức mạnh lãnh đạo.',
      hieu_ung: ['Quý nhân phù trợ', 'Lãnh đạo tốt', 'Được người giúp đỡ'],
      cungTot: ['menh', 'quan_loc', 'no_boc'],
      tuongTac: { tot: ['huu_bat', 'tu_vi', 'thien_phu'], xau: [] }
    },
    {
      id: 'huu_bat',
      ten: 'Hữu Bật',
      hanViet: '右弼',
      nguHanh: 'thuy',
      loai: 'cat',
      moTa: 'Sao phụ tá bên phải, tương tự Tả Phù. Mang lại quý nhân và sự hỗ trợ từ nhiều phía. Cặp đôi Tả-Hữu rất cát.',
      hieu_ung: ['Quý nhân phù trợ', 'Hỗ trợ đa phương', 'Uy tín'],
      cungTot: ['menh', 'quan_loc', 'no_boc'],
      tuongTac: { tot: ['ta_phu', 'tu_vi', 'thien_phu'], xau: [] }
    },
    {
      id: 'thien_khoi',
      ten: 'Thiên Khôi',
      hanViet: '天魁',
      nguHanh: 'hoa',
      loai: 'cat',
      moTa: 'Quý nhân thiên đình, mang lại sự giúp đỡ từ người có địa vị cao hơn. Tốt cho thi cử và thăng tiến.',
      hieu_ung: ['Quý nhân cấp cao', 'Thăng tiến', 'Thi cử đỗ đạt', 'May mắn'],
      cungTot: ['menh', 'quan_loc', 'phu_mau'],
      tuongTac: { tot: ['thien_viet', 'van_xuong', 'van_khuc'], xau: [] }
    },
    {
      id: 'thien_viet',
      ten: 'Thiên Việt',
      hanViet: '天鉞',
      nguHanh: 'hoa',
      loai: 'cat',
      moTa: 'Tương tự Thiên Khôi, cặp đôi Khôi-Việt mang lại quý nhân và may mắn xuất sắc. Tốt cho sự nghiệp và học vấn.',
      hieu_ung: ['Quý nhân cấp cao', 'Danh tiếng', 'Học vấn xuất sắc'],
      cungTot: ['menh', 'quan_loc'],
      tuongTac: { tot: ['thien_khoi', 'van_xuong', 'van_khuc'], xau: [] }
    },
    {
      id: 'thien_ma',
      ten: 'Thiên Mã',
      hanViet: '天馬',
      nguHanh: 'hoa',
      loai: 'cat',
      moTa: 'Sao di động và biến đổi. Người có Thiên Mã dễ di chuyển, thay đổi, có thể tốt hoặc xấu tùy cung. Kết hợp Lộc Tồn thành Lộc Mã — tài lộc từ xa.',
      hieu_ung: ['Di chuyển nhiều', 'Tài lộc từ xa', 'Cơ hội từ nước ngoài'],
      cungTot: ['menh', 'thien_di', 'quan_loc'],
      tuongTac: { tot: ['loc_ton', 'vu_khuc'], xau: ['dia_kiep', 'dia_khong'] }
    },
    {
      id: 'long_tri',
      ten: 'Long Trì',
      hanViet: '龍池',
      nguHanh: 'thuy',
      loai: 'cat',
      moTa: 'Sao tài nghệ và thi cử. Mang lại tài năng nghệ thuật và thành công trong học vấn.',
      hieu_ung: ['Tài nghệ', 'Học vấn', 'Danh tiếng'],
      cungTot: ['menh', 'quan_loc'],
      tuongTac: { tot: ['phung_cac', 'van_xuong', 'van_khuc'], xau: [] }
    },
    {
      id: 'phung_cac',
      ten: 'Phụng Các',
      hanViet: '鳳閣',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao danh tiếng và vẻ đẹp. Thường đi kèm Long Trì tạo nên tài năng toàn diện và uy tín.',
      hieu_ung: ['Danh tiếng', 'Vẻ đẹp', 'Uy tín'],
      cungTot: ['menh', 'phu_the'],
      tuongTac: { tot: ['long_tri'], xau: [] }
    },
    {
      id: 'en_quang',
      ten: 'Ân Quang',
      hanViet: '恩光',
      nguHanh: 'hoa',
      loai: 'cat',
      moTa: 'Sao ân điển và vinh hiển. Mang lại sự khen thưởng, vinh dự từ cấp trên.',
      hieu_ung: ['Được khen thưởng', 'Vinh hiển', 'Ân sủng'],
      cungTot: ['menh', 'quan_loc'],
      tuongTac: { tot: ['thien_quy'], xau: [] }
    },
    {
      id: 'thien_quy',
      ten: 'Thiên Quý',
      hanViet: '天貴',
      nguHanh: 'hoa',
      loai: 'cat',
      moTa: 'Sao cao quý và danh giá. Mang lại địa vị và sự tôn trọng từ người khác.',
      hieu_ung: ['Địa vị cao', 'Được tôn trọng', 'Danh giá'],
      cungTot: ['menh', 'quan_loc', 'phu_mau'],
      tuongTac: { tot: ['en_quang'], xau: [] }
    },
    {
      id: 'tam_thai',
      ten: 'Tam Thai',
      hanViet: '三台',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao quan chức cấp cao. Mang lại địa vị và thăng tiến trong quan lộc.',
      hieu_ung: ['Thăng tiến', 'Địa vị cao', 'Quan lộc tốt'],
      cungTot: ['menh', 'quan_loc'],
      tuongTac: { tot: ['bat_toa'], xau: [] }
    },
    {
      id: 'bat_toa',
      ten: 'Bát Tọa',
      hanViet: '八座',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao quan chức và thẩm quyền. Cùng với Tam Thai mang lại sự thăng tiến vững chắc.',
      hieu_ung: ['Thẩm quyền', 'Địa vị', 'Quản lý'],
      cungTot: ['menh', 'quan_loc'],
      tuongTac: { tot: ['tam_thai'], xau: [] }
    },
    {
      id: 'giai_than',
      ten: 'Giải Thần',
      hanViet: '解神',
      nguHanh: 'thuy',
      loai: 'cat',
      moTa: 'Sao hóa giải tai họa. Giúp giải trừ tai ương, thoát khỏi tình huống nguy hiểm.',
      hieu_ung: ['Hóa giải tai họa', 'Thoát nạn', 'Bình an'],
      cungTot: ['tat_ach', 'thien_di'],
      tuongTac: { tot: [], xau: ['dia_kiep', 'dia_khong', 'thien_hinh'] }
    }
  ],

  /* === HUNG TINH === */
  hungTinh: [
    {
      id: 'kinh_duong',
      ten: 'Kình Dương',
      hanViet: '擎羊',
      nguHanh: 'kim',
      loai: 'hung',
      moTa: 'Sao hung thần mạnh nhất, tượng trưng cho sự cương ngạnh, xung đột và tai họa. Người có Kình Dương dễ gặp tai nạn, phẫu thuật. Nhưng ở cung Quan Lộc có thể tốt — "Kình Dương nhập Miếu" tạo anh hùng.',
      hieu_ung: ['Xung đột', 'Tai nạn', 'Cương ngạnh', 'Phẫu thuật', 'Tranh đấu'],
      cungTot: ['quan_loc'],
      tuongTac: { tot: ['tu_vi', 'thiet_sat'], xau: ['loc_ton', 'da_la', 'hoa_tinh', 'linh_tinh'] }
    },
    {
      id: 'da_la',
      ten: 'Đà La',
      hanViet: '陀羅',
      nguHanh: 'kim',
      loai: 'hung',
      moTa: 'Sao hung thần, tượng trưng cho sự trì hoãn, chướng ngại và dây dưa. Gây ra sự chậm trễ và kéo dài vấn đề. Cùng với Kình Dương và Hỏa Tinh là nhóm hung tinh nguy hiểm.',
      hieu_ung: ['Trì hoãn', 'Chướng ngại', 'Dây dưa', 'Bệnh tật mạn tính'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['kinh_duong', 'hoa_tinh', 'linh_tinh', 'loc_ton'] }
    },
    {
      id: 'hoa_tinh',
      ten: 'Hỏa Tinh',
      hanViet: '火星',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Sao lửa hung hãn, gây ra tai họa bất ngờ, tính nóng nảy và xung đột mạnh mẽ. Kết hợp với Tham Lang tạo "Hỏa Tham Cách" — phát tài đột ngột nhưng không bền.',
      hieu_ung: ['Tai họa bất ngờ', 'Nóng nảy', 'Xung đột dữ dội', 'Phát tài đột ngột (với Tham Lang)'],
      cungTot: [],
      tuongTac: { tot: ['tham_lang'], xau: ['linh_tinh', 'kinh_duong', 'da_la', 'van_xuong', 'van_khuc'] }
    },
    {
      id: 'linh_tinh',
      ten: 'Linh Tinh',
      hanViet: '鈴星',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Tương tự Hỏa Tinh nhưng hung hãn âm ỉ hơn. Gây ra bất ngờ, phản bội và tai họa tiềm ẩn. Kết hợp Tham Lang cũng tạo phát tài bất ngờ.',
      hieu_ung: ['Tai họa tiềm ẩn', 'Phản bội', 'Âm mưu', 'Phát tài đột ngột (với Tham Lang)'],
      cungTot: [],
      tuongTac: { tot: ['tham_lang'], xau: ['hoa_tinh', 'kinh_duong', 'da_la', 'van_xuong', 'van_khuc'] }
    },
    {
      id: 'dia_khong',
      ten: 'Địa Không',
      hanViet: '地空',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Sao không vong hung, làm trống rỗng tài lộc và cơ hội. Mơ mộng, không thực tế, dễ mất đi những gì đang có.',
      hieu_ung: ['Mất tài lộc', 'Không thực tế', 'Mơ mộng', 'Kế hoạch thất bại'],
      cungTot: ['phuc_duc'],
      tuongTac: { tot: [], xau: ['dia_kiep', 'thien_ma', 'loc_ton'] }
    },
    {
      id: 'dia_kiep',
      ten: 'Địa Kiếp',
      hanViet: '地劫',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Sao không vong hung, gây mất mát và cướp đoạt. Cùng với Địa Không tạo ra "Không Kiếp" — hung hại mạnh.',
      hieu_ung: ['Mất mát', 'Bị cướp đoạt', 'Tai họa bất ngờ', 'Tài lộc hao tán'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['dia_khong', 'thien_ma', 'loc_ton'] }
    },
    {
      id: 'thien_hinh',
      ten: 'Thiên Hình',
      hanViet: '天刑',
      nguHanh: 'kim',
      loai: 'hung',
      moTa: 'Sao hình phạt và pháp lý. Người có Thiên Hình dễ gặp kiện tụng, hình pháp. Tốt cho người làm nghề pháp lý, quân đội, y tế.',
      hieu_ung: ['Kiện tụng', 'Hình pháp', 'Phẫu thuật', 'Tai nạn'],
      cungTot: ['quan_loc'],
      tuongTac: { tot: ['thien_tuong', 'thiet_sat'], xau: ['liem_trinh', 'tham_lang'] }
    },
    {
      id: 'thien_khoc',
      ten: 'Thiên Khốc',
      hanViet: '天哭',
      nguHanh: 'kim',
      loai: 'hung',
      moTa: 'Sao bi thương, đau khổ. Người có Thiên Khốc dễ gặp mất mát người thân, nỗi buồn sâu sắc.',
      hieu_ung: ['Đau khổ', 'Tang tóc', 'Cô đơn', 'Mất mát'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['thien_hu', 'co_than', 'qua_tu'] }
    },
    {
      id: 'thien_hu',
      ten: 'Thiên Hư',
      hanViet: '天虛',
      nguHanh: 'tho',
      loai: 'hung',
      moTa: 'Sao trống rỗng, gây ra sự hao tán và thiếu hụt. Thường đi kèm với Thiên Khốc tạo ra bi kịch.',
      hieu_ung: ['Hao tán', 'Thiếu hụt', 'Không thực chất', 'Buồn bã'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['thien_khoc'] }
    }
  ],

  /* === TRUNG TÍNH / ĐẶC BIỆT === */
  trungTinh: [
    {
      id: 'hong_loan',
      ten: 'Hồng Loan',
      hanViet: '紅鸞',
      nguHanh: 'thuy',
      loai: 'trung_tinh',
      moTa: 'Sao hôn nhân và tình yêu. Mang lại cơ hội kết hôn, tình yêu nở rộ. Năm có Hồng Loan chiếu mệnh là năm thuận lợi cho hôn nhân.',
      hieu_ung: ['Hôn nhân', 'Tình yêu', 'Hỉ sự', 'Duyên phận'],
      cungTot: ['menh', 'phu_the'],
      tuongTac: { tot: ['thien_hy'], xau: ['co_than', 'qua_tu'] }
    },
    {
      id: 'thien_hy',
      ten: 'Thiên Hỷ',
      hanViet: '天喜',
      nguHanh: 'hoa',
      loai: 'trung_tinh',
      moTa: 'Sao hỉ sự và vui mừng. Mang lại niềm vui, tin vui, kết hôn và sinh con. Đối xứng với Hồng Loan.',
      hieu_ung: ['Hỉ sự', 'Tin vui', 'Kết hôn', 'Sinh con'],
      cungTot: ['menh', 'phu_the', 'tu_nu'],
      tuongTac: { tot: ['hong_loan'], xau: [] }
    },
    {
      id: 'dao_hoa',
      ten: 'Đào Hoa',
      hanViet: '桃花',
      nguHanh: 'moc',
      loai: 'trung_tinh',
      moTa: 'Sao đào hoa, mang lại sức hấp dẫn và duyên tình. Tốt cho nghệ sĩ, người làm dịch vụ. Xấu nếu quá nhiều — dễ đào hoa lăng nhăng.',
      hieu_ung: ['Hấp dẫn', 'Nhiều tình cảm', 'Đào hoa', 'Nghệ thuật'],
      cungTot: ['phu_the', 'quan_loc'],
      tuongTac: { tot: ['tham_lang'], xau: ['liem_trinh', 'pha_quan'] }
    },
    {
      id: 'hoa_cai',
      ten: 'Hoa Cái',
      hanViet: '華蓋',
      nguHanh: 'moc',
      loai: 'trung_tinh',
      moTa: 'Sao nghệ thuật và tôn giáo. Người có Hoa Cái có năng khiếu nghệ thuật và xu hướng tâm linh. Dễ cô độc, thích sống ẩn dật.',
      hieu_ung: ['Tài năng nghệ thuật', 'Tâm linh', 'Cô độc', 'Triết học'],
      cungTot: ['menh', 'phuc_duc'],
      tuongTac: { tot: ['thien_co', 'thien_luong'], xau: [] }
    },
    {
      id: 'co_than',
      ten: 'Cô Thần',
      hanViet: '孤辰',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Sao cô độc nam, gây ra sự cô đơn trong cuộc sống. Người có Cô Thần dễ sống độc thân hoặc cuộc hôn nhân thiếu hạnh phúc.',
      hieu_ung: ['Cô đơn', 'Ly biệt', 'Hôn nhân trắc trở', 'Sống một mình'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['qua_tu', 'thien_khoc', 'hong_loan'] }
    },
    {
      id: 'qua_tu',
      ten: 'Quả Tú',
      hanViet: '寡宿',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Sao cô độc nữ, tương tự Cô Thần nhưng chủ yếu ảnh hưởng phụ nữ. Dễ góa bụa, ly hôn hoặc cô đơn trong hôn nhân.',
      hieu_ung: ['Cô đơn', 'Góa bụa', 'Ly hôn', 'Hôn nhân không hạnh phúc'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['co_than', 'thien_khoc', 'hong_loan'] }
    },
    {
      id: 'thien_tai',
      ten: 'Thiên Tài',
      hanViet: '天才',
      nguHanh: 'kim',
      loai: 'cat',
      moTa: 'Sao tài năng thiên bẩm. Người có Thiên Tài thường có tài năng xuất chúng trong một lĩnh vực nhất định từ nhỏ.',
      hieu_ung: ['Thiên tài', 'Tài năng bẩm sinh', 'Học nhanh'],
      cungTot: ['menh', 'quan_loc'],
      tuongTac: { tot: ['van_xuong', 'van_khuc', 'thien_tho'], xau: [] }
    },
    {
      id: 'thien_tho',
      ten: 'Thiên Thọ',
      hanViet: '天壽',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao trường thọ. Người có Thiên Thọ thường sống lâu và khỏe mạnh.',
      hieu_ung: ['Trường thọ', 'Sức khỏe tốt', 'Bình an'],
      cungTot: ['menh', 'tat_ach'],
      tuongTac: { tot: ['thien_luong', 'thien_tai'], xau: [] }
    },
    {
      id: 'thien_quan',
      ten: 'Thiên Quan',
      hanViet: '天官',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao quan lộc và địa vị. Mang lại thăng tiến trong sự nghiệp và địa vị xã hội.',
      hieu_ung: ['Thăng tiến', 'Quan lộc', 'Địa vị'],
      cungTot: ['quan_loc', 'menh'],
      tuongTac: { tot: ['thien_phuc'], xau: [] }
    },
    {
      id: 'thien_phuc',
      ten: 'Thiên Phúc',
      hanViet: '天福',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao phúc lành. Mang lại may mắn, phúc đức và những điều tốt lành trong cuộc sống.',
      hieu_ung: ['Phúc lành', 'May mắn', 'Phúc đức'],
      cungTot: ['menh', 'phuc_duc'],
      tuongTac: { tot: ['thien_quan'], xau: [] }
    },
    {
      id: 'thien_duc',
      ten: 'Thiên Đức',
      hanViet: '天德',
      nguHanh: 'hoa',
      loai: 'cat',
      moTa: 'Sao ân đức trời ban. Giúp hóa giải hung tinh, mang lại bình an và may mắn.',
      hieu_ung: ['Hóa giải hung', 'Ân đức', 'Bình an', 'May mắn'],
      cungTot: ['menh', 'tat_ach'],
      tuongTac: { tot: ['nguyet_duc'], xau: [] }
    },
    {
      id: 'nguyet_duc',
      ten: 'Nguyệt Đức',
      hanViet: '月德',
      nguHanh: 'kim',
      loai: 'cat',
      moTa: 'Tương tự Thiên Đức, mang lại ân đức và hóa giải tai họa, đặc biệt liên quan đến phụ nữ và gia đình.',
      hieu_ung: ['Hóa giải hung', 'Ân đức', 'Gia đình bình an'],
      cungTot: ['menh', 'phu_mau'],
      tuongTac: { tot: ['thien_duc'], xau: [] }
    },
    {
      id: 'thien_la',
      ten: 'Thiên La',
      hanViet: '天羅',
      nguHanh: 'hoa',
      loai: 'hung',
      moTa: 'Sao bẫy trời. Người có Thiên La dễ bị ràng buộc, tù tội hoặc hạn chế tự do. Cung Thìn chính là Thiên La.',
      hieu_ung: ['Ràng buộc', 'Tù tội', 'Hạn chế', 'Trắc trở'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['dia_vong', 'liem_trinh'] }
    },
    {
      id: 'dia_vong',
      ten: 'Địa Võng',
      hanViet: '地網',
      nguHanh: 'thuy',
      loai: 'hung',
      moTa: 'Sao bẫy đất. Tương tự Thiên La nhưng hướng về vật chất. Cung Tuất chính là Địa Võng.',
      hieu_ung: ['Bẫy vật chất', 'Tù túng', 'Hạn chế tài lộc'],
      cungTot: [],
      tuongTac: { tot: [], xau: ['thien_la', 'liem_trinh'] }
    },
    {
      id: 'thai_phu',
      ten: 'Thai Phụ',
      hanViet: '胎輔',
      nguHanh: 'tho',
      loai: 'cat',
      moTa: 'Sao sinh sản và con cái. Liên quan đến thai nghén, sinh đẻ. Tốt khi ở cung Tử Nữ.',
      hieu_ung: ['Con cái', 'Sinh sản', 'Phúc con'],
      cungTot: ['tu_nu'],
      tuongTac: { tot: ['thien_hy'], xau: [] }
    },
    {
      id: 'thien_dieu',
      ten: 'Thiên Diêu',
      hanViet: '天姚',
      nguHanh: 'thuy',
      loai: 'trung_tinh',
      moTa: 'Sao phong lưu và hấp dẫn. Tương tự Đào Hoa nhưng nghiêng về vẻ đẹp cá nhân và sức hút tự nhiên.',
      hieu_ung: ['Hấp dẫn', 'Phong lưu', 'Duyên dáng', 'Quan hệ tình cảm phức tạp'],
      cungTot: ['phu_the'],
      tuongTac: { tot: ['dao_hoa'], xau: [] }
    }
  ]
};

/* ── 3. MƯỜI HAI CUNG ── */
const MUOI_HAI_CUNG = [
  {
    id: 'menh',
    ten: 'Mệnh',
    stt: 1,
    moTa: 'Cung chủ — phản ánh tính cách, bản chất và vận mệnh tổng quát của người. Là cung quan trọng nhất trong lá số.',
    chiPhoi: ['Tính cách', 'Ngoại hình', 'Vận mệnh tổng thể', 'Sức mạnh bản thân'],
    doiChieu: 'thien_di',
    tamHop: ['huynh_de', 'no_boc']
  },
  {
    id: 'phu_mau',
    ten: 'Phụ Mẫu',
    stt: 2,
    moTa: 'Cung cha mẹ — phản ánh mối quan hệ với cha mẹ, sự giáo dục, bối cảnh xuất thân và ân sủng từ trên.',
    chiPhoi: ['Quan hệ cha mẹ', 'Xuất thân', 'Học vấn', 'Cấp trên', 'Văn bằng'],
    doiChieu: 'no_boc',
    tamHop: ['phu_the', 'quan_loc']
  },
  {
    id: 'phuc_duc',
    ten: 'Phúc Đức',
    stt: 3,
    moTa: 'Cung phúc đức — phản ánh phúc lộc tiền kiếp, tâm linh, đức hạnh và sự an vui nội tâm.',
    chiPhoi: ['Phúc lộc', 'Tâm linh', 'Niềm vui nội tâm', 'Đức hạnh', 'Tiền kiếp'],
    doiChieu: 'tai_bach',
    tamHop: ['tu_nu', 'dien_trach']
  },
  {
    id: 'dien_trach',
    ten: 'Điền Trạch',
    stt: 4,
    moTa: 'Cung điền sản — phản ánh bất động sản, nhà ở, gia tài và căn cơ vật chất.',
    chiPhoi: ['Bất động sản', 'Nhà ở', 'Tài sản cố định', 'Quê hương'],
    doiChieu: 'quan_loc',
    tamHop: ['phuc_duc', 'tu_nu']
  },
  {
    id: 'quan_loc',
    ten: 'Quan Lộc',
    stt: 5,
    moTa: 'Cung sự nghiệp — phản ánh công danh, sự nghiệp, nghề nghiệp và địa vị xã hội.',
    chiPhoi: ['Sự nghiệp', 'Công danh', 'Địa vị', 'Nghề nghiệp', 'Thành tựu'],
    doiChieu: 'dien_trach',
    tamHop: ['phu_mau', 'phu_the']
  },
  {
    id: 'no_boc',
    ten: 'Nô Bộc',
    stt: 6,
    moTa: 'Cung nô bộc/bạn bè — phản ánh mối quan hệ với bạn bè, đồng nghiệp, nhân viên và người dưới quyền.',
    chiPhoi: ['Bạn bè', 'Đồng nghiệp', 'Nhân viên', 'Xã hội', 'Quan hệ ngang hàng'],
    doiChieu: 'phu_mau',
    tamHop: ['menh', 'huynh_de']
  },
  {
    id: 'thien_di',
    ten: 'Thiên Di',
    stt: 7,
    moTa: 'Cung thiên di — phản ánh việc di chuyển, xuất ngoại, môi trường bên ngoài và những thứ nằm ngoài vùng an toàn.',
    chiPhoi: ['Di chuyển', 'Xuất ngoại', 'Môi trường ngoài', 'Giao du xã hội', 'Du lịch'],
    doiChieu: 'menh',
    tamHop: ['tat_ach', 'tai_bach']
  },
  {
    id: 'tat_ach',
    ten: 'Tật Ách',
    stt: 8,
    moTa: 'Cung tật ách — phản ánh sức khỏe, bệnh tật, tai nạn và những chướng ngại trong cuộc sống.',
    chiPhoi: ['Sức khỏe', 'Bệnh tật', 'Tai nạn', 'Chướng ngại', 'Phẫu thuật'],
    doiChieu: 'phu_the',
    tamHop: ['thien_di', 'tai_bach']
  },
  {
    id: 'tai_bach',
    ten: 'Tài Bạch',
    stt: 9,
    moTa: 'Cung tài bạch — phản ánh tài chính, thu nhập, khả năng kiếm tiền và quản lý tiền bạc.',
    chiPhoi: ['Tài chính', 'Thu nhập', 'Kiếm tiền', 'Tiêu dùng', 'Đầu tư'],
    doiChieu: 'phuc_duc',
    tamHop: ['thien_di', 'tat_ach']
  },
  {
    id: 'tu_nu',
    ten: 'Tử Nữ',
    stt: 10,
    moTa: 'Cung tử nữ — phản ánh con cái, học sinh, phúc con, sự sáng tạo và những gì mình tạo ra.',
    chiPhoi: ['Con cái', 'Học sinh', 'Sáng tạo', 'Phúc con', 'Di sản'],
    doiChieu: 'huynh_de',
    tamHop: ['phuc_duc', 'dien_trach']
  },
  {
    id: 'phu_the',
    ten: 'Phu Thê',
    stt: 11,
    moTa: 'Cung phu thê — phản ánh hôn nhân, người bạn đời, tình yêu và mối quan hệ đối tác.',
    chiPhoi: ['Hôn nhân', 'Người bạn đời', 'Tình yêu', 'Đối tác', 'Hợp tác'],
    doiChieu: 'tat_ach',
    tamHop: ['phu_mau', 'quan_loc']
  },
  {
    id: 'huynh_de',
    ten: 'Huynh Đệ',
    stt: 12,
    moTa: 'Cung huynh đệ — phản ánh mối quan hệ với anh chị em, bạn bè thân thiết và những người đồng trang lứa.',
    chiPhoi: ['Anh chị em', 'Bạn thân', 'Đồng trang lứa', 'Tương hỗ'],
    doiChieu: 'tu_nu',
    tamHop: ['menh', 'no_boc']
  }
];

/* ── 4. TỨ HÓA (Biến hóa theo năm can) ── */
const TU_HOA = {
  giap:  { loc: 'liem_trinh', quyen: 'pha_quan', khoa: 'vu_khuc',  ky: 'thai_duong' },
  at:    { loc: 'thien_co',  quyen: 'thien_luong', khoa: 'tu_vi',   ky: 'thai_am' },
  binh:  { loc: 'thien_dong', quyen: 'thiet_sat', khoa: 'van_xuong', ky: 'liem_trinh' },
  dinh:  { loc: 'thai_am',   quyen: 'thien_dong', khoa: 'thien_co',  ky: 'cu_mon' },
  mau:   { loc: 'tham_lang', quyen: 'thai_am',    khoa: 'vu_khuc',   ky: 'thien_co' },
  ky:    { loc: 'vu_khuc',   quyen: 'tham_lang',  khoa: 'thien_luong', ky: 'van_khuc' },
  canh:  { loc: 'thai_duong', quyen: 'vu_khuc',   khoa: 'thai_am',   ky: 'thien_dong' },
  tan:   { loc: 'vu_khuc',   quyen: 'thai_am',    khoa: 'van_xuong',  ky: 'van_khuc' },
  nham:  { loc: 'thien_luong', quyen: 'tu_vi',    khoa: 'tham_lang',  ky: 'vu_khuc' },
  quy:   { loc: 'pha_quan',  quyen: 'cu_mon',     khoa: 'thai_am',    ky: 'tan_lang' }
};

/* ── 5. TƯƠNG QUAN / TỔ HỢP SAO ĐẶC BIỆT ── */
const TO_HOP_SAO = [
  {
    id: 'hoa_tham_cach',
    ten: 'Hỏa Tham Cách / Linh Tham Cách',
    sao: ['tham_lang', 'hoa_tinh'],
    saoPhuHop: ['linh_tinh'],
    moTa: 'Tham Lang hội Hỏa Tinh (hoặc Linh Tinh) tạo cục phát tài đột ngột. Cuộc đời thường khó khăn thuở nhỏ nhưng phát tài bất ngờ ở tuổi trung niên. Không bền nếu thiếu sao cát.',
    loai: 'dac_biet',
    hieu_qua: ['Phát tài đột ngột', 'Giàu có bất ngờ', 'Cuộc đời nhiều biến động'],
    dieu_kien: 'Tham Lang ở cung Dần/Thân, Ngọ/Tý khi gặp Hỏa/Linh'
  },
  {
    id: 'kinh_duong_nhap_mieu',
    ten: 'Kình Dương nhập Miếu — Anh Hùng Cách',
    sao: ['kinh_duong'],
    moTa: 'Kình Dương ở cung Quan Lộc hoặc vào các cung miếu địa (Tý, Ngọ, Mão, Dậu) tạo cách anh hùng. Người có cục này thường thành công trong nghề đòi hỏi dũng cảm và cạnh tranh.',
    loai: 'dac_biet',
    hieu_qua: ['Anh hùng', 'Thành công trong tranh đấu', 'Lãnh đạo mạnh mẽ'],
    dieu_kien: 'Kình Dương tại Tý/Ngọ/Mão/Dậu trong cung Quan Lộc'
  },
  {
    id: 'tu_vi_thien_phu',
    ten: 'Tử Vi — Thiên Phủ Giao Hội',
    sao: ['tu_vi', 'thien_phu'],
    moTa: 'Hai sao đế vương gặp nhau tạo cục phú quý song toàn. Người có cục này thường có địa vị cao và tài sản lớn.',
    loai: 'cat',
    hieu_qua: ['Phú quý vẹn toàn', 'Địa vị cao', 'Tài sản lớn'],
    dieu_kien: 'Tử Vi và Thiên Phủ hội chiếu tam hợp'
  },
  {
    id: 'nhat_nguyet_dong_cung',
    ten: 'Nhật Nguyệt Đồng Cung',
    sao: ['thai_duong', 'thai_am'],
    moTa: 'Thái Dương và Thái Âm đồng cung hoặc hội chiếu. Nếu đồng cung tại vị trí tốt thì rực rỡ, nhưng Nhật Nguyệt đồng cung tại cung Mệnh thường bị che mờ — "Nhật Nguyệt đồng lâm, tài lộc phân tán".',
    loai: 'hung_cat',
    hieu_qua: ['Nổi tiếng đôi phương', 'Tài lộc có thể phân tán', 'Duyên với cả nam và nữ'],
    dieu_kien: 'Thái Dương và Thái Âm đồng cung'
  },
  {
    id: 'liem_trinh_thiet_sat',
    ten: 'Liêm Trinh — Thất Sát',
    sao: ['liem_trinh', 'thiet_sat'],
    moTa: 'Cục hung nguy hiểm nhất trong Tử Vi. Người có cục này dễ gặp tai nạn, phẫu thuật, hiểm nguy đến tính mạng. Cần sao cát giải trừ.',
    loai: 'hung',
    hieu_qua: ['Tai nạn nặng', 'Nguy hiểm tính mạng', 'Phẫu thuật', 'Hình thương'],
    dieu_kien: 'Liêm Trinh và Thất Sát đồng cung hoặc chiếu nhau tại cung Mệnh/Tật Ách'
  },
  {
    id: 'vu_khuc_thiet_sat',
    ten: 'Vũ Khúc — Thất Sát',
    sao: ['vu_khuc', 'thiet_sat'],
    moTa: 'Cục vừa hung vừa cát. Mang lại tài năng quân sự và quyết đoán mạnh mẽ. Tốt cho sự nghiệp nhưng tình cảm khó khăn.',
    loai: 'hung_cat',
    hieu_qua: ['Tài năng quân sự', 'Quyết đoán', 'Sự nghiệp mạnh', 'Tình cảm trắc trở'],
    dieu_kien: 'Vũ Khúc và Thất Sát đồng cung'
  },
  {
    id: 'khoi_viet_xuat_hien',
    ten: 'Khôi Việt Song Toàn',
    sao: ['thien_khoi', 'thien_viet'],
    moTa: 'Thiên Khôi và Thiên Việt cùng hội chiếu vào cung Mệnh hoặc Quan Lộc — cực cát. Người này thường được quý nhân nâng đỡ và thành công rực rỡ trong sự nghiệp.',
    loai: 'cat',
    hieu_qua: ['Quý nhân tứ phương', 'Thành công sự nghiệp', 'Danh tiếng lẫy lừng'],
    dieu_kien: 'Khôi Việt cùng hội chiếu Mệnh hoặc Quan Lộc'
  },
  {
    id: 'loc_ma_giao_trieu',
    ten: 'Lộc Mã Giao Trì',
    sao: ['loc_ton', 'thien_ma'],
    moTa: 'Lộc Tồn và Thiên Mã gặp nhau — tài lộc từ xa và di chuyển. Người này thường phát tài nhờ xuất ngoại hoặc kinh doanh nhiều nơi.',
    loai: 'cat',
    hieu_qua: ['Phát tài từ xa', 'Kinh doanh đa địa', 'Xuất ngoại phát đạt'],
    dieu_kien: 'Lộc Tồn và Thiên Mã hội chiếu'
  },
  {
    id: 'tu_sat_xung_pha',
    ten: 'Tứ Sát Xung Phá (Kình Đà Hỏa Linh)',
    sao: ['kinh_duong', 'da_la', 'hoa_tinh', 'linh_tinh'],
    moTa: 'Bốn hung tinh cùng chiếu vào một cung — cực hung. Cung nào bị chiếu sẽ bị phá hủy hoàn toàn. Đặc biệt nguy hiểm khi chiếu vào Mệnh hoặc Quan Lộc.',
    loai: 'hung',
    hieu_qua: ['Đại hung', 'Phá hoại toàn diện', 'Tai họa lớn'],
    dieu_kien: '3-4 trong số các sao hung đồng thời chiếu vào một cung'
  },
  {
    id: 'van_khoa_song_quan',
    ten: 'Văn Khoa Song Quan',
    sao: ['van_xuong', 'van_khuc'],
    moTa: 'Văn Xương và Văn Khúc đồng cung hoặc hội chiếu Mệnh/Quan Lộc. Mang lại tài năng văn học, học vấn xuất sắc và danh tiếng về trí tuệ.',
    loai: 'cat',
    hieu_qua: ['Học vấn cao', 'Tài năng văn chương', 'Danh tiếng trí tuệ', 'Thi cử thành công'],
    dieu_kien: 'Văn Xương và Văn Khúc cùng chiếu Mệnh hoặc Quan Lộc'
  },
  {
    id: 'ta_huu_cong_phu',
    ten: 'Tả Hữu Song Phù',
    sao: ['ta_phu', 'huu_bat'],
    moTa: 'Tả Phù và Hữu Bật cùng hội chiếu Mệnh — người này được quý nhân giúp đỡ từ mọi phía, lãnh đạo giỏi và được nhiều người hỗ trợ.',
    loai: 'cat',
    hieu_qua: ['Quý nhân đa phương', 'Lãnh đạo xuất sắc', 'Được nhiều người hỗ trợ'],
    dieu_kien: 'Tả Phù và Hữu Bật cùng hội chiếu Mệnh'
  },
  {
    id: 'khong_kiep_xung_menh',
    ten: 'Không Kiếp Xung Mệnh',
    sao: ['dia_khong', 'dia_kiep'],
    moTa: 'Địa Không và Địa Kiếp cùng chiếu vào Mệnh — hung hại mạnh. Người này thường phải chịu nhiều mất mát và trở ngại trong cuộc đời.',
    loai: 'hung',
    hieu_qua: ['Mất mát nhiều', 'Trở ngại lớn', 'Tài lộc hao tán', 'Sự nghiệp khó khăn'],
    dieu_kien: 'Địa Không và Địa Kiếp đồng thời chiếu Mệnh'
  },
  {
    id: 'co_quan_qua_tu',
    ten: 'Cô — Quả Hội Mệnh',
    sao: ['co_than', 'qua_tu'],
    moTa: 'Cô Thần và Quả Tú cùng chiếu Mệnh hoặc Phu Thê — hôn nhân trắc trở, dễ cô đơn và sống một mình.',
    loai: 'hung',
    hieu_qua: ['Hôn nhân trắc trở', 'Cô đơn', 'Ly hôn', 'Sống độc thân'],
    dieu_kien: 'Cô Thần và Quả Tú cùng hội chiếu Mệnh hoặc Phu Thê'
  },
  {
    id: 'thien_luong_hoa_loc',
    ten: 'Thiên Lương Hóa Lộc',
    sao: ['thien_luong'],
    tuHoa: 'loc',
    moTa: 'Thiên Lương Hóa Lộc — mang lại phúc lộc lớn từ y học, giúp người, tôn giáo. Tốt nhất khi ở cung Mệnh hoặc Quan Lộc.',
    loai: 'cat',
    hieu_qua: ['Phúc lộc y học', 'Giàu từ việc giúp người', 'Phúc thọ song toàn'],
    dieu_kien: 'Thiên Lương Hóa Lộc ở Mệnh/Quan Lộc'
  },
  {
    id: 'tu_vi_hoa_quyen',
    ten: 'Tử Vi Hóa Quyền',
    sao: ['tu_vi'],
    tuHoa: 'quyen',
    moTa: 'Tử Vi Hóa Quyền — quyền lực tăng mạnh, khả năng lãnh đạo vượt trội. Tốt cho chính trị và quản lý cấp cao.',
    loai: 'cat',
    hieu_qua: ['Quyền lực mạnh', 'Lãnh đạo vượt trội', 'Địa vị cao'],
    dieu_kien: 'Tử Vi Hóa Quyền hội chiếu Mệnh/Quan Lộc'
  },
  {
    id: 'vu_khuc_hoa_ky',
    ten: 'Vũ Khúc Hóa Kỵ',
    sao: ['vu_khuc'],
    tuHoa: 'ky',
    moTa: 'Vũ Khúc Hóa Kỵ — tài lộc bị cản trở, dễ mất tiền hoặc đầu tư thua lỗ. Hôn nhân cũng dễ trắc trở.',
    loai: 'hung',
    hieu_qua: ['Tài lộc bị chặn', 'Đầu tư thua lỗ', 'Tình cảm trắc trở'],
    dieu_kien: 'Vũ Khúc Hóa Kỵ tại Mệnh/Tài Bạch/Phu Thê'
  },
  {
    id: 'thai_duong_hoa_ky',
    ten: 'Thái Dương Hóa Kỵ',
    sao: ['thai_duong'],
    tuHoa: 'ky',
    moTa: 'Thái Dương Hóa Kỵ — danh tiếng bị tổn hại, khó thăng tiến, quan hệ với nam giới (hoặc cha) khó khăn.',
    loai: 'hung',
    hieu_qua: ['Danh tiếng tổn hại', 'Khó thăng tiến', 'Quan hệ cha/nam phức tạp'],
    dieu_kien: 'Thái Dương Hóa Kỵ tại Mệnh/Quan Lộc/Phụ Mẫu'
  }
];

/* ── 6. NGŨ HÀNH TƯƠNG SINH TƯƠNG KHẮC ── */
const NGU_HANH = {
  tuongSinh: {
    moc: 'hoa',   // Mộc sinh Hỏa
    hoa: 'tho',   // Hỏa sinh Thổ
    tho: 'kim',   // Thổ sinh Kim
    kim: 'thuy',  // Kim sinh Thủy
    thuy: 'moc'   // Thủy sinh Mộc
  },
  tuongKhac: {
    moc: 'tho',   // Mộc khắc Thổ
    hoa: 'kim',   // Hỏa khắc Kim
    tho: 'thuy',  // Thổ khắc Thủy
    kim: 'moc',   // Kim khắc Mộc
    thuy: 'hoa'   // Thủy khắc Hỏa
  },
  mauSac: {
    moc: '#4CAF50',
    hoa: '#F44336',
    tho: '#FF9800',
    kim: '#9E9E9E',
    thuy: '#2196F3'
  },
  tenViet: {
    moc: 'Mộc', hoa: 'Hỏa', tho: 'Thổ', kim: 'Kim', thuy: 'Thủy'
  }
};

/* ── 7. MỆNH CỤC (5 loại mệnh theo ngũ hành) ── */
const MENH_CUC = [
  {
    id: 'thuy_nhi_cuc',
    ten: 'Thủy Nhị Cục',
    nguHanh: 'thuy',
    so: 2,
    moTa: 'Người có Thủy Nhị Cục thường nhạy cảm, linh hoạt, giàu trí tưởng tượng. Thích sự biến đổi, giỏi giao tiếp. Hợp nghề nghiên cứu, nghệ thuật, ngoại giao.'
  },
  {
    id: 'moc_tam_cuc',
    ten: 'Mộc Tam Cục',
    nguHanh: 'moc',
    so: 3,
    moTa: 'Người có Mộc Tam Cục nhân từ, thẳng thắn, yêu thiên nhiên và tự do. Ưa phát triển và tăng trưởng. Hợp nghề giáo dục, y tế, môi trường.'
  },
  {
    id: 'kim_tu_cuc',
    ten: 'Kim Tứ Cục',
    nguHanh: 'kim',
    so: 4,
    moTa: 'Người có Kim Tứ Cục quyết đoán, thực tế, cứng rắn, coi trọng vật chất và danh dự. Hợp nghề tài chính, kinh doanh, quân sự, kỹ thuật.'
  },
  {
    id: 'tho_ngu_cuc',
    ten: 'Thổ Ngũ Cục',
    nguHanh: 'tho',
    so: 5,
    moTa: 'Người có Thổ Ngũ Cục trung thực, kiên nhẫn, ổn định, đáng tin cậy. Thích xây dựng nền tảng vững chắc. Hợp nghề bất động sản, nông nghiệp, quản lý.'
  },
  {
    id: 'hoa_luc_cuc',
    ten: 'Hỏa Lục Cục',
    nguHanh: 'hoa',
    so: 6,
    moTa: 'Người có Hỏa Lục Cục nhiệt tình, năng động, sáng tạo, ham muốn danh tiếng. Dễ nổi bật nhưng cũng dễ nóng vội. Hợp nghề giải trí, thể thao, chính trị, nghệ thuật.'
  }
];

/* ── 8. CÁC TINH DIỆU THEO CAN NĂM (an sao theo năm sinh) ── */
const SAO_THEO_CAN = {
  giap: {
    loc_ton: 'dan',
    kinh_duong: 'mao',
    da_la: 'suu',
    thien_khoi: 'suu',
    thien_viet: 'mui'
  },
  at: {
    loc_ton: 'mao',
    kinh_duong: 'thin',
    da_la: 'dan',
    thien_khoi: 'zi',
    thien_viet: 'than'
  },
  binh: {
    loc_ton: 'ty',
    kinh_duong: 'ngo',
    da_la: 'thin',
    thien_khoi: 'hai',
    thien_viet: 'dau'
  },
  dinh: {
    loc_ton: 'ngo',
    kinh_duong: 'mui',
    da_la: 'ty',
    thien_khoi: 'hai',
    thien_viet: 'dau'
  },
  mau: {
    loc_ton: 'ty',
    kinh_duong: 'ngo',
    da_la: 'thin',
    thien_khoi: 'suu',
    thien_viet: 'mui'
  },
  ky: {
    loc_ton: 'ngo',
    kinh_duong: 'mui',
    da_la: 'ty',
    thien_khoi: 'zi',
    thien_viet: 'than'
  },
  canh: {
    loc_ton: 'than',
    kinh_duong: 'dau',
    da_la: 'mui',
    thien_khoi: 'suu',
    thien_viet: 'mui'
  },
  tan: {
    loc_ton: 'dau',
    kinh_duong: 'tuat',
    da_la: 'than',
    thien_khoi: 'ngo',
    thien_viet: 'dan'
  },
  nham: {
    loc_ton: 'hai',
    kinh_duong: 'zi',
    da_la: 'tuat',
    thien_khoi: 'mao',
    thien_viet: 'ty'
  },
  quy: {
    loc_ton: 'zi',
    kinh_duong: 'dan',
    da_la: 'hai',
    thien_khoi: 'mao',
    thien_viet: 'ty'
  }
};

/* ── EXPORT ── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHINH_TINH, SAO_PHU, MUOI_HAI_CUNG, TU_HOA, TO_HOP_SAO, NGU_HANH, MENH_CUC, SAO_THEO_CAN };
}
