function Calculate(){
    
    // Form読み込み    
    var enemy_regist_data =document.getElementById("enemy_regist").value;
    var tank_regist_data =document.getElementById("tank_regist").value;
    var healer_regist_data =document.getElementById("healer_regist").value;
    var penetration_data = document.getElementById("penetration").value;
    var ignore_data = document.getElementById("ignore").value;
    var option_data = document.getElementById("buff_options").options;
    var add_penetration_data = document.getElementById("add_penetration_form").value;

    // 強力な呪い
    if ( option_data[0].selected ) {
        ignore_data = parseInt(ignore_data) + parseInt(9800);
    }

    // 死刑宣告
    if ( option_data[1].selected ) {
        ignore_data = parseInt(ignore_data) + parseInt(5000);
    }

    // 戦いの鬨
    if ( option_data[2].selected ) {
        penetration_data = parseInt(penetration_data) + parseInt(1335);
    }

    // マナソング
    if ( option_data[3].selected ) {
        healer_regist_data = parseInt(healer_regist_data) * 1.04;
    }

    // 信頼の歌
    if ( option_data[4].selected ) {
        tank_regist_data =  parseInt(tank_regist_data) * 1.04;
    }
    
    // 計算
    var penetration_value = enemy_regist_data * ( penetration_data / ( parseInt(penetration_data) + parseInt(10000) ) );
    var ignore_value = ignore_data;
    var buff_value = (parseInt(tank_regist_data) * 0.1) + (parseInt(healer_regist_data) * 0.1);

    var result_data = parseInt(enemy_regist_data) - parseInt(penetration_value) - parseInt(ignore_value) - parseInt(buff_value);
    
    document.getElementById("result").value = result_data;

    // 貫通上昇量計算
    var penetration_coeff = parseInt(penetration_data) + parseInt(add_penetration_data);
    var penetration_value = enemy_regist_data * ( penetration_coeff / ( parseInt(penetration_coeff) + parseInt(10000) ) );
    var coeff_result = parseInt(enemy_regist_data) - parseInt(penetration_value) - parseInt(ignore_value) - parseInt(buff_value)
    document.getElementById("add_penetration_coeff").value = parseInt(coeff_result) - parseInt(result_data) ;

    // 貫通減少量計算
    var penetration_coeff = parseInt(penetration_data) - parseInt(add_penetration_data);    
    var penetration_value = enemy_regist_data * ( penetration_coeff / ( parseInt(penetration_coeff) + parseInt(10000) ) );
    var coeff_result = parseInt(enemy_regist_data) - parseInt(penetration_value) - parseInt(ignore_value) - parseInt(buff_value)
    document.getElementById("remove_penetration_coeff").value = parseInt(coeff_result) - parseInt(result_data);
    
}
