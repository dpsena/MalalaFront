export interface Records{
    id:String;
    dateAndHour:Date,
    pathology:String,
    observations:String,
    recommendations:String,
    printer:Boolean,
    user:Array<String>;
}