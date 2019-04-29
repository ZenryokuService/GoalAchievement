/** 目標ブレークツリーの作成 */

// 目標ブレークツリー・テンプレートデータ
function simple_chart_config() {
    var config = {
        chart: {
            container: "#breakTree",
            levelSeparation:    150,
             siblingSeparation:  15,
             subTeeSeparation:   15,
             rootOrientation: "NORTH",

             node: {
                 HTMLclass: "tennis-raw",
                 drawLineThrough: false
             },
             connectors: {
                 type: "straight",
                 style: {
                     "stroke-width": 2,
                     "stroke": "#ccc"
                 }
             }
        },

        nodeStructure: {
            image: "./img/Lv0-1_創造実行.png",
            text: {id: "Ob0", name: "Lv0:最終目標" },
            children: [
                {
                    text: {id: "Ob1", name: "Lv1:具現化項目A" },
                    children: [
                        {text: {id: "Ob4", name: "Lv2:実行項目A-1"}},
                        {text: {id: "Ob5", name: "Lv2:実行項目A-2"}},
                        {text: {id: "Ob6", name: "Lv2:実行項目A-3"}}
                    ]
                },
                {
                    text: {id: "Ob2", name: "Lv1:具現化項目B" },
                    children: [
                        {text:{id: "Ob7", name: "Lv2:実行項目B-1"}},
                        {text: {id: "Ob8", name: "Lv2:実行項目B-2"}},
                        {text: {id: "Ob9", name: "Lv2:実行項目B-3"}}
                    ]
                },
                {
                    text: {id: "Ob3", name: "Lv1:具現化項目C" },
                    children: [
                        {text: {id: "Ob10", name: "Lv2:実行項目C-1"}},
                        {text: {id: "Ob11", name: "Lv2:実行項目C-2"}},
                        {text: {id: "Ob12", name: "Lv2:実行項目C-3"}}
                    ]
                },
            ]
        }
    };
    return config;
}


/**
 * 目標ブレークツリーをhiddenデータより作成する
 * 1. hideenデータを読み取る
 * 2. デフォルトのツリーにデータを当てはめる
 * 3. 対象部分にデータがない場合は非表示にする
 */
function main() {
    // デフォルトツリーを作成する
    createDefaultTree();
}

/**
 * デフォルトの目標ブレークツリーを作成する
 * Treant.jsを使用する
 *
 * @see https://fperucic.github.io/treant-js/ -> Treant.jsのホームページ
 * @see https://codepen.io/shoyan/pen/qNOMoN ->  サンプルコードと表示結果
 */
function createDefaultTree() {
    // ダイヤグラムのテンプレートデータの取得
    var config = simple_chart_config();
    // HTMLデータよりconfigを編集する
    loadConfig(config);
    var my_chart = new Treant(config);
}

/**
 * HTMLのhiddenデータよりをTreant.jsの設定データを設定する。
 */
function loadConfig(config) {
    // 値の取得
    var ob0 = document.getElementById("Ob0").getAttribute("value");
    var ob1 = document.getElementById("Ob1").getAttribute("value");
    var ob2 = document.getElementById("Ob2").getAttribute("value");
    var ob3 = document.getElementById("Ob3").getAttribute("value");
    var ob4 = document.getElementById("Ob4").getAttribute("value");
    var ob5 = document.getElementById("Ob5").getAttribute("value");
    var ob6 = document.getElementById("Ob6").getAttribute("value");
    var ob7 = document.getElementById("Ob7").getAttribute("value");
    var ob8 = document.getElementById("Ob8").getAttribute("value");
    var ob9 = document.getElementById("Ob9").getAttribute("value");
    var ob10 = document.getElementById("Ob10").getAttribute("value");
    var ob11 = document.getElementById("Ob11").getAttribute("value");
    var ob12 = document.getElementById("Ob12").getAttribute("value");

    // ルート
    config.nodeStructure.text.name = ob0;
    // Lv1の設定
    config.nodeStructure.children[0].text.name = ob1;
    config.nodeStructure.children[1].text.name = ob2;
    config.nodeStructure.children[2].text.name = ob3;
    // Lv2-1 の設定
    config.nodeStructure.children[0].children[0].text.name = ob4;
    config.nodeStructure.children[0].children[1].text.name = ob5;
    config.nodeStructure.children[0].children[2].text.name = ob6;
    // Lv2-2 の設定
    config.nodeStructure.children[1].children[0].text.name = ob7;
    config.nodeStructure.children[1].children[1].text.name = ob8;
    config.nodeStructure.children[1].children[2].text.name = ob9;
    // Lv2-3 の設定
    config.nodeStructure.children[2].children[0].text.name = ob10;
    config.nodeStructure.children[2].children[1].text.name = ob11;
    config.nodeStructure.children[2].children[2].text.name = ob12;
}

/**
 * Lv1のオブジェクトからLv2のデータを設定する
 */
function setBreakTreeData(level1) {
}
