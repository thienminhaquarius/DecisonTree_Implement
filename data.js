
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


// nhập cac attribute cần xét (bỏ day, vì day xem như số thứ tự, không có giá trị)
//var Attribute=['outlook','temp','humidity','wind','play'];

// Khởi tạo cột tất cả trangthai:Null, thuoctinh là các thuộc tính khác nhau trong cột, thêm thuộc tính thì viết thêm
/*
var ColUse=				[	{trangthai:null,thuoctinh:['Sunny','Overcast','Rain']},
							{trangthai:null,thuoctinh:['Hot','Cool','Mild']},
							{trangthai:null,thuoctinh:['High','Normal']},
							{trangthai:null,thuoctinh:['Weak','Strong']},
							{trangthai:null,thuoctinh:['Yes','No']}
							//thêm thuộc tính khác tương ứng với data
							];
// khởi tạo số dòng
var RowUse=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];
*/