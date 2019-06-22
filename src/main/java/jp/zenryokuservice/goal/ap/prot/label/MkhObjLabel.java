package jp.zenryokuservice.goal.ap.prot.label;

import javafx.scene.control.Label;

/**
 * 目標オブジェクト用のラベル。
 * 画面へツリー状に表示するラベルコンポーネント。
 * 【実装方針】
 * 
 * @author takunoji
 * 2019/06/08
 */
public class MkhObjLabel extends Label {
	/**
	 * コンストラクタ画面上に表示する目標オブジェクト。
	 * このオブジェクトのリレーションを線で表現する。
	 * @param title
	 */
	public MkhObjLabel(String title) {
		setText(title);
	}
}