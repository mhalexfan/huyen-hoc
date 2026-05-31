/* ═══════════════════════════════════════════════════════
   THIÊN MỆNH — Main JavaScript
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ── */
const ZODIAC = [
  { sym:'♈', name:'Bạch Dương', en:'Aries',       dates:'21/3 – 19/4', element:'Lửa', planet:'Sao Hỏa',
    traits:['Dũng cảm','Nhiệt huyết','Tiên phong','Bốc đồng'],
    color:'#FF6B35',
    personality: 'Bạch Dương là người đầu tiên của vòng hoàng đạo, mang trong mình sức mạnh khai mở và tiên phong. Bạn tràn đầy năng lượng, can đảm đương đầu với mọi thử thách và không bao giờ từ bỏ.',
    love: 'Trong tình yêu, Bạch Dương yêu cuồng nhiệt và chân thành. Bạn cần người bạn đời có thể đứng vững bên cạnh, không bị cuốn đi bởi ngọn lửa đam mê của bạn. Hợp nhất với Sư Tử và Nhân Mã.',
    career: 'Bạn sinh ra để dẫn đầu. Phù hợp với các vai trò lãnh đạo, kinh doanh riêng, quân sự hoặc thể thao. Sự quyết đoán và tốc độ xử lý vấn đề là thế mạnh vượt trội.',
    health: 'Cần chú ý vùng đầu và mặt. Dễ bị chấn thương do hoạt động mạnh. Nên tập thể dục đều đặn để giải phóng năng lượng dư thừa.',
    scores: { love:85, career:90, wealth:70, health:75 }
  },
  { sym:'♉', name:'Kim Ngưu', en:'Taurus',         dates:'20/4 – 20/5', element:'Đất', planet:'Sao Kim',
    traits:['Kiên định','Thực tế','Trung thành','Ưa hưởng thụ'],
    color:'#4CAF50',
    personality: 'Kim Ngưu là biểu tượng của sự bền vững và thực tế. Bạn xây dựng mọi thứ từng bước một, kiên nhẫn và chắc chắn. Có khiếu thẩm mỹ tinh tế và yêu cái đẹp trong cuộc sống.',
    love: 'Bạn là người bạn đời trung thành và tận tụy. Cần thời gian để tin tưởng nhưng một khi đã yêu là yêu đến cùng. Hợp với Xử Nữ và Ma Kết.',
    career: 'Xuất sắc trong lĩnh vực tài chính, nghệ thuật, ẩm thực hoặc bất động sản. Bạn có bản năng kinh doanh tốt và kiên trì theo đuổi mục tiêu dài hạn.',
    health: 'Cần chú ý cổ họng và tuyến giáp. Dễ tăng cân nếu không chú ý chế độ ăn uống. Yoga và đi bộ trong thiên nhiên rất phù hợp.',
    scores: { love:80, career:85, wealth:90, health:70 }
  },
  { sym:'♊', name:'Song Tử', en:'Gemini',           dates:'21/5 – 20/6', element:'Khí', planet:'Sao Thủy',
    traits:['Linh hoạt','Thông minh','Tò mò','Đa tài'],
    color:'#FFEB3B',
    personality: 'Song Tử là linh hồn của sự đa dạng và trí tuệ. Bạn sở hữu trí thông minh sắc bén, khả năng giao tiếp xuất sắc và luôn tìm kiếm những điều mới mẻ để khám phá.',
    love: 'Trong tình yêu, bạn cần người có thể kích thích trí tuệ và tinh thần. Dễ chán nhưng khi tìm được người phù hợp sẽ cực kỳ thú vị. Hợp với Thiên Bình và Bảo Bình.',
    career: 'Xuất sắc trong báo chí, truyền thông, giảng dạy, IT hoặc marketing. Khả năng thích nghi và học hỏi nhanh là tài sản vô giá.',
    health: 'Cần chú ý hệ thần kinh và phổi. Dễ bị căng thẳng vì suy nghĩ quá nhiều. Thiền định và hít thở sâu rất có lợi.',
    scores: { love:75, career:92, wealth:78, health:65 }
  },
  { sym:'♋', name:'Cự Giải', en:'Cancer',           dates:'21/6 – 22/7', element:'Nước', planet:'Mặt Trăng',
    traits:['Nhạy cảm','Yêu thương','Trực giác','Bảo vệ'],
    color:'#42A5F5',
    personality: 'Cự Giải là cung của tình cảm và gia đình. Bạn có trực giác phi thường, yêu thương sâu sắc và luôn sẵn sàng bảo vệ người thân. Cảm xúc phong phú là sức mạnh đặc biệt của bạn.',
    love: 'Bạn yêu với toàn bộ trái tim và luôn đặt người yêu lên hàng đầu. Cần được cảm thấy an toàn và được yêu đáp lại. Hợp với Bọ Cạp và Song Ngư.',
    career: 'Phù hợp với y tế, tâm lý học, giáo dục, ẩm thực hoặc kinh doanh gia đình. Bạn có khả năng thấu hiểu người khác rất tốt.',
    health: 'Cần chú ý hệ tiêu hóa và dạ dày. Cảm xúc ảnh hưởng mạnh đến sức khỏe thể chất. Tập thói quen ăn uống lành mạnh và ổn định.',
    scores: { love:90, career:75, wealth:72, health:68 }
  },
  { sym:'♌', name:'Sư Tử', en:'Leo',                dates:'23/7 – 22/8', element:'Lửa', planet:'Mặt Trời',
    traits:['Hoàng gia','Hào phóng','Tự tin','Sáng tạo'],
    color:'#FF9800',
    personality: 'Sư Tử là vị vua của hoàng đạo, tỏa sáng như Mặt Trời. Bạn có sức hút tự nhiên, lòng hào phóng vô bờ và khả năng truyền cảm hứng cho người khác.',
    love: 'Bạn yêu cuồng nhiệt và thể hiện tình cảm đầy ắp. Cần được tôn trọng và ngưỡng mộ. Hợp với Bạch Dương và Nhân Mã.',
    career: 'Thiên về nghệ thuật, giải trí, chính trị hoặc kinh doanh. Bạn sinh ra để dẫn đầu và tỏa sáng. Năng lực sáng tạo vô song.',
    health: 'Cần chú ý tim mạch và lưng. Đừng làm việc quá sức vì lòng kiêu hãnh. Hãy nghỉ ngơi đúng lúc và tận hưởng cuộc sống.',
    scores: { love:88, career:95, wealth:82, health:80 }
  },
  { sym:'♍', name:'Xử Nữ', en:'Virgo',              dates:'23/8 – 22/9', element:'Đất', planet:'Sao Thủy',
    traits:['Tỉ mỉ','Thực tế','Phân tích','Khiêm tốn'],
    color:'#8BC34A',
    personality: 'Xử Nữ là hiện thân của sự hoàn hảo và trật tự. Bạn có khả năng phân tích sắc bén, chú ý đến từng chi tiết nhỏ nhất và luôn tìm cách cải thiện mọi thứ xung quanh.',
    love: 'Bạn cần thời gian để mở lòng nhưng khi đã tin tưởng là vô cùng chung thủy. Thể hiện tình cảm qua hành động hơn là lời nói. Hợp với Kim Ngưu và Ma Kết.',
    career: 'Xuất sắc trong y tế, khoa học, kế toán, nghiên cứu hoặc công nghệ. Sự tỉ mỉ và đáng tin cậy là những phẩm chất khó tìm được.',
    health: 'Cần chú ý hệ tiêu hóa và ruột. Hay lo lắng quá mức gây ảnh hưởng sức khỏe. Thiền định và viết nhật ký giúp giải tỏa tâm trí.',
    scores: { love:72, career:93, wealth:85, health:78 }
  },
  { sym:'♎', name:'Thiên Bình', en:'Libra',         dates:'23/9 – 22/10', element:'Khí', planet:'Sao Kim',
    traits:['Cân bằng','Công bằng','Ngoại giao','Thẩm mỹ'],
    color:'#E91E63',
    personality: 'Thiên Bình là người tìm kiếm sự hài hòa và công bằng. Bạn có khiếu thẩm mỹ tinh tế, tài ngoại giao và khả năng nhìn thấy mọi góc độ của vấn đề.',
    love: 'Bạn là người bạn đời lý tưởng — lãng mạn, quan tâm và luôn cố gắng tạo ra sự hài hòa. Ghét xung đột và luôn tìm cách hòa giải. Hợp với Song Tử và Bảo Bình.',
    career: 'Phù hợp với luật sư, ngoại giao, thiết kế, thời trang hoặc tư vấn. Khả năng hòa giải và thương lượng là tài năng thiên bẩm.',
    health: 'Cần chú ý thận và lưng dưới. Dễ bị mất cân bằng cảm xúc khi môi trường xung quanh không hài hòa. Yoga và âm nhạc rất có lợi.',
    scores: { love:92, career:80, wealth:76, health:72 }
  },
  { sym:'♏', name:'Bọ Cạp', en:'Scorpio',           dates:'23/10 – 21/11', element:'Nước', planet:'Sao Diêm Vương',
    traits:['Mãnh liệt','Bí ẩn','Trực giác','Kiên trì'],
    color:'#9B59B6',
    personality: 'Bọ Cạp mang sức mạnh huyền bí và chiều sâu tâm hồn không ai sánh kịp. Bạn đam mê mãnh liệt, trực giác sắc bén và khả năng nhìn thấu bản chất của mọi thứ.',
    love: 'Bạn yêu với toàn bộ sức mạnh của mình — đam mê, sâu sắc và trọn vẹn. Lòng trung thành của bạn tuyệt đối nhưng đòi hỏi sự đáp lại tương xứng. Hợp với Cự Giải và Song Ngư.',
    career: 'Xuất sắc trong nghiên cứu, tâm lý, tình báo, y học hoặc kinh doanh. Khả năng tập trung và quyết tâm không gì ngăn cản được.',
    health: 'Cần chú ý hệ sinh dục và ruột thừa. Đừng dồn nén cảm xúc. Tập thể dục cường độ cao và thiền định thích hợp.',
    scores: { love:87, career:88, wealth:83, health:75 }
  },
  { sym:'♐', name:'Nhân Mã', en:'Sagittarius',      dates:'22/11 – 21/12', element:'Lửa', planet:'Sao Mộc',
    traits:['Tự do','Lạc quan','Triết học','Phiêu lưu'],
    color:'#FF5722',
    personality: 'Nhân Mã là linh hồn phiêu lưu không bao giờ chịu bị giam cầm. Bạn yêu tự do, triết học và luôn tìm kiếm ý nghĩa sâu xa của cuộc sống qua những chuyến hành trình.',
    love: 'Bạn cần người bạn đời là người bạn đồng hành trong cuộc phiêu lưu. Không thích bị ràng buộc nhưng khi thực sự yêu sẽ vô cùng chân thành. Hợp với Bạch Dương và Sư Tử.',
    career: 'Phù hợp với giảng dạy, triết học, du lịch, xuất bản hoặc tôn giáo. Tầm nhìn rộng và tinh thần học hỏi không ngừng là lợi thế lớn.',
    health: 'Cần chú ý hông và đùi. Hay quá lạc quan mà bỏ qua tín hiệu của cơ thể. Vận động ngoài trời và thiên nhiên rất tốt cho bạn.',
    scores: { love:78, career:87, wealth:74, health:82 }
  },
  { sym:'♑', name:'Ma Kết', en:'Capricorn',         dates:'22/12 – 19/1', element:'Đất', planet:'Sao Thổ',
    traits:['Tham vọng','Kỷ luật','Thực tế','Nhẫn nại'],
    color:'#607D8B',
    personality: 'Ma Kết là người leo núi của hoàng đạo — kiên nhẫn, tham vọng và không bao giờ từ bỏ đỉnh cao. Bạn xây dựng nền tảng vững chắc và thành công qua nỗ lực bền bỉ.',
    love: 'Bạn cẩn thận trong tình yêu, không dễ trao đi trái tim. Nhưng một khi đã yêu là chung thủy và trách nhiệm tuyệt vời. Hợp với Kim Ngưu và Xử Nữ.',
    career: 'Xuất sắc trong kinh doanh, quản lý, kỹ thuật, tài chính hoặc chính trị. Sự kiên trì và tổ chức là vũ khí mạnh nhất của bạn.',
    health: 'Cần chú ý xương khớp và da. Dễ bị căng thẳng vì áp lực công việc. Hãy cân bằng giữa nghỉ ngơi và làm việc.',
    scores: { love:73, career:96, wealth:92, health:70 }
  },
  { sym:'♒', name:'Bảo Bình', en:'Aquarius',        dates:'20/1 – 18/2', element:'Khí', planet:'Sao Thiên Vương',
    traits:['Độc đáo','Nhân đạo','Tiên tiến','Độc lập'],
    color:'#00BCD4',
    personality: 'Bảo Bình là nhà cách mạng và nhà nhân đạo của hoàng đạo. Bạn suy nghĩ vượt thời đại, quan tâm đến nhân loại và luôn mang trong mình những ý tưởng đột phá.',
    love: 'Bạn cần người bạn đời là tri kỷ về mặt trí tuệ. Giữ một phần độc lập trong tình yêu là điều cần thiết với bạn. Hợp với Song Tử và Thiên Bình.',
    career: 'Phù hợp với khoa học, công nghệ, hoạt động xã hội, thiết kế hoặc sáng tạo nội dung. Tư duy đột phá mang lại những phát minh bất ngờ.',
    health: 'Cần chú ý mắt cá chân và hệ tuần hoàn. Dễ bị căng thẳng thần kinh. Hãy dành thời gian để thực sự nghỉ ngơi và tái tạo năng lượng.',
    scores: { love:76, career:89, wealth:80, health:73 }
  },
  { sym:'♓', name:'Song Ngư', en:'Pisces',           dates:'19/2 – 20/3', element:'Nước', planet:'Sao Hải Vương',
    traits:['Mơ mộng','Từ bi','Nghệ sĩ','Tâm linh'],
    color:'#3F51B5',
    personality: 'Song Ngư là linh hồn của sự từ bi và nghệ thuật. Bạn có trực giác tâm linh mạnh mẽ, cảm xúc sâu sắc và khả năng kết nối với cõi vô hình mà ít người cảm nhận được.',
    love: 'Bạn yêu vô điều kiện và sẵn sàng hi sinh vì người yêu. Cần được bảo vệ khỏi bị lợi dụng. Hợp với Cự Giải và Bọ Cạp.',
    career: 'Xuất sắc trong âm nhạc, hội họa, viết lách, tâm lý hoặc y học bổ sung. Trực giác nghệ thuật của bạn là tài năng thiên phú.',
    health: 'Cần chú ý bàn chân và hệ miễn dịch. Rất nhạy cảm với môi trường xung quanh. Thiên nhiên, âm nhạc và meditaiton giúp phục hồi tâm hồn.',
    scores: { love:91, career:78, wealth:68, health:69 }
  }
];

