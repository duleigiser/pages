/**
 * Created by lei on 2016/7/20 0020.
 */
function rootpath() {
    var url = $('<input id="url" type="hidden" value="">');
    $("body").prepend(url);
    var curWwwPath = window.document.location.href;
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPath = curWwwPath.substring(0, pos);
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    document.getElementById("url").value = localhostPath + projectName;
}
rootpath();
var rootPath = $('#url').val();
function getTree() {
    var org_id = localStorage.getItem("orgid");
    var url    = (org_id == "a61365e2-969d-4352-b3f8-805027ab9f1d") ? rootPath + "/portal/getJTSYTreeMenu.do" : rootPath　 + 　"/portal/getSYTreeMenu.do?orgid=" + org_id;
    getTreeData(url);
}
function getTreeData(url){
    $.ajax({
        type: "GET",
        url: url,
        dataType:"JSON",
        success: function(data){
            var setting = {callback: {onClick: zTreeOnClick}};
            $.fn.zTree.init($("#tree"), setting, data);
            $("#tree_1_switch").click();//默认展开机组
            $("#tree_1_span").click();//默认显示电厂的相关信息
        }

    })
}

getTree();