function OnButtunClick(ele)
    {
    // Button id　取得
    var id_value = ele.id;

    // Form読み込み
    var penetration_data = document.getElementById("penetration").value;
    var ignore_data = document.getElementById("ignore").value;
    var add_penetration_data = document.getElementById("add_penetration_form").value;
    var add_ignore_data = document.getElementById("add_ignore_form").value;

    // Button判定
    if(id_value == "add_penetration_button")
    {
        penetration_data = parseInt(penetration_data) + parseInt(add_penetration_data);
    }
    else if(id_value == "remove_penetration_button")
    {
        penetration_data = parseInt(penetration_data) - parseInt(add_penetration_data);
    }
    else if(id_value == "add_ignore_button")
    {
        ignore_data = parseInt(ignore_data) + parseInt(add_ignore_data);
    }
    else if(id_value == "remove_ignore_button")
    {
        ignore_data = parseInt(ignore_data) - parseInt(add_ignore_data);
    }

    // Form 更新
    document.getElementById("penetration").value = penetration_data;
    document.getElementById("ignore").value = ignore_data;

    // 再計算
    Calculate();

}