const CUNG_12 = [
  { num:'Cung I',    name:'Mệnh',    star:'Tử Phủ',    color:'#C9A84C', element:'wood'   },
  { num:'Cung II',   name:'Huynh Đệ',star:'Thiên Cơ',  color:'#4CAF50', element:'wood'   },
  { num:'Cung III',  name:'Phu Thê', star:'Thái Dương', color:'#FF6B35', element:'fire'   },
  { num:'Cung IV',   name:'Tử Tức',  star:'Vũ Khúc',   color:'#9B59B6', element:'metal'  },
  { num:'Cung V',    name:'Tài Bạch',star:'Thiên Đồng', color:'#42A5F5', element:'water'  },
  { num:'Cung VI',   name:'Tật Ách', star:'Liêm Trinh', color:'#FF9800', element:'fire'   },
  { num:'Cung VII',  name:'Di Chuyển',star:'Thiên Phủ', color:'#C9A84C', element:'earth'  },
  { num:'Cung VIII', name:'Nô Bộc',  star:'Thái Âm',   color:'#42A5F5', element:'water'  },
  { num:'Cung IX',   name:'Quan Lộc',star:'Tham Lang',  color:'#9B59B6', element:'wood'   },
  { num:'Cung X',    name:'Điền Trạch',star:'Cự Môn',  color:'#4CAF50', element:'earth'  },
  { num:'Cung XI',   name:'Phúc Đức',star:'Thiên Tướng',color:'#FF6B35', element:'fire'   },
  { num:'Cung XII',  name:'Phụ Mẫu', star:'Thiên Lương',color:'#607D8B', element:'metal'  }
];

