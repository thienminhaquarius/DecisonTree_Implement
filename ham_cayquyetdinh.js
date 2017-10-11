//ham main chay chinh
var chayketqua=function(data,colUse,rowUse,result,attribute)//attribute bien toan cuc
{

	//check all yes all no
	if(data.length==0)
	{
		result="Khong co data";
		return;
	}
	var check=checkYesNo(data,rowUse);
	if(check==1) //all yes
	{	
		var kq=taoObjectKetQua(colUse,attribute);
		var ten;
		ten=attribute[attribute.length-1];
		kq[ten]='Yes';
		//alert(JSON.stringify(kq));
		result.push(kq);
		return;

	}
	if(check==0)	//all no
	{
			var kq=taoObjectKetQua(colUse,attribute);
			var ten;
			ten=attribute[attribute.length-1];
			kq[ten]='No';
			//alert(JSON.stringify(kq));
			result.push(kq);
			return;

	}
	//truong hop yes no khong dong nhat
	var entropyS=timS(data,rowUse); //tim S 

	var gainMax=-1;
	var indexTrongcolUse=-1;
	var dulieu;
	for(var i=0;i<colUse.length-1;i++) //tinh gain cac thuoc tinh, hang cuoi la 'Play' nen khong dua vao
	{
		if(colUse[i].trangthai==null) // thuc tinh chua duoc chon lam node.
		{

			var gain=0;
			var temp=[];
			for(var j=0;j<colUse[i].thuoctinh.length;j++)
			{
				var tenNode=attribute[i];
				var tenThuocTinh=colUse[i].thuoctinh[j];
				var objtrave=timSoLuong_EntropyThuocTinh(data,rowUse,tenNode,tenThuocTinh,attribute);
				temp.push(objtrave);
			}
			for(var j=0;j<temp.length;j++)
			{
				//alert("soluong:" +temp[j].soluong+ "   entrolpy: "+ temp[j].entropy);
				gain=gain+(temp[j].soluong/rowUse.length)*(temp[j].entropy);
			}

			if(gainMax<(entropyS-gain))
			{
				gainMax=entropyS-gain;
				indexTrongcolUse=i;
				dulieu=temp;
			}

		}
	}
	//su khi tim gain
	if(gainMax==-1)//khong tim dduoc node moi
	{
		return;
	}
	for(var i=0;i<dulieu.length;i++)
	{
		//alert(JSON.stringify(colUse));
		if(dulieu[i].vitri.length!=0)
		{
			//update cac tham so dau vao
			var newColUse=JSON.parse(JSON.stringify(colUse));
			newColUse[indexTrongcolUse].trangthai=newColUse[indexTrongcolUse].thuoctinh[i];
			var newRowUse=dulieu[i].vitri;
			chayketqua(data,newColUse,newRowUse,result,attribute);
		}
	}
}