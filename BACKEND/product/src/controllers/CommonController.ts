class CommonController {
    getDateTime() :string {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear() + "-"
            + ((currentdate.getMonth() + 1  < 10)?"0"+(currentdate.getMonth() + 1):(currentdate.getMonth()+1)) + "-"
            + ((currentdate.getDate() < 10)?"0"+currentdate.getDate():currentdate.getDate()) + " "
            + ((currentdate.getHours() < 10)?"0"+currentdate.getHours():currentdate.getHours()) + ":"
            + ((currentdate.getMinutes() < 10)?"0"+currentdate.getMinutes():currentdate.getMinutes()) + ":"
            + ((currentdate.getSeconds() < 10)?"0"+currentdate.getSeconds():currentdate.getSeconds());

        return datetime;
    }
}

export const common = new CommonController();
