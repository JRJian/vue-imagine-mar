var getTranslate = function(node, sty) {//获取transform值
    var translates=document.defaultView.getComputedStyle(node,null).transform.substring(7);
    var result = translates.match(/\(([^)]*)\)/);// 正则()内容
    var matrix=result?result[1].split(','):translates.split(',');
    if(sty=="x" || sty==undefined){
        return matrix.length>6?parseFloat(matrix[12]):parseFloat(matrix[4]);
    }else if(sty=="y"){
        return matrix.length>6?parseFloat(matrix[13]):parseFloat(matrix[5]);
    }else if(sty=="z"){
        return matrix.length>6?parseFloat(matrix[14]):0;
    }else if(sty=="rotate"){
        return matrix.length>6?getRotate([parseFloat(matrix[0]),parseFloat(matrix[1]),parseFloat(matrix[4]),parseFloat(matrix[5])]):getRotate(matrix);
    }
}

export default {
    getTranslate
}