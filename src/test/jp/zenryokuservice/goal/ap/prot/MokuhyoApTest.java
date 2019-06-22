package jp.zenryokuservice.goal.ap.prot;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

/**
 * 目標達成APプロトタイプのテストクラス。
 * 
 * @author takunoji
 * 2019/06/05
 */
public class MokuhyoApTest extends Application {
	private int HEIGHT = 500;
	private int WIDTH = 500;
	/* Test for MaokuhyoAp extends BorderPane(for Desktop) or View(Gluon Mobile)
	 * @see javafx.application.Application#start(javafx.stage.Stage)
	 */
	@Override
	public void start(Stage primaryStage) throws Exception {
		primaryStage.setHeight(HEIGHT);
		MokuhyoAp ap = new MokuhyoAp();
		Scene scene = new Scene(ap, WIDTH, HEIGHT);
		primaryStage.setScene(scene);
		primaryStage.show();
	}

	/**
	 * Execute MokuhyoAp
	 * @param args
	 */
	public static void main(String[] args) {
		launch();
	}

}