const MONTHS_2025 = [
  { m:'Tháng 1',  stars:'★★★★★', verdict:'Đại cát',  luck:5  },
  { m:'Tháng 2',  stars:'★★★☆☆', verdict:'Bình thường',luck:3},
  { m:'Tháng 3',  stars:'★★★★☆', verdict:'Tiểu cát', luck:4  },
  { m:'Tháng 4',  stars:'★★☆☆☆', verdict:'Cần cẩn thận',luck:2},
  { m:'Tháng 5',  stars:'★★★★★', verdict:'Đại cát',  luck:5  },
  { m:'Tháng 6',  stars:'★★★★☆', verdict:'Tiểu cát', luck:4  },
  { m:'Tháng 7',  stars:'★★★☆☆', verdict:'Bình thường',luck:3},
  { m:'Tháng 8',  stars:'★★★★★', verdict:'Đại cát',  luck:5  },
  { m:'Tháng 9',  stars:'★★★☆☆', verdict:'Bình thường',luck:3},
  { m:'Tháng 10', stars:'★★☆☆☆', verdict:'Cần cẩn thận',luck:2},
  { m:'Tháng 11', stars:'★★★★☆', verdict:'Tiểu cát', luck:4  },
  { m:'Tháng 12', stars:'★★★★★', verdict:'Đại cát',  luck:5  }
];

