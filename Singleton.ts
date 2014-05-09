class Singleton {
	private static _instance:Singleton = null;

	constructor() {
		if(Singleton._instance){
			throw new Error("Error: ClassName.getInstance()を使ってね。");
		}
		Singleton._instance = this;
	}
	public static getInstance():Singleton {
		if(Singleton._instance === null) {
			Singleton._instance = new Singleton();
		}
		return Singleton._instance;
	}
}