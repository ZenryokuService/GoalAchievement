package jp.zenryokuservice.goal.ap.prot;

import javax.media.opengl.GLAutoDrawable;
import javax.media.opengl.GLEventListener;

import javafx.application.Application;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;
import jp.zenryokuservice.goal.ap.prot.label.MkhObjLabel;

/**
 * 目標達成アプリのプロトタイプを作成する、以下の機能のみ実装。
 * 1. 目標ブレーク機能
 * 2. タスク一覧機能
 * 3. 進捗率集計機能
 * 本チャンではViewクラスを継承するように修正する。
 * @author takunoji
 * 2019/06/05
 */
public class MokuhyoAp extends BorderPane implements GLEventListener {

	/**
	 * コンストラクタ。
	 * 画面の描画を行う。
	 */
	public MokuhyoAp() {
		
	}

	/* (non-Javadoc)
	 * @see javax.media.opengl.GLEventListener#init(javax.media.opengl.GLAutoDrawable)
	 */
	public void init(GLAutoDrawable arg0) {
		
	}

	/* (non-Javadoc)
	 * @see javax.media.opengl.GLEventListener#display(javax.media.opengl.GLAutoDrawable)
	 */
	public void display(GLAutoDrawable arg0) {
		
	}

	/* (non-Javadoc)
	 * @see javax.media.opengl.GLEventListener#displayChanged(javax.media.opengl.GLAutoDrawable, boolean, boolean)
	 */
	public void displayChanged(GLAutoDrawable arg0, boolean arg1, boolean arg2) {
		// TODO Auto-generated method stub
		
	}

	/* (non-Javadoc)
	 * @see javax.media.opengl.GLEventListener#reshape(javax.media.opengl.GLAutoDrawable, int, int, int, int)
	 */
	public void reshape(GLAutoDrawable arg0, int arg1, int arg2, int arg3, int arg4) {
		// TODO Auto-generated method stub
		
	}
	
}