const LUCKY_DAYS = [
  { day:3,  month:'T1', title:'Ngày Canh Thìn', desc:'Tốt cho ký kết, khai trương' },
  { day:7,  month:'T1', title:'Ngày Giáp Thân', desc:'Xuất hành, gặp gỡ đối tác' },
  { day:15, month:'T1', title:'Rằm tháng Giêng',desc:'Ngày rất tốt, cầu tài cầu lộc' },
  { day:4,  month:'T2', title:'Ngày Bính Tuất',  desc:'Phù hợp mua nhà, xây dựng' },
  { day:12, month:'T2', title:'Ngày Mậu Ngọ',   desc:'Tốt cho tình duyên, hôn nhân' },
  { day:2,  month:'T3', title:'Ngày Nhâm Tý',   desc:'Khởi nghiệp, đầu tư' },
  { day:19, month:'T3', title:'Ngày Kỷ Mùi',    desc:'Du lịch, học hành' },
  { day:8,  month:'T4', title:'Ngày Đinh Hợi',  desc:'Tốt cho sự nghiệp, thăng tiến' }
];

const HOURS = [
  { time:'23:00–1:00', chi:'Tý',   label:'Giờ Tý',   type:'good' },
  { time:'1:00–3:00',  chi:'Sửu',  label:'Giờ Sửu',  type:'bad'  },
  { time:'3:00–5:00',  chi:'Dần',  label:'Giờ Dần',  type:'good' },
  { time:'5:00–7:00',  chi:'Mão',  label:'Giờ Mão',  type:'bad'  },
  { time:'7:00–9:00',  chi:'Thìn', label:'Giờ Thìn', type:'good' },
  { time:'9:00–11:00', chi:'Tỵ',   label:'Giờ Tỵ',   type:'bad'  },
  { time:'11:00–13:00',chi:'Ngọ',  label:'Giờ Ngọ',  type:'good' },
  { time:'13:00–15:00',chi:'Mùi',  label:'Giờ Mùi',  type:'bad'  },
  { time:'15:00–17:00',chi:'Thân', label:'Giờ Thân', type:'good' },
  { time:'17:00–19:00',chi:'Dậu',  label:'Giờ Dậu',  type:'bad'  },
  { time:'19:00–21:00',chi:'Tuất', label:'Giờ Tuất', type:'good' },
  { time:'21:00–23:00',chi:'Hợi',  label:'Giờ Hợi',  type:'bad'  }
];

