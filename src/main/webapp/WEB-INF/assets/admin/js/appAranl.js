/**
 * Created by Aranl_lin on 2017/8/10.
 */
// 传入对应表单id,重置表单
function resetSearch(id) {
    var $searchForm = $("#" + id);
    $searchForm.find("input[type='text']").each(function () {
        $(this).val('');
    })
    $searchForm.find("input[type='hidden']").each(function () {
        $(this).val('');
    })
    $searchForm.find("select").each(function () {
        $(this).val('');
    })
}
//操作提示,确定后刷新页面
function infoUpdate() {
    window.location.reload(true);
}

function infoClose(a){
    $("#"+a).modal("hide");
}

function searchTime(id) {
    var $endTimeStr = $("#" + id)
    var endTimeStr = $endTimeStr.val();
    if (endTimeStr != null) {
        endTimeStr = endTimeStr;
        endTimeStr += " 00:00:00";
        $endTimeStr.next().val(endTimeStr);
    }
}





// // 删除操作，删除对应的对象
// var removeId;
// var removeUrl;
// function remove(id,url) {
//     removeId = id;
//     removeUrl = url;
//     $("#deleteOperation").modal('show');
// }
// function submitRemove() {
//     doPost(removeUrl, {id: removeId}, function (data) {
//         //防止误删
//         removeId = null;
//         removeUrl = null;
//         if (data.status) {
//             $("#info_success").modal('show');
//             setTimeout(function(){
//                 window.location.reload(true);
//             },680);
//         } else {
//             if (data.msg != null && data.msg.length != 0) {
//                 $("#info").html(data.msg);
//             }
//             $("#info_fail").modal('show');
//         }
//     });
//     //防止误删
//     if(removeId!=null){
//         removeId=null;
//         removeUrl=null;
//     }
// }













