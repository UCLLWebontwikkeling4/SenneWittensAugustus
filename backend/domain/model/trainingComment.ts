export class TrainingComment{
    readonly id?:number
    readonly text:string
    readonly date:Date
    readonly training?:number
    readonly user?:number


    constructor(comment: {id: number, text:string, date:Date, trainingid?:number, userid?:number}){
        this.id = comment.id
        if (comment.text === null){
            throw new Error(`Please provide text for your comment. `)
        }
        this.text= comment.text
        this.date=comment.date
        this.training=comment.trainingid
        this.user=comment.userid
    }

    static create({id, text, date, trainingid, userid}): TrainingComment{
        return new TrainingComment({id, text, date, trainingid, userid})
    }
}