const BLOG_POSTS = [
  { emoji:'🌟', cat:'Tử Vi', title:'Năm Ất Tỵ 2025 với 12 cung mệnh', excerpt:'Phân tích chi tiết vận hạn từng cung mệnh trong năm con Rắn 2025, những thay đổi lớn và cơ hội không nên bỏ lỡ...', date:'15/5/2025', read:'8 phút' },
  { emoji:'💕', cat:'Tình Duyên', title:'Cặp đôi hoàng đạo hợp nhất năm 2025', excerpt:'Danh sách những cặp đôi cung hoàng đạo có duyên số đặc biệt trong năm 2025. Liệu bạn và người yêu có trong danh sách?', date:'10/5/2025', read:'5 phút' },
  { emoji:'💰', cat:'Tài Lộc', title:'Bí quyết phong thủy thu hút tài lộc 2025', excerpt:'Những vật phẩm phong thủy, màu sắc và hướng tốt theo từng mệnh giúp tài lộc hanh thông trong năm mới...', date:'5/5/2025', read:'6 phút' },
  { emoji:'🔮', cat:'Kiến Thức', title:'Tử Vi Đẩu Số là gì? Hướng dẫn cơ bản', excerpt:'Giải thích hệ thống Tử Vi Đẩu Số từ căn bản — 12 cung, các sao, thiên can địa chi và cách lập lá số...', date:'1/5/2025', read:'12 phút' },
  { emoji:'⭐', cat:'Hoàng Đạo', title:'Mercury Retrograde và ảnh hưởng đến bạn', excerpt:'Sao Thủy nghịch hành — hiểu đúng về hiện tượng này và cách chuẩn bị để không bị ảnh hưởng tiêu cực...', date:'25/4/2025', read:'7 phút' },
  { emoji:'🏠', cat:'Phong Thủy', title:'Phong thủy phòng ngủ theo tuổi 2025', excerpt:'Hướng giường ngủ, màu sắc phòng và các nguyên tắc phong thủy cơ bản để cải thiện sức khỏe và tình duyên...', date:'20/4/2025', read:'9 phút' }
];

const AI_RESPONSES = [
  { kw:['tháng 6','june','tháng sáu'], reply: 'Tháng 6/2025 đối với mệnh cung của bạn là một tháng khá thuận lợi. Sao Thiên Phúc đóng tại cung Tài Bạch mang đến cơ hội tài chính bất ngờ. Đặc biệt từ ngày 7-15/6, là thời điểm tốt để ký kết hợp đồng hoặc khởi động dự án mới. Tuy nhiên cần cẩn thận trong các quyết định cảm xúc vào cuối tháng.' },
  { kw:['nghề','nghề nghiệp','công việc','career'], reply: 'Dựa trên lá số của bạn với Thiên Phủ thủ mệnh và ngũ hành Hỏa mạnh, bạn phù hợp với những nghề nghiệp đòi hỏi sự lãnh đạo và sáng tạo. Cụ thể: quản lý dự án, kinh doanh riêng, nghệ thuật-truyền thông, hoặc các lĩnh vực đòi hỏi tư duy phân tích. Tránh các nghề quá đơn điệu và thiếu thách thức.' },
  { kw:['tình duyên','tình yêu','love','yêu'], reply: 'Trong năm 2025, Hồng Loan nhập cung Phu Thê báo hiệu duyên tình rất đẹp. Nếu bạn đang độc thân, tháng 3, 5 và 9 là những thời điểm duyên số dễ gặp gỡ nhất. Nếu đã có người yêu, đây là năm củng cố tình cảm và có thể tiến đến hôn nhân. Màu đỏ và hồng là màu may mắn cho tình duyên năm nay.' },
  { kw:['ngày tốt','khởi nghiệp','kinh doanh'], reply: 'Những ngày tốt nhất để khởi nghiệp theo lá số của bạn trong năm 2025: 3/1, 15/3, 2/5, 8/7, 19/9. Giờ khai trương nên chọn giờ Thìn (7-9h sáng) hoặc giờ Ngọ (11h-13h). Hướng mở cửa theo mệnh Hỏa nên chọn hướng Nam hoặc Đông Nam để vượng khí.' },
  { kw:['sức khỏe','health'], reply: 'Năm 2025, cung Tật Ách có Khánh Dư chiếu — nhìn chung sức khỏe ổn định. Tuy nhiên cần chú ý tháng 4 và 10 có thể có vấn đề về đường tiêu hóa hoặc căng thẳng thần kinh. Lời khuyên: duy trì thói quen ngủ đủ giấc, hạn chế đồ ăn cay nóng và tập thể dục nhẹ nhàng buổi sáng.' }
];

