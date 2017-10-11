
function timS(data_,rowUse_){
	var s=0;
	var Tong=rowUse_.length;
	var Yes=0;
	var No=0;
	var hang;
	for(var i=0;i<rowUse_.length;i++)
	{
		hang=rowUse_[i];
		if(data_[hang].play==='Yes')
		{
			Yes++;
		}
	}
	No=Tong-Yes;

	s=((-Yes/Tong)*Math.log2(Yes/Tong)) + ((-No/Tong)*Math.log2(No/Tong)) ;
	return s;

}

//Tat ca yes=1 tat ca no=0 con lai -1
function checkYesNo(data_,rowUse_){
	var Tong=rowUse_.length;
	var Yes=0;

	for(var i=0;i<rowUse_.length;i++)
	{
		hang=rowUse_[i];
		if(data_[hang].play==='Yes')
		{
			Yes++;
		}
	}
	
	if(Yes==Tong)
	{
		return 1;
	}
	if(Yes==0)
	{
		return 0;
	}
	return -1;

}



function taoObjectKetQua(colUse_,attribute_)
{
	var obj = new Object();

	for(var i=0;i<attribute_.length;i++)
	{
		obj[attribute_[i]]=colUse_[i].trangthai;
	}
	return obj;

}

function timSoLuong_EntropyThuocTinh(data_,rowUse_,tenNode_,tenThuocTinh_,attribute_) //tra ve object so luong va entropy thuyoc tinh dang xet 
{
	var entropy=0;
	var soluong=0;
	var vitri=[];
	var yes=0;
	var thuoctinhcuoi=attribute_[attribute_.length-1];
	for(var i=0;i<rowUse_.length;i++)
	{
		if(data_[rowUse_[i]][tenNode_]===tenThuocTinh_)
		{
			soluong++;
			if(data_[rowUse_[i]][thuoctinhcuoi] =='Yes')
			{
				yes++;
			}
			vitri.push(rowUse_[i]);
		}
	}
	var no= soluong-yes;
	if(yes==0 || no==0)
	{
		entropy=0;
	}
	else
	{
		entropy=((-yes/soluong)*Math.log2(yes/soluong)) + ((-no/soluong)*Math.log2(no/soluong)) ;
	}
	
	var obj={soluong:soluong,entropy:entropy,vitri:vitri};
	return obj;
	
}
function trinhBayKetQua(result_,attribute_)
{
	var txt='<b>Các thuộc tính không hiện thì nhận bất cứ giá trị nào<br><br></b>';
	for(var i=0;i<result_.length;i++)
	{
		txt+="<b>IF </b>";
		var x;
		for(x in result_[i])
		{
			if(x==attribute_[attribute_.length-1])
			{
				txt+= '<b>' +'THEN '+x+': '+'</b>'+'<i>'+result_[i][x]+'</i>';
				break;
			}
			if(result_[i][x]!=null)
			{
				txt+='<b>'+x+': '+'</b>'+'<i>'+result_[i][x]+'</i>'+', ';
			}
			
		}
		txt+='<br>';
	}
	return txt;
}

function initialVariables()// initial Atrubute, ColUse, RowUse
{
    function checkInArray(x,arr){
        for(var i=0;i<arr.length;i++)
        {
            if(x===arr[i])
                return true;
        }
        return false;
    }

    Attribute=[];
    if(Data.length!=0)
    {
        for(var x in Data[0])
        {
            Attribute.push(x); //we got Attribute!
        }
    }
    RowUse=[];
    for(var i=0;i<Data.length;i++)
    {
        RowUse.push(i); //we got RowUse!;
    }
    ColUse=[];
    for(var i=0;i<Attribute.length;i++)
    {
        var classname=Attribute[i];
        var tempObject=new Object();
        tempObject['trangthai']=null;
        tempObject['thuoctinh']=[];

        for(var j=0;j<Data.length;j++)
        {
            var tempx=Data[j][classname]
            if(!checkInArray(tempx,tempObject['thuoctinh']))
            {
                tempObject['thuoctinh'].push(tempx);
            }
        }
        ColUse.push(tempObject);
    }
}

function getDataFromeTable()// input Data
{
    Data=[];
    var classname=[];
    for(var i=0;i<cols;i++) //get class name
    {
        var temp=document.getElementById(i).value;
        classname.push(temp);
    }
    var index=cols; //initial get value at line 2 of the table (line 1 is class name)
    while(index<(rows*cols))
    {
        var tempObject = new Object();
        for(var i=0;i<classname.length;i++)
        {
            tempObject[classname[i]]=document.getElementById(index).value; // get per cell in to object
            index++;
        }
        Data.push(tempObject); // push tempObject to data
    }

}

function createTableDefault(){
	document.getElementById("demo").innerHTML ='';
    Data=JSON.parse(JSON.stringify(DataDefault));
    var id=0;
    rows=15;
    cols=5;
    document.getElementById("Tablesample").innerHTML = generateTable(rows,cols);
    if(Data.length!=0)// if we got data
    {
        for(var x in Data[0]){
            document.getElementById(id).value=x;
            id++;
        }
        for(var i=0;i<Data.length;i++)
        {
            for(var x in Data[i])
            {
                document.getElementById(id).value=Data[i][x];
                id++;
            }
        }
    }
}

function generateTable(rows,cols){
	document.getElementById("demo").innerHTML ='';
    var txt='';
    var firstRow=0;
    var index=0;
    var tr_start='<tr>';
    var tr_end='</tr>';
    var td_start='<td>';
    var td_end='</td>';
    for(var i=0;i<rows;i++)
    {
        txt+=td_start;
        for(var j=0;j<cols;j++)
        {
            txt+=td_start;
            if(firstRow>=cols)
            {
                txt+='<input type="text" id="'+index+'">';
            }
            else
            {
                txt+='<input type="text" id="'+index+'"'+'style="background-color: #4CAF50;color: white;"'+ '>';
                firstRow++;
            }
            txt+=td_end;
            index++;
        }
        txt+=tr_end;
    }
    return txt;
}

function createTable(){
    rows=document.getElementById("rows_id").value;
    cols=document.getElementById("col_id").value;
    document.getElementById("Tablesample").innerHTML = generateTable(rows,cols);
}