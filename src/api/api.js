class CommandApi {
    constructor(url, apiKey=null) {
        this.url = url
        this.apiKey = apiKey
    }


    async getCommand (uriParams) {
        try {

            // try to get log
            const command = await fetch('GET', `this.url&command=${uriParams}`) 
            if (command.data.resultCode === 0) {  // correct response
                return command.data.log
            } else {
                return null
            }
        } catch (err) {
            console.error(err)
        }
    }

}

export default new CommandApi('YOUR URL')