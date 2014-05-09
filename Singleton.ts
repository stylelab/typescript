class Singleton {
	private static _instance:Model = null;

	constructor() {
		if(Singleton._instance){
			throw new Error("Error: ClassName.getInstance()を使ってね。");
		}
		Singleton._instance = this;
	}
	public static getInstance():Model {
		if(Singleton._instance === null) {
			Singleton._instance = new Singleton();
		}
		return Singleton._instance;
	}
}