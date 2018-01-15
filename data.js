
// intital data 
// Nhap data vào đây. trường Yes/No luôn nằm ở cuối cùng

var DataDefault = [
{outlook:'Sunny', temp:'Hot', humidity:'High', wind: 'Weak',play:'No'},
{outlook:'Sunny', temp:'Hot', humidity:'High', wind: 'Strong',play:'No'},
{outlook:'Overcast', temp:'Hot', humidity:'High', wind: 'Weak',play:'Yes'},
{outlook:'Rain', temp:'Mild', humidity:'High', wind: 'Weak',play:'Yes'},
{outlook:'Rain', temp:'Cool', humidity:'Normal', wind: 'Weak',play:'Yes'},
{outlook:'Rain', temp:'Cool', humidity:'Normal', wind: 'Strong',play:'No'},
{outlook:'Overcast', temp:'Cool', humidity:'Normal', wind: 'Strong',play:'Yes'},
{outlook:'Sunny', temp:'Mild', humidity:'High', wind: 'Weak',play:'No'},
{outlook:'Sunny', temp:'Cool', humidity:'Normal', wind: 'Weak',play:'Yes'},
{outlook:'Rain', temp:'Mild', humidity:'Normal', wind: 'Weak',play:'Yes'},
{outlook:'Sunny', temp:'Mild', humidity:'Normal', wind: 'Strong',play:'Yes'},
{outlook:'Overcast', temp:'Mild', humidity:'High', wind: 'Strong',play:'Yes'},
{outlook:'Overcast', temp:'Hot', humidity:'Normal', wind: 'Weak',play:'Yes'},
{outlook:'Rain', temp:'Mild', humidity:'High', wind: 'Strong',play:'No'}
];

var DataDefault2=[
{'Học trên lớp':'20%', 'Học nhóm':'Có', 'Làm bài tập':'Chỉ giải đề thi', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'80%', 'Học nhóm':'Không', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Không', 'Ghi bài':'Không', 'Qua môn':'No'},
{'Học trên lớp':'20%', 'Học nhóm':'Có', 'Làm bài tập':'Chỉ giải đề thi', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'80%', 'Học nhóm':'Không', 'Làm bài tập':'Có', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'No'},
{'Học trên lớp':'20%', 'Học nhóm':'Ít', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Không', 'Ghi bài':'Có', 'Qua môn':'No'},
{'Học trên lớp':'80%', 'Học nhóm':'Có', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Có', 'Ghi bài':'Có', 'Qua môn':'Yes'},
{'Học trên lớp':'20%', 'Học nhóm':'Không', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'20%', 'Học nhóm':'Có', 'Làm bài tập':'Chỉ giải đề thi', 'Tự học ở nhà':'Không', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'100%', 'Học nhóm':'Có', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Không', 'Qua môn':'No'},
{'Học trên lớp':'20%', 'Học nhóm':'Có', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'100%', 'Học nhóm':'Có', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Có', 'Ghi bài':'Có', 'Qua môn':'No'},
{'Học trên lớp':'80%', 'Học nhóm':'Không', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'80%', 'Học nhóm':'Ít', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Không', 'Ghi bài':'Có', 'Qua môn':'Yes'},
{'Học trên lớp':'20%', 'Học nhóm':'Có', 'Làm bài tập':'Có', 'Tự học ở nhà':'Không', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'0%', 'Học nhóm':'Có', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'No'},
{'Học trên lớp':'20%', 'Học nhóm':'Không', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Không', 'Ghi bài':'Có', 'Qua môn':'No'},
{'Học trên lớp':'80%', 'Học nhóm':'Có', 'Làm bài tập':'Chỉ giải đề thi', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'50%', 'Học nhóm':'Có', 'Làm bài tập':'Có', 'Tự học ở nhà':'Không', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'20%', 'Học nhóm':'Không', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Không', 'Qua môn':'No'},
{'Học trên lớp':'50%', 'Học nhóm':'Ít', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Có', 'Ghi bài':'Có', 'Qua môn':'Yes'},
{'Học trên lớp':'100%', 'Học nhóm':'Không', 'Làm bài tập':'Có', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Có', 'Qua môn':'No'},
{'Học trên lớp':'100%', 'Học nhóm':'Có', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Không', 'Ghi bài':'Không', 'Qua môn':'Yes'},
{'Học trên lớp':'20%', 'Học nhóm':'Không', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Có', 'Ghi bài':'Có', 'Qua môn':'Yes'},
{'Học trên lớp':'80%', 'Học nhóm':'Ít', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Có', 'Qua môn':'Yes'},
{'Học trên lớp':'80%', 'Học nhóm':'Ít', 'Làm bài tập':'Thỉnh thoảng', 'Tự học ở nhà':'Trung bình', 'Ghi bài':'Có', 'Qua môn':'No'},
{'Học trên lớp':'20%', 'Học nhóm':'Ít', 'Làm bài tập':'Không làm', 'Tự học ở nhà':'Có', 'Ghi bài':'Không', 'Qua môn':'No'},
{'Học trên lớp':'20%', 'Học nhóm':'Ít', 'Làm bài tập':'Có', 'Tự học ở nhà':'Có', 'Ghi bài':'Có', 'Qua môn':'No'},
{'Học trên lớp':'50%', 'Học nhóm':'Có', 'Làm bài tập':'Chỉ giải đề thi', 'Tự học ở nhà':'Không', 'Ghi bài':'Không', 'Qua môn':'Yes'},

];