/* ═══════════════════════════════════════════════════════
   STAR CANVAS
═══════════════════════════════════════════════════════ */
function initStarCanvas(canvasId, count = 200) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.008,
      speed: Math.random() * 0.15 + 0.05
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a <= 0 || s.a >= 1) s.da *= -1;
      s.y -= s.speed;
      if (s.y < 0) { s.y = H; s.x = Math.random() * W; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

/* ═══════════════════════════════════════════════════════
   TUYZI VI CANVAS — 12-cung wheel
═══════════════════════════════════════════════════════ */
function initTuviCanvas() {
  const canvas = document.getElementById('tuviCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const R_OUT = 195, R_MID = 145, R_IN = 85;

  const colors = CUNG_12.map(c => c.color);
  const darkTheme = document.body.getAttribute('data-theme') !== 'light';

  ctx.clearRect(0, 0, W, H);

  const sliceAngle = (Math.PI * 2) / 12;
  const startOffset = -Math.PI / 2;

  CUNG_12.forEach((cung, i) => {
    const start = startOffset + i * sliceAngle;
    const end   = start + sliceAngle;
    const mid   = start + sliceAngle / 2;
    const col   = colors[i];

    // outer ring slice
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R_OUT, start, end);
    ctx.closePath();
    ctx.fillStyle = hexToRgba(col, 0.08);
    ctx.fill();
    ctx.strokeStyle = hexToRgba(col, 0.25);
    ctx.lineWidth = 1;
    ctx.stroke();

    // mid ring slice
    ctx.beginPath();
    ctx.arc(cx, cy, R_MID, start, end);
    ctx.arc(cx, cy, R_IN,  end, start, true);
    ctx.closePath();
    ctx.fillStyle = hexToRgba(col, 0.14);
    ctx.fill();

    // text labels
    const labelR = (R_OUT + R_MID) / 2;
    const lx = cx + labelR * Math.cos(mid);
    const ly = cy + labelR * Math.sin(mid);
    ctx.save();
    ctx.translate(lx, ly);
    ctx.rotate(mid + Math.PI / 2);
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '600 10px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(cung.name, 0, 0);
    ctx.restore();

    // star name in mid ring
    const starR = (R_MID + R_IN) / 2;
    const sx = cx + starR * Math.cos(mid);
    const sy = cy + starR * Math.sin(mid);
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(mid + Math.PI / 2);
    ctx.fillStyle = col;
    ctx.font = '500 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(cung.star, 0, 0);
    ctx.restore();
  });

  // inner circle glow
  const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, R_IN);
  grad.addColorStop(0, 'rgba(201,168,76,0.15)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.beginPath();
  ctx.arc(cx, cy, R_IN, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  // outer glow ring
  ctx.beginPath();
  ctx.arc(cx, cy, R_OUT, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(201,168,76,0.18)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ═══════════════════════════════════════════════════════
   BUILD 12 CUNG GRID
═══════════════════════════════════════════════════════ */
function buildCungGrid() {
  const grid = document.getElementById('cungGrid');
  if (!grid) return;
  grid.innerHTML = CUNG_12.map((c, i) => `
    <div class="cung-card fade-in ${i === 0 ? 'active' : ''}" onclick="selectCung(${i}, this)">
      <div class="cung-num">${c.num}</div>
      <div class="cung-name">${c.name}</div>
      <div class="cung-star">${c.star}</div>
      <div class="cung-indicator" style="background:${c.color}"></div>
    </div>
  `).join('');
}

function selectCung(i, el) {
  document.querySelectorAll('.cung-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const cung = CUNG_12[i];
  const info = document.getElementById('tuviCenterInfo');
  if (info) {
    info.querySelector('.center-label').textContent = cung.name;
    info.querySelector('.center-value').textContent = cung.star;
  }
}

/* ═══════════════════════════════════════════════════════
   ZODIAC TABS
═══════════════════════════════════════════════════════ */
let activeZodiac = 0;

function buildZodiacTabs() {
  const tabs = document.getElementById('zodiacTabs');
  if (!tabs) return;
  tabs.innerHTML = ZODIAC.map((z, i) => `
    <button class="ztab ${i === 0 ? 'active' : ''}" onclick="selectZodiac(${i})">
      <span class="ztab-symbol">${z.sym}</span>
      <span class="ztab-name">${z.name}</span>
    </button>
  `).join('');
}

function selectZodiac(i) {
  activeZodiac = i;
  document.querySelectorAll('.ztab').forEach((t, j) => t.classList.toggle('active', j === i));
  renderZodiacProfile(ZODIAC[i]);
}

function renderZodiacProfile(z) {
  const el = document.getElementById('zodiacProfile');
  if (!el) return;
  el.innerHTML = `
    <div class="zp-summary fade-in visible">
      <div class="zp-symbol-large">${z.sym}</div>
      <div class="zp-name">${z.name}</div>
      <div class="zp-date">${z.dates} · ${z.element} · ${z.planet}</div>
      <div class="zp-traits">
        ${z.traits.map(t => `<span class="zp-trait">${t}</span>`).join('')}
      </div>
      <div class="zp-scores">
        ${Object.entries({ 'Tình yêu': z.scores.love, 'Sự nghiệp': z.scores.career, 'Tài lộc': z.scores.wealth, 'Sức khỏe': z.scores.health })
          .map(([k,v]) => `
            <div class="zp-score-row">
              <span class="zp-score-label">${k}</span>
              <div class="zp-bar"><div class="zp-fill" style="--w:${v}%"></div></div>
              <span style="font-size:0.75rem;color:var(--gold)">${v}%</span>
            </div>`).join('')}
      </div>
    </div>
    <div class="zp-detail">
      ${[
        { icon:'🌟', title:'Tính Cách',  body: z.personality },
        { icon:'❤️', title:'Tình Yêu',   body: z.love        },
        { icon:'💼', title:'Sự Nghiệp',  body: z.career      },
        { icon:'🏥', title:'Sức Khỏe',   body: z.health      }
      ].map(card => `
        <div class="zp-card fade-in">
          <div class="zp-card-title"><span class="zp-card-icon">${card.icon}</span>${card.title}</div>
          <p>${card.body}</p>
        </div>`).join('')}
    </div>
  `;
  setTimeout(() => el.querySelectorAll('.fade-in').forEach(e => e.classList.add('visible')), 50);
}

/* ═══════════════════════════════════════════════════════
   TÍNH HỢP DUYÊN
═══════════════════════════════════════════════════════ */
function calculateCompatibility() {
  const result = document.getElementById('hdResult');
  result.style.display = 'flex';
  result.style.animation = 'slideUp 0.4s ease';
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ═══════════════════════════════════════════════════════
   HẠN VẬN
═══════════════════════════════════════════════════════ */
function buildMonthGrid() {
  const grid = document.getElementById('monthGrid');
  if (!grid) return;
  grid.innerHTML = MONTHS_2025.map(m => {
    const cls = m.luck >= 4 ? 'lucky' : m.luck <= 2 ? 'unlucky' : 'average';
    return `
      <div class="month-card ${cls} fade-in">
        <div class="month-num">2025</div>
        <div class="month-name">${m.m}</div>
        <div class="month-stars">${m.stars}</div>
        <div class="month-verdict">${m.verdict}</div>
      </div>`;
  }).join('');
}

function buildLuckyDays() {
  const el = document.getElementById('luckyDays');
  if (!el) return;
  el.innerHTML = LUCKY_DAYS.map(d => `
    <div class="lucky-day-card fade-in">
      <div class="ld-date">
        <div class="ld-day">${d.day}</div>
        <div class="ld-month">${d.month}</div>
      </div>
      <div class="ld-info">
        <h4>${d.title}</h4>
        <p>${d.desc}</p>
      </div>
    </div>`).join('');
}

function buildHoursGrid() {
  const el = document.getElementById('hoursGrid');
  if (!el) return;
  el.innerHTML = HOURS.map(h => `
    <div class="hour-card ${h.type} fade-in">
      <div class="hour-dot"></div>
      <div>
        <div class="hour-chi">${h.label}</div>
        <div class="hour-time">${h.time}</div>
        <div class="hour-label">${h.type === 'good' ? 'Giờ tốt ✓' : 'Tránh hoạt động'}</div>
      </div>
    </div>`).join('');
}

function switchHanvan(tab, btn) {
  ['calendar','lucky','hours'].forEach(t => {
    const el = document.getElementById('hv-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  document.querySelectorAll('.hv-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  setTimeout(() => observeVisible(), 50);
}

/* ═══════════════════════════════════════════════════════
   BLOG
═══════════════════════════════════════════════════════ */
function buildBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map(p => `
    <article class="blog-card fade-in" onclick="void(0)">
      <div class="blog-image">${p.emoji}</div>
      <div class="blog-body">
        <div class="blog-category">${p.cat}</div>
        <h3 class="blog-title">${p.title}</h3>
        <p class="blog-excerpt">${p.excerpt}</p>
        <div class="blog-meta">
          <span>${p.date}</span>
          <span>⏱ ${p.read}</span>
        </div>
      </div>
    </article>`).join('');
}

/* ═══════════════════════════════════════════════════════
   AI CHATBOT
═══════════════════════════════════════════════════════ */
function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  addChatMsg(text, 'user');
  input.value = '';
  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = getAIReply(text);
    addChatMsg(reply, 'bot');
  }, 1200 + Math.random() * 800);
}

function sendSuggestion(btn) {
  const text = btn.textContent;
  addChatMsg(text, 'user');
  btn.style.display = 'none';
  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = getAIReply(text);
    addChatMsg(reply, 'bot');
  }, 1200 + Math.random() * 600);
}

function handleChatKey(e) { if (e.key === 'Enter') sendChatMessage(); }

function addChatMsg(text, type) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg chat-${type}`;
  div.innerHTML = `
    <div class="chat-avatar">${type === 'bot' ? '✦' : '?'}</div>
    <div class="chat-bubble"><p>${text}</p></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

let typingEl = null;
function showTyping() {
  const msgs = document.getElementById('chatMessages');
  typingEl = document.createElement('div');
  typingEl.className = 'chat-msg chat-bot';
  typingEl.innerHTML = `
    <div class="chat-avatar">✦</div>
    <div class="chat-bubble">
      <div class="typing-dot"><span></span><span></span><span></span></div>
    </div>`;
  msgs.appendChild(typingEl);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  if (typingEl) { typingEl.remove(); typingEl = null; }
}

function getAIReply(text) {
  const lower = text.toLowerCase();
  for (const r of AI_RESPONSES) {
    if (r.kw.some(k => lower.includes(k))) return r.reply;
  }
  return 'Cảm ơn câu hỏi của bạn! Để luận giải chính xác, tôi cần lá số đầy đủ của bạn. Vui lòng nhập thông tin ngày giờ sinh ở phần đầu trang để tôi phân tích chi tiết hơn. Bạn có thể hỏi về tháng cụ thể, tình duyên, sự nghiệp hoặc sức khỏe trong năm 2025.';
}

/* ═══════════════════════════════════════════════════════
   HERO FORM SUBMIT
═══════════════════════════════════════════════════════ */
function submitHeroForm(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const modal = document.getElementById('resultModal');
  document.getElementById('modalSubtitle').textContent = `Đang phân tích lá số của ${name}...`;
  modal.style.display = 'flex';

  setTimeout(() => {
    document.getElementById('modalBody').innerHTML = `
      <div style="text-align:center;padding:8px 0">
        <div style="font-size:3rem;margin-bottom:16px">🌟</div>
        <h3 style="font-family:var(--font-serif);color:var(--gold);font-size:1.4rem;margin-bottom:8px">Lá Số Của ${name}</h3>
        <p style="color:var(--text-secondary);margin-bottom:20px">Mệnh Cung: <strong style="color:var(--gold)">Dần – Hổ</strong> · Ngũ Hành: <strong style="color:#FF6B35">Hỏa</strong></p>
        <div style="background:var(--navy-3);border-radius:12px;padding:20px;text-align:left;margin-bottom:16px">
          <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.7">Bạn sinh ra mang khí Hỏa vượng với mệnh cung Dần — một lá số đầy sinh lực và hoài bão. Năm 2025 (Ất Tỵ) là thời điểm bước ngoặt quan trọng trong sự nghiệp. Tháng 5 và tháng 8 đặc biệt thuận lợi cho các quyết định lớn...</p>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn-cta btn-cta-sm" onclick="closeModal('resultModal')">Xem Đầy Đủ</button>
          <button class="btn-secondary" onclick="closeModal('resultModal')">Lưu Lá Số</button>
        </div>
      </div>`;
  }, 2000);
}

/* ═══════════════════════════════════════════════════════
   MODALS
═══════════════════════════════════════════════════════ */
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

function openPayment(plan) {
  document.getElementById('paymentModal').style.display = 'flex';
}

/* ═══════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Close mobile menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.nav-link').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));
}

/* ═══════════════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════════════ */
function initTheme() {
  const btn  = document.getElementById('themeToggle');
  const moon = btn.querySelector('.icon-moon');
  const sun  = btn.querySelector('.icon-sun');
  const body = document.body;

  btn.addEventListener('click', () => {
    const isLight = body.getAttribute('data-theme') === 'light';
    body.setAttribute('data-theme', isLight ? 'dark' : 'light');
    moon.style.display = isLight ? 'block' : 'none';
    sun.style.display  = isLight ? 'none'  : 'block';
    localStorage.setItem('thienmenh-theme', isLight ? 'dark' : 'light');
    // re-draw tuvi canvas with updated theme
    setTimeout(initTuviCanvas, 50);
  });

  const saved = localStorage.getItem('thienmenh-theme');
  if (saved === 'light') {
    body.setAttribute('data-theme', 'light');
    moon.style.display = 'none';
    sun.style.display  = 'block';
  }
}

/* ═══════════════════════════════════════════════════════
   INTERSECTION OBSERVER (fade-in)
═══════════════════════════════════════════════════════ */
function observeVisible() {
  const els = document.querySelectorAll('.fade-in:not(.visible)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initStarCanvas('starCanvas', 220);
  initStarCanvas('footerStars', 80);
  initTuviCanvas();
  buildCungGrid();
  buildZodiacTabs();
  renderZodiacProfile(ZODIAC[0]);
  buildMonthGrid();
  buildLuckyDays();
  buildHoursGrid();
  buildBlog();
  setTimeout(observeVisible, 200);
  window.addEventListener('scroll', observeVisible, { passive: true });
});
