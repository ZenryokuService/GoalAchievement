package jp.zenryokuservice.goal.ap.prot;

import javax.media.opengl.GL;
import javax.media.opengl.GLAutoDrawable;
import javax.media.opengl.GLCanvas;
import javax.media.opengl.GLEventListener;
import javax.media.opengl.GLJPanel;

import com.jogamp.opengl.GL2;
import com.jogamp.opengl.GLCapabilities;
import com.jogamp.opengl.GLProfile;

import javafx.application.Application;
import javafx.collections.ObservableList;
import javafx.embed.swing.SwingNode;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Group;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Text;
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
public class MokuhyoAp extends BorderPane {
	/** 高さ */
	private int HEIGHT = 500;
	/** 幅 */
	private int WIDTH = 500;
	/** 北のコンテナ */
	private Group north;
	/** 中央のコンテナ */
	private Group center;
	/** 東のコンテナ */
	private Group east;
	/** 西のコンテナ */
	private Group west;
	/** 南のコンテナ */
	private Group south;

	/**
	 * コンストラクタ。
	 * 画面の描画を行う。GLCanvasをBorderPaneに追加
	 */
	public MokuhyoAp() {
		init();
		MkhObjLabel mkhObj = new MkhObjLabel("test");
		center.getChildren().add(new Text("testing ..."));

		this.setCenter(center);
	}

	/**
	 * このBorderPaneの初期設定処理を行う。
	 */
	private void init() {
		north = new Group();
		center = new Group();
		east = new Group();
		west = new Group();
		south = new Group();
//		BorderPane.setAlignment(north, Pos.TOP_CENTER);
//		BorderPane.setAlignment(center, Pos.CENTER);
//		BorderPane.setAlignment(east, Pos.CENTER_LEFT);
//		BorderPane.setAlignment(west, Pos.CENTER_RIGHT);
//		BorderPane.setAlignment(south, Pos.BOTTOM_CENTER);
	}
}


